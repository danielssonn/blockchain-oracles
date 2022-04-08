const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("Digital Identity setup", function () {

    before(async function () {
       
        DigitalIdentity = await hre.ethers.getContractFactory("DigitalIdentity");
        did = await DigitalIdentity.deploy();

        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        await did.setName(owner.address, "Bugs Bunny");
        await did.setTitle(owner.address, "Chief Carrot Eater");
    })
    it("Should get DID name", async function () {
        expect(await did.getName(owner.address)).to.equal("Bugs Bunny");;
    });

    it("Should get DID title", async function () {
        expect(await did.getTitle(owner.address)).to.equal("Chief Carrot Eater");;
    });

    describe("Digital Identity setup for someone else", function () {

        before(async function () {
           
            DigitalIdentity = await hre.ethers.getContractFactory("DigitalIdentity");
            did = await DigitalIdentity.deploy();
    
            [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    
            await did.setName(addr1.address, "Bugs Bunny");
            await did.setTitle(addr1.address, "Chief Carrot Eater");
        })
        it("Should get DID name", async function () {
            expect(await did.getName(addr1.address)).to.equal("");;
        });
    
        it("Should get DID title", async function () {
            expect(await did.getTitle(addr1.address)).to.equal("");;
        });
    
    
    
    })


})