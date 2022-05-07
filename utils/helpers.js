const addresses = require("../utils/addresses");
const forkedNetwork = process.env.NETWORK;
const isPolygon = hre.network.name === "polygon" || forkedNetwork == 'polygon';
const isMainnet = hre.network.name === "mainnet"  || forkedNetwork == 'polygon';
const isLocalHost = hre.network.name === "localhost";
const isFork = hre.network.name == "hardhat";

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
      isMainnet,
      isLocalHost,
      isFork,
      forkedNetwork
  }