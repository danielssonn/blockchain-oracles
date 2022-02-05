const hre = require("hardhat");

async function main() {

    const ORACLE_CONTRACT = "0x7cBF93692cbBA821E69660221Ce604e73a80B40F"
    // const ORACLE_CONTRACT = "0x8b7E844d7B0Ac6Bc1Bb534FD59125B4eA37fA87e"
    const ORACLE_CONSUMER_CONTRACT = "0xB71C17943a60D225BC1196DfA90FCEcBf914e78a"
    const CHAINLINK_NODE = "0xf7FE92d34a5ef579Ef66E7B04dBAD43E9C0Cda89"
    const CHAINLINK_JOB_ID = "3addc1b1f9954f55bfc191711895bf58"


    const Oracle = await ethers.getContractFactory("Oracle");
    const oracle = await Oracle.attach(
        ORACLE_CONTRACT// The deployed contract address
    );

    // set the Address of our Chainlink Node on Oracle - once
    //await oracle.setFulfillmentPermission(CHAINLINK_NODE, true);


    const OracleConsumer = await hre.ethers.getContractFactory("OracleConsumer");
    const oracleConsumer = await OracleConsumer.attach(
        ORACLE_CONSUMER_CONTRACT // The deployed contract address
    );

    // Send Link to the oracleConsumer!   

    //request info via Oracle
    console.log("Oracle address ", oracle.address)
    const tx = await oracleConsumer.requestEthereumPrice(oracle.address, CHAINLINK_JOB_ID)
    await tx.wait()

    console.log('ETH price requested via Oracle')

}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });