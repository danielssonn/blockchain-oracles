require('dotenv').config({ path: '../.env' })

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const KOVAN_PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)

const contract = require("../artifacts/contracts/Award.sol/Award.json")
const contractAddress = "0x9B50B6854c2A963f2C0554798De7812069cC97C3"
const awardContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintAward(tokenURI) {


    // Au MANUEL! Shift stick FTW! Save the manuals!

    // 1. Get NONCE
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    console.log("Nonce ", nonce)
    //2 . Compose transaction
    const tx = {
        from: PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: awardContract.methods.mintAward(PUBLIC_KEY, tokenURI).encodeABI(),
    }


    // 3. Sign transaction and send it
    const signPromise = web3.eth.accounts.signTransaction(tx, KOVAN_PRIVATE_KEY)

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

mintAward("https://gateway.pinata.cloud/ipfs/QmcEwKVcDGJEwZx5RC7QyYts2eSmQbvjjGz7fchEfyaYLt")