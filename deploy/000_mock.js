require("hardhat");
const { utils } = require("ethers");
const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { parseUnits, formatUnits } = require("ethers").utils;
const { getTokenAddresses,isLocalHost, isFork } = require('../utils/helpers');
const {
    deployWithConfirmation,
    withConfirmation,
    log,
} = require("../utils/deploy");

const deployMockChainlinkPriceFeed = async () => {

    await deployWithConfirmation('MockChainlinkOracleFeed',[parseUnits("1", 8).toString(), 18]);

}

const main = async ()=>{
    await deployMockChainlinkPriceFeed();
}

main.id = "001_core";
main.skip = () => !isLocalHost
module.exports = main;