import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// import contractABI, contractAddress
import { stakingABI, awardABI, stakingContractAddress, awardContractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()

const stakingContract = new ethers.Contract(stakingContractAddress, stakingABI, signer)
const awardContract = new ethers.Contract(awardContractAddress, awardABI, signer)

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [awardCountDown, setAwardCountDown] = useState(0)

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
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

      setCurrentAccount(accounts[0].address)
      getAwardCountDownDays()
      // getAllStakes(accounts[0].address)
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

  const getAllStakes = async (staker) => {
    try {
      console.log('staker address', staker)
      const stakees = await stakingContract.getAllStakes('0xC6f5fA770492d1FB49220b94518f47841bB6Db9e')

      console.log(stakees)
    } catch (error) {
      console.log(error)
    }
  }

  const stake = async (tokens) => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')
      getMyTokenBalance(currentAccount)

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
    getAwardCountDownDays()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ connectWallet, currentAccount, stake, awardCountDown }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
