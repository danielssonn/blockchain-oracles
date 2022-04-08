// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./StakingToken.sol";
import "./RewardToken.sol";

/**
 * Staking creates an incentive model for anyone to stake into other people's success
 * Once a person gets recognized for their achievement, everyone who staked in them is also rewarded
 * Two ERC20 tokens drive staking - StakingToken and RewardToken
 * StakingTokens are distributed to everyone
 * Supply and distribution of RewardTokens is controlled to increase value and decrease inflationary pressure
 * Staking contract allows staking, withdrawals and reward management
 * Award contract will rebalance the staking rewards upon minting Award winners
 */
contract Staking is Ownable, ReentrancyGuard {
    // Two ERC20 Tokens to drive staking and rewards
    IERC20 public rewardsToken;
    IERC20 public stakingToken;

    uint256 public lastUpdateTime;

    // Total stakes and individual stake balances and rewards
    uint256 private _totalStakes;
    mapping(address => uint256) private _balances;
    mapping(address => uint256) public rewards;

    // Individual mominators and their nominees with stakes
    mapping(address => address[]) public nomineeStakers;
    mapping(address => mapping(address => uint256))
        public nominatorStakesBalance;
    mapping(address => address[]) public nominatorStakes;

    // Stakers and Stakees
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public stakers;

    constructor(address _stakingToken, address _rewardsToken) {
        stakingToken = IERC20(_stakingToken);
        rewardsToken = IERC20(_rewardsToken);
    }

    /**
     *
     */
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

        // 4. update total stakes and staker
        stakes[msg.sender]++;
        stakers[_nominee]++;

        // 5. get the stake transferred
        stakingToken.transferFrom(msg.sender, address(this), _amount);

        // 6. publish staked event ...
        emit Staked(msg.sender, _amount);
    }

    /**
     * Once the Award contract determines a new achiever, it will call this method to rebalance all stakes
     * Stake rebalancing will reward stakers with stakes in achievers
     * Should become non view function once implemented
     */
    function rebalanceStakes(address winner) public view onlyOwner {
        // find everyone who has staked in the winner
        for (uint256 i = 0; i < nomineeStakers[winner].length; ++i) {
            // !!!! The actual tokenomic model will be implemented here !!!
        }
    }

    /**
     * Stake reversal. Need to think if this an economic action and should result in burn of tokens ...
     */
    function unStake(address _nominee, uint256 _amount) external nonReentrant {
        // 1.Update the staking balance for the staker and their stake. Could something go wrong here?

        nominatorStakesBalance[msg.sender][_nominee] =
            nominatorStakesBalance[msg.sender][_nominee] -
            _amount;

        // 2. update total stakes and staker
        stakes[msg.sender]--;
        stakers[_nominee]--;
        // 3. remove the staker from nominee's list, if the staking balance is zero

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

        emit Unstaked(msg.sender, _amount);
    }

    /**
     * Transfer or Reward Tokens to owner's wallet
     */
    function harvest() external {
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        rewardsToken.transfer(msg.sender, reward);
        emit Harvested(msg.sender, reward);
    }

    // Some funky Solidity stuff to return the mapping values ...
    function getAllStakes(address staker)
        public
        view
        returns (address[] memory)
    {
        address[] memory ret = new address[](stakes[staker]);
        for (uint256 i = 0; i < stakes[staker]; i++) {
            ret[i] = nominatorStakes[staker][i];
        }
        return ret;
    }

    function getAllStakers(address stakee)
        public
        view
        returns (address[] memory)
    {
        address[] memory ret = new address[](stakers[stakee]);
        for (uint256 i = 0; i < stakers[stakee]; i++) {
            ret[i] = nomineeStakers[stakee][i];
        }
        return ret;
    }

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);

    event Harvested(address indexed user, uint256 amount);
    event Kept(address indexed user, uint256 amount);
}
