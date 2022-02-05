
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Oracle = await hre.ethers.getContractFactory("Oracle");


  /** deploy Oracle contract with LINK token contract adddress on Kovan - only once in the inital setup
   * The Oracle contract address is required in both the APIConsumer and the Chainlink node job - see /config/Job... .toml for details
   * We do not want to deploy many of these, as it complicates the setup
   * Use deployed contract 0x7cBF93692cbBA821E69660221Ce604e73a80B40F 
   
    const oracle = await Oracle.deploy('0xa36085F69e2889c224210F603D836748e7dC0088');
    await oracle.deployed();
    console.log("Oracle deployed to:", oracle.address);
  */


  // deploy APIConsumer contract
  const APIConsumer = await hre.ethers.getContractFactory("APIConsumer");
  const apiConsumer = await APIConsumer.deploy();

  await apiConsumer.deployed();
  console.log("APIConsumer deployed to:", apiConsumer.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
