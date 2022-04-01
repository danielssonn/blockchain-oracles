async function main() {



    const StakingToken = await ethers.getContractFactory("StakingToken")
    const stakingTKN = await StakingToken.deploy()
    await stakingTKN.deployed()
    console.log("Award contract deployed to address:", stakingTKN.address)
  
  
    const RewardToken = await ethers.getContractFactory("RewardToken")
    const rewardTKN = await RewardToken.deploy()
    await rewardTKN.deployed()
    console.log("Award contract deployed to address:", rewardTKN.address)
  
  
    // const AMLAdapter = await ethers.getContractFactory("AMLAdapter")
    // const amlAdapter = await AMLAdapter.deploy()
    // await amlAdapter.deployed()
    // console.log("AML Oracle contract deployed to address:", amlAdapter.address)


    // const HRAdapter = await ethers.getContractFactory("HRAdapter")
    // const hrAdapter = await HRAdapter.deploy()
    // await hrAdapter.deployed()
    // console.log("HR Oracle contract deployed to address:", hrAdapter.address)
  
  
    // 1. deploy StakingToken
    // 2. deploy RewardToken
    // 3. deploy Oracles
    // 4. deploy Award 
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  
  