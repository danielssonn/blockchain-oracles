async function main() {



  // const StakingToken = await ethers.getContractFactory("StakingToken")
  // const stakingTKN = await StakingToken.deploy()
  // await stakingTKN.deployed()
  // console.log("StakingTKN contract deployed to address:", stakingTKN.address)


  // const RewardToken = await ethers.getContractFactory("RewardToken")
  // const rewardTKN = await RewardToken.deploy()
  // await rewardTKN.deployed()
  // console.log("RewardTKN contract deployed to address:", rewardTKN.address)

  // const AMLAdapter = await ethers.getContractFactory("AMLAdapter")
  // const amlAdapter = await AMLAdapter.deploy()
  // await amlAdapter.deployed()
  // console.log("AML Oracle contract deployed to address:", amlAdapter.address)


  // const HRAdapter = await ethers.getContractFactory("HRAdapter")
  // const hrAdapter = await HRAdapter.deploy()
  // await hrAdapter.deployed()
  // console.log("HR Oracle contract deployed to address:", hrAdapter.address)


  const Award = await ethers.getContractFactory("Award")
  const award = await Award.deploy('0x5fbd2a860d007d54c5b698b0efcd150f8c8cc7d1', '0x6771a1bebac8ff6affc2b88f6240b694675af251')
  await award.deployed()
  console.log("Award contract deployed to address:", award.address)


  // 1. deploy StakingToken
  // 2. deploy RewardToken
  // 3. deploy Oracles - see ../../oracles 
  // 4. deploy Award 

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

