// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./StakingToken.sol";
import "./RewardToken.sol";
import "hardhat/console.sol";

contract StakingNominations is Ownable, ReentrancyGuard {
    // Two ERC20 Tokens to drive staking and rewards
    IERC20 public rewardsToken;
    IERC20 public stakingToken;

    uint256 public rewardRate = 100;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    // Total stakes and individual stake balances and rewards
    uint256 private _totalStakes;
    mapping(address => uint256) private _balances;
    mapping(address => uint256) public rewards;
    mapping(address => uint256) public userRewardPerTokenPaid;

    // Individual mominators and their nominees with stakes
    mapping(address => address[]) public nomineeStakers;
    mapping(address => mapping(address => uint256))
        public nominatorStakesBalance;
    mapping(address => address[]) public nominatorStakes;

    constructor(address _stakingToken, address _rewardsToken) {
        stakingToken = IERC20(_stakingToken);
        rewardsToken = IERC20(_rewardsToken);
    }

    function stake(address _nominee, uint256 _amount) public nonReentrant {
        // 1. update the staking balance for the staker and their stake. Could something go wrong here?
        nominatorStakesBalance[msg.sender][_nominee] =
            nominatorStakesBalance[msg.sender][_nominee] +
            _amount;

        // 2. updated the staking lists
        nomineeStakers[_nominee].push(msg.sender);
        nominatorStakes[msg.sender].push(_nominee);

        // 3. update total stakes. this is to save on gas when calculating the rewards eventually
        _totalStakes += _amount;
        _balances[msg.sender] += _amount;

        // 4. get the stake transferred
        stakingToken.transferFrom(msg.sender, address(this), _amount);

        // 5. publish staked event ...
        emit Staked(msg.sender, _amount);
    }

    function rebalanceStakes(address winner) public onlyOwner {
        // find everyone who has staked in the winner
        for (uint256 i = 0; i < nomineeStakers[winner].length; ++i) {
            // give them 10x?
            nominatorStakesBalance[nomineeStakers[winner][i]][winner] = 10;

            // The full Tokenomic model will be implemented here

        }
    }

    function withdraw(address _nominee, uint256 _amount)
        external
        nonReentrant
        updateReward(msg.sender)
    {
        // 1.Update the staking balance for the staker and their stake. Could something go wrong here?

        nominatorStakesBalance[msg.sender][_nominee] =
            nominatorStakesBalance[msg.sender][_nominee] -
            _amount;

        // 2. remove the staker from nominee's list, if the staking balance is zero

        if (nominatorStakesBalance[msg.sender][_nominee] == 0) {
            for (uint256 i = 0; i < nomineeStakers[_nominee].length; i++) {
                if (nomineeStakers[_nominee][i] == msg.sender) {
                    nomineeStakers[_nominee][i] = nomineeStakers[_nominee][
                        nomineeStakers[_nominee].length - 1
                    ];
                    nomineeStakers[_nominee].pop();
                }
            }
            for (uint256 i = 0; i < nominatorStakes[msg.sender].length; i++) {
                if (nominatorStakes[msg.sender][i] == _nominee) {
                    nominatorStakes[msg.sender][i] = nominatorStakes[
                        msg.sender
                    ][nominatorStakes[msg.sender].length - 1];
                    nominatorStakes[msg.sender].pop();
                }
            }
        }
        // 3. update total stakes
        _totalStakes -= _amount;
        _balances[msg.sender] -= _amount;

        // 4. transfer staking token back
        stakingToken.transfer(msg.sender, _amount);

        emit Harvested(msg.sender, _amount);
    }

    function getReward() external updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        rewardsToken.transfer(msg.sender, reward);
    }

    function rewardPerToken() public view returns (uint256) {
        if (_totalStakes == 0) {
            return rewardPerTokenStored;
        }
        return
            rewardPerTokenStored +
            (((block.timestamp - lastUpdateTime) * rewardRate * 1e18) /
                _totalStakes);
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

    event Staked(address indexed user, uint256 amount);
    event Harvested(address indexed user, uint256 amount);
    event Kept(address indexed user, uint256 amount);
}
