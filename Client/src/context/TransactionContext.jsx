import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// import contractABI, contractAddress
import { stakingABI, awardABI, stakingContractAddress, awardContractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getStakingContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const stakingContract = new ethers.Contract(stakingContractAddress, stakingABI, signer)

  return stakingContract
}

const getAwardContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const stakingContract = new ethers.Contract(awardContractAddress, awardABI, signer)

  return stakingContract
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [awardCountDown, setAwardCountDown] = useState('')

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
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
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const getMyTokenBalance = async () => {
    const stakingContract = getStakingContract()

    // console.log(stakingContract)
    console.log(currentAccount)
    const balance = await stakingContract.nomineeStakers(currentAccount, 0)
    console.log(balance)

    // 0xC6f5fA770492d1FB49220b94518f47841bB6Db9e
  }

  const stake = async (tokens) => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')
      // getMyTokenBalance()

      console.log(`staking ${tokens} tokens`)
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object')
    }
  }

  const getAwardCountDownDays = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const awardContract = getAwardContract()
      const awardDate = await awardContract.awardDate()
      const days = parseInt(ethers.utils.formatEther(awardDate._hex))

      setAwardCountDown(days)
      console.log('count down', days)

      // const budget = await awardContract.getTotalAwardBudget()

      // console.log(ethers.utils.formatEther(budget._hex))

      // setAwardCountDown(days)
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
