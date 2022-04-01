const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Basic Staking", function () {

    before(async function () {

        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        Staking = await hre.ethers.getContractFactory("Staking");
        StakingToken = await hre.ethers.getContractFactory("StakingToken");
        RewardToken = await hre.ethers.getContractFactory("RewardToken");

        stakingTKN = await StakingToken.deploy();
        rewardTKN = await RewardToken.deploy();

        staking = await Staking.deploy(stakingTKN.address, rewardTKN.address);
        await stakingTKN.transfer(addr1.address, 10)
        await stakingTKN.approve(staking.address, 10);
        await staking.stake(addr1.address, 10);

    })

    it("Should update stakin balance", async function () {

        expect(await staking.nominatorStakesBalance(owner.address,addr1.address)).to.equal(10)
        
   
    });

    it("Should update stakers list", async function () {

        expect(await staking.nomineeStakers(addr1.address, 0)).to.equal(owner.address)
   
    });

    it("Should update stakee list", async function () {

        expect(await staking.nominatorStakes(owner.address, 0)).to.equal(addr1.address)
        
    });

    describe("Basic Stake Withdrawal", function () {
    
        before(async function () {
            await staking.unStake(addr1.address, 10);
        })
        it("Should update stakin balance", async function () {

            expect(await staking.nominatorStakesBalance(owner.address,addr1.address)).to.equal(0)
            
       
        });
        it("Should remove from stakers list after withdrawal", async function () {

            expect(staking.nomineeStakers(addr1.address, 0)).to.be.reverted
       
        });
        it("Should remove from stakee list after withdrawal", async function () {

            expect(staking.nominatorStakes(owner.address, 0)).to.be.reverted
            
        });
    
    })

}
)