/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY = "4pM_Py-SBLDsKMTNFSCHsIoM3kg5U6cy";
const GOERLI_PRIVATE_KEY="51689ea9a47d214f4e09e9feba720132a205d4764f86a6824bb6f7f2c21711d1";
module.exports = {
  solidity: "0.8.9",

  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${GOERLI_PRIVATE_KEY}`]
    },
  }
};
