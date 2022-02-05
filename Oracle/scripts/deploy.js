
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Oracle = await hre.ethers.getContractFactory("Oracle");

  // deploy with LINK token contract adddress on Kovan
  const oracle = await Oracle.deploy('0xa36085F69e2889c224210F603D836748e7dC0088');
  await oracle.deployed();
  console.log("Oracle deployed to:", oracle.address);


  const OracleConsumer = await hre.ethers.getContractFactory("OracleConsumer");
  const oracleConsumer = await OracleConsumer.deploy();

  await oracleConsumer.deployed();
  console.log("OracleConsumer deployed to:", oracleConsumer.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
