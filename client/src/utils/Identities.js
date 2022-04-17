export const colleagueDataTemplate = {
  profile: 'user',
  fullName: 'Your Colleague Name',
  jobTitle: 'Check your colleague\'s staking details',
  stakingPool: 0,
  totalStakers: 0
}

export const colleaguesInfoData = []

const randomProfileImage = () => {
  return `nf${Math.floor(Math.random() * 5 + 1)}`
}

const randomNumber = (max) => {
  return Math.floor(Math.random() * max + 1)
}

export const fetchEmployeeIdDate = (address, fullName) => {
  return {
    address,
    profile: randomProfileImage(),
    fullName,
    jobTitle: 'Check your colleague\'s staking details',
    stakingPool: randomNumber(50) * 10,
    totalStakers: randomNumber(10),
    staked: 0,
    time: 0

  }
}
