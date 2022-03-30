// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./StakingToken.sol";
import "./RewardToken.sol";
import "hardhat/console.sol";

contract StakingNominations is Ownable {
    // ERC20 token we'll use to distribute rewards for staking
    IERC20 public rewardsToken;

    // ERC20 token to make stakes
    IERC20 public stakingToken;

    uint256 public rewardRate = 100;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    uint256 private _totalSupply;

    // all nominators staking into a nominee
    mapping(address => address[]) public nomineeStakers;

    // a nominator can nominate multiple nominees and stake towards them
    mapping(address => mapping(address => uint256))
        public nominatorStakesBalance;

    // all nominees for a nominator
    mapping(address => address[]) public nominatorStakes;

    mapping(address => uint256) public userRewardPerTokenPaid;

    mapping(address => uint256) public rewards;

    mapping(address => uint256) private _balances;

    constructor(address _stakingToken, address _rewardsToken) {
        stakingToken = IERC20(_stakingToken);
        rewardsToken = IERC20(_rewardsToken);
    }

    function stake(address _nominee, uint256 _amount) public {
        _totalSupply += _amount;
        _balances[msg.sender] += _amount;

        stakingToken.transferFrom(msg.sender, address(this), _amount);
        // set stake for a _nominee
        nominatorStakesBalance[msg.sender][_nominee] =
            nominatorStakesBalance[msg.sender][_nominee] +
            _amount;

        nomineeStakers[_nominee].push(msg.sender);

        nominatorStakes[msg.sender].push(_nominee);
    }

    function rebalanceStakes(address winner) public onlyOwner {
        // find everyone who has staked in the winner
        for (uint256 i = 0; i < nomineeStakers[winner].length; ++i) {
            // give them 10x?
            nominatorStakesBalance[nomineeStakers[winner][i]][winner] = 10;
        }
    }

    function withdraw(uint256 _amount) external updateReward(msg.sender) {
        _totalSupply -= _amount;
        _balances[msg.sender] -= _amount;
        stakingToken.transfer(msg.sender, _amount);
    }

    function getReward() external updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        rewardsToken.transfer(msg.sender, reward);
    }

    function rewardPerToken() public view returns (uint256) {
        if (_totalSupply == 0) {
            return rewardPerTokenStored;
        }
        return
            rewardPerTokenStored +
            (((block.timestamp - lastUpdateTime) * rewardRate * 1e18) /
                _totalSupply);
    }

    function earned(address account) public view returns (uint256) {
        return
            ((_balances[account] *
                (rewardPerToken() - userRewardPerTokenPaid[account])) / 1e18) +
            rewards[account];
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;

        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        _;
    }
}
