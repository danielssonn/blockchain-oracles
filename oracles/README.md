# You Got The Gift, But It Looks Like You're Waiting For Something.

![](https://github.com/danielssonn/blockchain-oracles/blob/224084dcf3304cf6c4e4ccec9d80e13983945d57/assets/Chainlink%20Architecture.png)

## Yes, that Oracle. What this does:

- [x] Oracle contracts can request employee eligibility and AML checks against external APIs
- [x] Ex: to collect a vested crypto award, winner must still be an employee
- [x] Ex: the walet address used must successfully pass on-chain AML check
- [x] Resolved via Chainlink Node, with external adapter written in Node.js making the API call to mock services deployed to AWS API gateaway
- [x] Contracts get updated with API response within the same block transaction.
 

## Ethereum

- [x] APIConsumer is the contract that will call the Oracle
- [x] Full request -> fulfill roundtrip working via Chainlink Oracle node

## Chainlink

- [x] Running a **local Chainlink Node in docker** 
- [x] Chainlink Node Jobs, Nodes and Bridges are replicated in toml files in /config
- [x] External Adapter setup in Node.js
- [ ] **Need to setup distributed deployment of multiple nodes, to light up the oracle pattern** 

## AWS

- [x] Lambda deployment for the extenal adpater
- [x] API Gateway deployment of mock HR and AML services


