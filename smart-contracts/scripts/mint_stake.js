require('dotenv').config({ path: '../.env' })

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL_KOVAN
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)



async function transferTokens() {
    contract = require("../artifacts/contracts/StakingToken.sol/StakingToken.json")
    contractAddress = "0x90Da70646c80Cb1CdeAbE996B729809809983e54"
    stakingTokenContract = new web3.eth.Contract(contract.abi, contractAddress)


    // Au MANUEL! Shift stick FTW! Save the manuals!

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: stakingTokenContract.methods.transfer("0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6", 10*18).encodeABI(),
    }

    signAndSend(tx);
}

async function approve() {
    contract = require("../artifacts/contracts/StakingToken.sol/StakingToken.json")
    contractAddress = "0x90Da70646c80Cb1CdeAbE996B729809809983e54"
    stakingTokenContract = new web3.eth.Contract(contract.abi, contractAddress)


    // Au MANUEL! Shift stick FTW! Save the manuals!

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: stakingTokenContract.methods.approve('0xC3ea941fDf8347835Af3E82b1B6C3065c4A43e55', 100*18).encodeABI(),
    }

    signAndSend(tx);
}


async function stakeTokens(){
    contract = require("../artifacts/contracts/Staking.sol/Staking.json")
    contractAddress = "0xC3ea941fDf8347835Af3E82b1B6C3065c4A43e55"
    stakingContract = new web3.eth.Contract(contract.abi, contractAddress)

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
        
        const tx = {
            from: PUBLIC_KEY,
            to: contractAddress,
            nonce: nonce,
            gas: 500000,
            data: stakingContract.methods.stake("0xFf961b90F914bB9c3d2B839DDdF6C1c926B712E6", 10*18).encodeABI(),
        }    
    
        signAndSend(tx);

}

function signAndSend(tx){
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)

    signPromise
        .then((signedTx) => {
            console.log("sending signed transaction")
            web3.eth.sendSignedTransaction(
                signedTx.rawTransaction,
                function (err, hash) {
                    if (!err) {
                        console.log(
                            "The hash of your transaction is: ",
                            hash,
                            "\nCheck Alchemy's Mempool to view the status of your transaction!"
                        )
                    } else {
                        console.log(
                            "Something went wrong when submitting your transaction:",
                            err
                        )
                    }
                }
            )
        })
        .catch((err) => {
            console.log("Promise failed:", err)
        })

}

// transferTokens()
// approve()
// stakeTokens()
