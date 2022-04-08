import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// import contractABI, contractAddress
import { stakingABI, awardABI, stakingTknABI, digitalIdABI, digitalIdContractAddress, stakingTknContractAddress, stakingContractAddress, awardContractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()

const stakingContract = new ethers.Contract(stakingContractAddress, stakingABI, signer)
const awardContract = new ethers.Contract(awardContractAddress, awardABI, signer)
const stakingTknContract = new ethers.Contract(stakingTknContractAddress, stakingTknABI, signer)
const digitalIdContract = new ethers.Contract(digitalIdContractAddress, digitalIdABI, signer)

export const TransactionProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')

  const setUserIdentity = async (name) => {
    setCurrentUser(name)
    console.log(currentAccount)
    await digitalIdContract.setName(currentAccount, name)
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        console.log('accounts', accounts)
        setCurrentAccount(accounts[0])
        checkUserName(accounts[0])
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // check if user's address has token, mint tokens if not
  const mintToken = async (addr) => {
    const mintTx = await stakingTknContract.mint(addr, 250)

    const rc = await mintTx.wait()

    console.log(rc)

    const { event } = rc.events.find(e => {
      return e.event === 'Minted' || e.event === 'NotMinted'
    })

    console.log(event)

    console.log('event in minttoken', event)

    return event === 'Minted'
  }

  // check user's name in DigitalIdentity contract
  const checkUserName = async (addr) => {
    const name = await digitalIdContract.getName(addr)
    console.log(name)
    setCurrentUser(name)
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])

      const tokenMinted = await mintToken(accounts[0])

      if (!tokenMinted) {
        await checkUserName(accounts[0])
      }

      return tokenMinted
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const stake = async (tokens, stakeeAddress) => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      // transfer
      const transferTX = await stakingTknContract.transfer(currentAccount, tokens)
      const transferRc = await transferTX.wait()
      console.log(transferRc)

      // approve
      const approveTX = await stakingTknContract.approve(stakingContractAddress, tokens)
      const approveRc = await approveTX.wait()
      console.log(approveRc)

      // stake
      const stakeTX = await stakingContract.stake(stakeeAddress, tokens)
      const stakeRc = await stakeTX.wait()
      console.log(stakeRc)

      console.log(`staking ${tokens} tokens`)
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
      value={{ connectWallet, currentAccount, stake, currentUser, setCurrentUser, setUserIdentity }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
