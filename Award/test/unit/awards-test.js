const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Award setup", function () {

    before(async function () {
        Award = await hre.ethers.getContractFactory("Award");
        award = await Award.deploy();
        await award.deployed();
    })

    it("Should revert minting with low budget", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        expect(award.mintWinner(addr1.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")).to.be.reverted;
    });


    it("Should set budget budget", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        let overrides = {
            value: ethers.utils.parseEther("1.0")
        };
        await award.addToAwardsBudget(overrides);

        expect(await award.getTotalAwardBudget()).to.equal(ethers.utils.parseEther("1.0"));
    });

    it("Should revert for wrong winner", async function () {
        expect(award.mintWinner(owner.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")).to.be.revertedWith('Sorry, the organizers cannot win awards!');;
    });


    describe("Mint Award", function () {
        it("Should have one winner for one Award", async function () {

        });

        it("Should have one winner for two Award", async function () {

        });
        it("Should have created NFTs with correct IDs", async function () {

        });
        it("Should be vesting for correct time", async function () {

        });


        describe("Withdraw Awards", function () {


            it("Should not be withdrawable while vesting", async function () {

            });
            it("Should be withdrawable after vesting", async function () {

            });
            it("Should update budget correctly after issuing award", async function () {

            });
            it("Should not be withdrawable if not longer employed", async function () {

            });


        })
    })
});