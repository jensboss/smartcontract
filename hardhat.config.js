/**  
* @type import('hardhat/config').HardhatUserConfig 
*/

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

const { API_URL, PRIVATE_KEY } = process.env;
const { MAINNET_API_URL, MAINNET_PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY  = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: MAINNET_API_URL,
      accounts: [MAINNET_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
      mainnet: ETHERSCAN_API_KEY
    }
  }
};
