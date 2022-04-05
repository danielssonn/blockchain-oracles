## Stake in Success - new incentive system for success recognition

**[Incentive theory](/Incentives.md)**
![](./assets/Tokenomics.png)


## Design Overview


![](./assets/Award%20Contract.png)


## Staking Contract Details

- [x] Staking creates an incentive model for anyone to stake into other people's success
- [x] Once a person gets recognized for their achievement, everyone who staked in them is also rewarded
- [x] Two ERC20 tokens drive staking - StakingToken and RewardToken
- [x] StakingTokens are distributed to everyone
- [x] Supply and distribution of RewardTokens is controlled to increase value and decrease inflationary pressure
- [x] Staking allows staking, withdrawals and reward management
- [x] Award contract will rebalance the staking rewards upon minting Award winners

https://kovan.etherscan.io/address/0x2aD5BBe325Ca588F48029b5A135BE564e55Cf623#code

## Award Contract Details

- [x] Awards contract has an overall budget, that can be augmented by addToAwardsBudget()
- [x] This will be a real transfer of ETH, the sender must be valid and have the amount of ETH in their account
- [x] Awards can then be minted
- [x] ETH will be moved from the Award budget, and vested for the winner for a vesting period 
- [x] ETH in the individual award can be withdrawn, if vesting period has passed by withdrawAwardETH
- [x] Award will only be minted if there is available budget
- [x] Award will not be minted for organizers
- [x] On-chan AML check will be performed on winner's wallet to ensure it is not on a 'bad list' via Oracle
- [x] Off-chain HR check will be performed to ensure the award winner is still an employee when collecting award
- [x] Minting of award will rebalance and rebase all stakes in Staking contract

https://kovan.etherscan.io/address/0xeFCE7E9B8AB2534ce0eA704d5a0709B3dfD5Bb47#code

## Staking Token

https://kovan.etherscan.io/address/0x464841a4d01d299873f6815190061b350159bcf0#readContract



