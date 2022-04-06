import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// import contractABI, contractAddress
import { stakingABI, awardABI, stakingTknABI, stakingTknContractAddress, stakingContractAddress, awardContractAddress } from '../utils/constants'
import { user, NPCs } from '../utils/UserMapping'

export const TransactionContext = React.createContext()

const { ethereum } = window

const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()

const stakingContract = new ethers.Contract(stakingContractAddress, stakingABI, signer)
const awardContract = new ethers.Contract(awardContractAddress, awardABI, signer)
const stakingTknContract = new ethers.Contract(stakingTknContractAddress, stakingTknABI, signer)

const hex2number = (hex) => {
  return ethers.utils.formatEther(hex) * 1000000000000000000
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [awardCountDown, setAwardCountDown] = useState(0)
  const [stakedArr, setStakedArr] = useState([])

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        console.log('accounts', accounts)
        setCurrentAccount(accounts[0])
        getAwardCountDownDays()
        getAllStakes(accounts[0])
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
      getAwardCountDownDays()
      getAllStakes(accounts[0])
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const getMyTokenBalance = async (staker) => {
    console.log('staker', staker)
    const balance = await stakingContract.lastUpdateTime()
    console.log(balance)

    // 0xC6f5fA770492d1FB49220b94518f47841bB6Db9e
  }

  // get everyone user staked
  const getAllStakes = async (staker) => {
    try {
      const stakeeAddresses = await stakingContract.getAllStakes(staker)

      stakeeAddresses.map(async addr => {
        const stakee = NPCs[addr]

        const stakedHex = await stakingContract.nominatorStakesBalance(staker, addr)
        const staked = hex2number(stakedHex._hex)
        stakee.staked = staked

        const numOfStakerHex = await stakingContract.stakers(addr)
        const numOfStaker = hex2number(numOfStakerHex._hex)
        stakee.totalStakers = numOfStaker

        setStakedArr((preArr) => [...preArr, stakee])
        console.log(stakee)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const stake = async (tokens) => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const parsedAmount = ethers.utils.parseEther(tokens)

      // transfer
      const from = currentAccount
      const to = stakingContractAddress
      const gas = '0x5208'

      // await ethereum.request({
      //   method: 'eth_sendTransition',
      //   params: [{
      //     from,
      //     to,
      //     gas,
      //     value: parsedAmount._hex
      //   }]
      // })

      const s = await stakingTknContract.transfer(to, tokens)

      console.log(s)

      // approve

      // stake

      console.log(`staking ${tokens} tokens`)
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object')
    }
  }

  const getAwardCountDownDays = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const timestamp = await awardContract.awardDate()
      const awardTimestamp = ethers.utils.formatEther(timestamp._hex)

      const today = Math.floor(new Date().getTime() / 1000)
      const awardDate = Math.floor(awardTimestamp * 1000000000000000000)

      const days = Math.floor((awardDate - today) / 86400)
      console.log('days', days)

      setAwardCountDown(days)
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ connectWallet, currentAccount, stake, awardCountDown, stakedArr }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
