async function main() {
  // const Award = await ethers.getContractFactory("Award")
  // const award = await Award.deploy()
  // await award.deployed()
  // console.log("Award contract deployed to address:", award.address)


  // const AwardNFT = await ethers.getContractFactory("AwardNFT")
  // const awardNFT = await AwardNFT.deploy()
  // await awardNFT.deployed()
  // console.log("Award contract deployed to address:", awardNFT.address)

  const AwardNFT = await ethers.getContractFactory("Award")
  const awardNFT = await AwardNFT.deploy("0xB84c29CcDa612a5A63B8e3159Dc7fBe84fe9367c")
  await awardNFT.deployed()
  console.log("Award contract deployed to address:", awardNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

