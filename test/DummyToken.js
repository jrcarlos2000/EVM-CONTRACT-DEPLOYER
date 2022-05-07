const { expect } = require("chai");
const { ethers } = require("hardhat");
const {defaultFixture} = require('./_fixture');
const {loadFixture} = require('../utils/helpers');
const { parseUnits } = require("ethers/lib/utils");

describe("Dummy Token", async () => {
  describe("Oracle", async ()=>{
    it("should read the mint price", async () => {
      const { priceFeed, dummyToken } = await loadFixture(defaultFixture);
      const tests = [
        ["0.80", "0.80"],
        ["1.00", "1.00"],
        ["1.05", "1.05"],
      ];
      for (const test of tests) {
        const [actual, expectedRead] = test;
        await priceFeed['setPrice'](parseUnits(actual,8));
        expect((await dummyToken['getPrice']()).toString()).to.equal(
          parseUnits(expectedRead,8)
        );
      }
    });
  })
});
