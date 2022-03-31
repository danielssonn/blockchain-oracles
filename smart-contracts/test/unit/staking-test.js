const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Basic Staking", function () {

    before(async function () {

        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        StakingNominations = await hre.ethers.getContractFactory("StakingNominations");
        StakingToken = await hre.ethers.getContractFactory("StakingToken");
        RewardToken = await hre.ethers.getContractFactory("RewardToken");

        stakingTKN = await StakingToken.deploy(1000);
        rewardTKN = await RewardToken.deploy(100);

        stakingNomination = await StakingNominations.deploy(stakingTKN.address, rewardTKN.address);
        await stakingTKN.transfer(addr1.address, 10)
        await stakingTKN.approve(stakingNomination.address, 10);
        await stakingNomination.stake(addr1.address, 10);
        // await stakingNomination.stake(addr2.address, 2);

    })

    it("Should update stakin balance", async function () {

        expect(await stakingNomination.nominatorStakesBalance(owner.address,addr1.address)).to.equal(10)
        
   
    });

    it("Should update stakers list", async function () {

        expect(await stakingNomination.nomineeStakers(addr1.address, 0)).to.equal(owner.address)
   
    });

    it("Should update stakee list", async function () {

        expect(await stakingNomination.nominatorStakes(owner.address, 0)).to.equal(addr1.address)
        
    });

    describe("Basic Stake Withdrawal", function () {
    
        before(async function () {
            await stakingNomination.withdraw(addr1.address, 10);
        })
        it("Should update stakin balance", async function () {

            expect(await stakingNomination.nominatorStakesBalance(owner.address,addr1.address)).to.equal(0)
            
       
        });
        it("Should remove from stakers list after withdrawal", async function () {

            expect(stakingNomination.nomineeStakers(addr1.address, 0)).to.be.reverted
       
        });
        it("Should remove from stakee list after withdrawal", async function () {

            expect(stakingNomination.nominatorStakes(owner.address, 0)).to.be.reverted
            
        });
    
    })

}
)