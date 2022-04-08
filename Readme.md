## Stake in Success - new incentive system for success recognition

**[Incentive theory](./Incentives.md)**
![](./assets/Tokenomics.png)

## Design Overview

![](./assets/Award%20Contract.png)

## Staking Contract Details

- [x] Staking creates an incentive model for anyone to stake into other people's success
- [x] Once a person gets recognized for their achievement, everyone who staked in them is also rewarded
- [x] Two ERC20 tokens drive staking - StakingToken and RewardToken
- [x] StakingTokens are distributed to everyone
- [x] Supply and distribution of RewardTokens is controlled to increase value and decrease inflationary pressure
- [x] Staking contract allows staking, withdrawals and reward management
- [x] Award contract will rebalance the staking rewards upon minting Award winners

https://kovan.etherscan.io/address/0xa6519f0701ac7a5b8d14dc76cf6592fe18d20027#code

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

https://kovan.etherscan.io/address/0x3B263598094F56245e538c056628137043dA84F5#code

## Staking Token

- [x] Initial balance of Staking tokens is be minted for each participant, upon wallet connection
- [x] Staking Tokens can be added to wallet using the Import Token feature
- [x] Staking Token is a utility token, without economic value

https://kovan.etherscan.io/address/0x06B8B5B2179Df6b01Cd4a9cb0268fF6fd340B67E#code

## Reward Token

- [x] Reward Tokens will be minted acording to the Tokenomics model
- [x] Tokenomics model will include number of StakingTokens staked, duration of the stake, success of the stakee
- [x] Reward Tokens has monetary characteristics, has economic value and needs to be inflation controlled
- [x] The exact tokenomic model is TBD, and is the very next component on the Roadmap

## Digital Identity Contract

- [x] To represent people vs wallet addresses in the system, this contract provides the identity mapping
- [x] Upon intital wallet connect, user chooses an identity and this contract is ammened
- [x] This is a 'mock' contract, eventually should be replaced by a solution that extends to AD, SSO etc.

https://kovan.etherscan.io/address/0x6A64f3ba3ff31a8D23d6EE62cA6aBac6C1AFD713#code
