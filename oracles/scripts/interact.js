const hre = require("hardhat");

async function main() {

    // keep this static for the most part
    const ORACLE_CONTRACT = "0x7cBF93692cbBA821E69660221Ce604e73a80B40F"

    // changes with any edits and re-deployment of the contract. Remember to fund a new contract with LINK tokens from your wallet!
    const API_CONSUMER_CONTRACT = "0x98Af5f5ff16993D9EB54aFC37b534B1E9155fa5E"


    const Oracle = await ethers.getContractFactory("Oracle");
    const oracle = await Oracle.attach(
        ORACLE_CONTRACT
    );

    // set the Address of our Chainlink Node on Oracle - once
    //await oracle.setFulfillmentPermission(CHAINLINK_NODE, true);


    const APIConsumer = await hre.ethers.getContractFactory("APIConsumer");
    const apiConsumer = await APIConsumer.attach(
        API_CONSUMER_CONTRACT // The deployed contract address
    );



    //request info via Oracle
    console.log("Oracle address ", oracle.address)
    const tx = await apiConsumer.requestPrice()
    await tx.wait()

    console.log('ETH price requested via Oracle')

}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });