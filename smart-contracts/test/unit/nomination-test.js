const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Basic Staking", function () {

    before(async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        AwardNomination = await hre.ethers.getContractFactory("AwardNomination");
        awardNomination = await AwardNomination.deploy();
        await awardNomination.nominateForAward(addr1.address);
        await awardNomination.nominateForAward(addr2.address);

    })

    it("Should update stakers", async function () {

        expect(await awardNomination.nominatorStakesBalance(owner.address,addr1.address )).to.equal(1)
   
    });

    it("Should rebalance ", async function () {
        await awardNomination.rebalanceStakes(addr1.address)
        expect(await awardNomination.nominatorStakesBalance(owner.address,addr1.address )).to.equal(10)
        expect(await awardNomination.nominatorStakesBalance(owner.address,addr2.address )).to.equal(1)
   
    });

})