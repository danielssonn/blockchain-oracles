async function main() {
  // const Award = await ethers.getContractFactory("Award")
  // const award = await Award.deploy()
  // await award.deployed()
  // console.log("Award contract deployed to address:", award.address)


  // const AwardNFT = await ethers.getContractFactory("AwardNFT")
  // const awardNFT = await AwardNFT.deploy()
  // await awardNFT.deployed()
  // console.log("Award contract deployed to address:", awardNFT.address)


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

