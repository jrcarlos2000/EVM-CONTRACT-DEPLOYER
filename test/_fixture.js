const { ethers } = require("hardhat");
const hre = require("hardhat");

async function defaultFixture() {
    await deployments.fixture();
    const dummyToken = await ethers.getContract('DummyToken');
    const priceFeed = await ethers.getContract('MockChainlinkOracleFeed');
    
    return {
        dummyToken,
        priceFeed
    }
}

module.exports = {
    defaultFixture
}