## Lets build ourselves an NFT based Award system

# You Got The Gift, But It Looks Like You're Waiting For Something.

![](https://github.com/danielssonn/blockchain-oracles/blob/224084dcf3304cf6c4e4ccec9d80e13983945d57/assets/Chainlink%20Architecture.png)

## Yes, that Oracle. What this does:
- [x] APIConsumer contract can request current Ether price in USD via Oracles
- [x] Deployed on Kovan testnet: 0x98Af5f5ff16993D9EB54aFC37b534B1E9155fa5E 
- [x] Resolved via Chainlink Node, via external adapter written in Node.js making the API call to cryptocompare.com
- [x] APIConsumer Contract gets updated with the current price, within the transaction
- [ ] Figure out a use case that is relateable to our hackathon, change the contract and API logic. Ex. AML check via the Oracle    


## Client
- [x] Hardhat project scaffolded
- [x] Added Kovan testnet via Alchemy - get your own key and set it in .env
- [x] Added Etherscan Contrack publishing - get your own key from Etherscan and set in .env
- [x] scripts/deploy.js would publish new contracts - if needed
- [x] scripts/interact.js will call the API Consumer Contract and trigger the transaction 
- [x] Eventual front end will do something similar to what is happening in interact.js
- [ ] Still need to create mocks for Chainlink to enable local harhad testing - only [Kovan](https://faucets.chain.link/) in the meantime. 



## Ethereum

- [x] APIConsumer is the contract that will call the Oracle 
- [x] Oracle is another contract that knows which Oracle to call
- [x] Full request -> fulfill roundtrip working via Chainlink Oracle node


## Chainlink

- [x] Running a local Chainlink Node in docker
- [x] Chainlink Node Jobs, Nodes and Bridges are replicated in toml files in /config
- [x] External Adapter setup in Node.js    

AWS
- [x] Lambda deployment for the extenal adpater
- [x] https://guaqr4nbt8.execute-api.us-east-1.amazonaws.com/chainlinkExternalAdapter
- [x] test:
```bash
curl -X POST -H "content-type:application/json" "https://guaqr4nbt8.execute-api.us-east-1.amazonaws.com/chainlinkExternalAdapter" --data '{ "id": 0, "data": { "from": "ETH", "to": "USD" } }'
```

- most work and logic will happen here!
  
