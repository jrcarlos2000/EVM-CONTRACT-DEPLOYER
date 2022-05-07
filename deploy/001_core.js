require("hardhat");
const { utils } = require("ethers");
const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { parseUnits, formatUnits } = require("ethers").utils;
const { getTokenAddresses, isFork } = require('../utils/helpers');
const {
    deployWithConfirmation,
    withConfirmation,
    log,
} = require("../utils/deploy");

const deployUserRegistry = async () => {

    // we read addresses that we want to use for our deployment function
    const tokens = await getTokenAddresses();
    // Named accounts allows us to tell which account we want to use for a certain tx
    const {deployerAddr, governorAddr} = await getNamedAccounts();
    // Signers are used to call signed txs from contracts
    const sGovernor = await ethers.provider.getSigner(governorAddr);
    const sDeployer = await ethers.provider.getSigner(deployerAddr);
    //will deploy a contract and wait for its confirmation
    await deployWithConfirmation('UserRegistry');
    // this is how we read the contract
    const cUserRegistry = await ethers.getContract('UserRegistry');
}

const main = async ()=>{
    await deployUserRegistry();
}

main.id = "001_core";
main.skip = () => isFork;
module.exports = main;