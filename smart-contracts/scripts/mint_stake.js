require('dotenv').config({ path: '../.env' })

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL_KOVAN
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)


const  stakingTokencABI = require("../artifacts/contracts/StakingToken.sol/StakingToken.json")
const  stakingTokenAddress = "0x06B8B5B2179Df6b01Cd4a9cb0268fF6fd340B67E"
const  stakingTokenContract = new web3.eth.Contract(stakingTokencABI.abi, stakingTokenAddress)

const stakingContractABI = require("../artifacts/contracts/Staking.sol/Staking.json")
const stakingContractAddress = "0x4295500Ee314F2C0159cf2d9fBE4914C03477dA1"
const stakingContract = new web3.eth.Contract(stakingContractABI.abi, stakingContractAddress)

const stakee = "0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6";
// const stakee = '0x89E3428b4d48130e7f19a5217e78cb16f8D4180A';
const staker = '0xC6f5fA770492d1FB49220b94518f47841bB6Db9e';



/**
 * 0. Mint tokens. Once we connect wallet (for the first time - zero balnce, zero staked), let's give it some staking tokens
 */
 async function mintTokens() {
    

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    const tx = {
        from: PUBLIC_KEY,
        to: stakingTokenAddress,
        nonce: nonce,
        gas: 500000,
        data: stakingTokenContract.methods.mint(stakee,10).encodeABI(),
    }

    await signAndSend(tx);
}


/**
 * 1. Let's give ourselves some staking tokens, so we can stake. Transfer from the StakingToken supply to our wallet's address.
 */
async function transferTokens() {
    

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    const tx = {
        from: PUBLIC_KEY,
        to: stakingTokenAddress,
        nonce: nonce,
        gas: 500000,
        data: stakingTokenContract.methods.transfer(PUBLIC_KEY,  web3.utils.toBN(100*(10**18))).encodeABI(),
    }

    await signAndSend(tx);
}


/**
 * 2. Staking will be done by the Staking contract. We need to approve the Staking contract to transferFrom on the StakingToken contract
 */
async function approve() {
   
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    const tx = {
        from: PUBLIC_KEY,
        to: stakingTokenAddress,
        nonce: nonce,
        gas: 500000,
        data: stakingTokenContract.methods.approve(stakingContractAddress, web3.utils.toBN(100*(10**18))).encodeABI(),
    }

   await  signAndSend(tx);
}

/**
 * 3. Stake!
 */
async function stakeTokens(){

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
        
        const tx = {
            from: PUBLIC_KEY,
            to: stakingContractAddress,
            nonce: nonce,
            gas: 500000,
            data: stakingContract.methods.stake(stakee, web3.utils.toBN(10*(10**18))).encodeABI(),
        }    
    
    await signAndSend(tx);

}

/**
 * 3. Stake!
 */
 async function getStakes(){

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
        
        const tx = {
            from: PUBLIC_KEY,
            to: stakingContractAddress,
            nonce: nonce,
            gas: 500000,
            data: stakingContract.methods.getAllStakes(PUBLIC_KEY).encodeABI(),
        }    
    
    await signAndSend(tx);

}

async function signAndSend(tx){
  
    const signed  = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log(receipt);
}

async function  main(){
    
    // await mintTokens();
    await transferTokens();
    // await approve();
    // await stakeTokens();  
    // await getStakes();

}

main();
  


