require('dotenv').config({ path: '../.env' })

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL_KOVAN
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)


const  stakingTokencABI = require("../artifacts/contracts/StakingToken.sol/StakingToken.json")
const  stakingTokenAddress = "0x8AD480A0f14aa1E4e79Bc767D5A2f48D49172abB"
const  stakingTokenContract = new web3.eth.Contract(stakingTokencABI.abi, stakingTokenAddress)

const stakingContractABI = require("../artifacts/contracts/Staking.sol/Staking.json")
const stakingContractAddress = "0xC3ea941fDf8347835Af3E82b1B6C3065c4A43e55"
const stakingContract = new web3.eth.Contract(stakingContractABI.abi, stakingContractAddress)

const stakee = "0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6";



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
        data: stakingTokenContract.methods.transfer(PUBLIC_KEY, 10*18).encodeABI(),
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
        data: stakingTokenContract.methods.approve(stakingContractAddress, 10*18).encodeABI(),
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
            data: stakingContract.methods.stake(stakee, 10*18).encodeABI(),
        }    
    
    await signAndSend(tx);

}

async function signAndSend(tx){
  
    const signed  = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);

    console.log(receipt)
       
    
}

async function  main(){
    
    await transferTokens();
    await approve();
    await stakeTokens();  

}

main();
  


