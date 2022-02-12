
# Hardhat setup for Oracles

## After creating or updating contracts 

```shell
npx hardhat compile
```

## Deploy new contracts
```shell
npx hardhat run scripts/deploy.js --network kovan
```

## Interact with contracts
```shell
npx hardhat run scripts/interact.js --network kovan
```

## For brevity
```shell
npm i -g hardhat-shorthand
```
npx hardhat = hh