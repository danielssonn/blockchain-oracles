async function main() {
  const Award = await ethers.getContractFactory("Award")

  // Start deployment, returning a promise that resolves to a contract object
  const award = await Award.deploy()
  await award.deployed()
  console.log("Award contract deployed to address:", award.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
