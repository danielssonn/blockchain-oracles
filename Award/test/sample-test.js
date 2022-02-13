const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Award", function () {
  it("Should return the right name and symbol", async function () {
    const Award = await hre.ethers.getContractFactory("Award");
    const award = await Award.deploy("Achiever", "ACH");

    await award.deployed();
    expect(await award.name()).to.equal("Achiever");
    expect(await award.symbol()).to.equal("ACH");
  });
});
