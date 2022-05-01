const addresses = require("../utils/addresses");
const isPolygon = hre.network.name === "polygon";
const isMainnet = hre.network.name === "mainnet";

const getTokenAddresses = async (deployments) => {

    if(isPolygon) {
      return {
        USDT: addresses.polygon.USDT,
        USDC: addresses.polygon.USDC,
        DAI : addresses.polygon.DAI,
      }
    }
  }

  module.exports = {
      getTokenAddresses,
      isPolygon,
      isMainnet
  }