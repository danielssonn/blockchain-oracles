const { version } = require("chai");

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config({ path: __dirname + '/.env' })


/**
 * .env file
 * ALCHEMY_API_KEY = "{Your API key for Kovan network setup in Alchemy}"
 * KOVAN_PRIVATE_KEY = "{Your private key exported from Metamask under Account Details}"
 * 
 */

const { ALCHEMY_API_KEY, KOVAN_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.7", },
      { version: "0.6.6", },
    ]
  },
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${KOVAN_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }

};
