import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// import contractABI, contractAddress
import { stakingABI, awardABI, stakingTknABI, digitalIdABI, digitalIdContractAddress, stakingTknContractAddress, stakingContractAddress, awardContractAddress } from '../utils/constants'
import { fetchEmployeeIdDate } from '../utils/Identities'

export const TransactionContext = React.createContext()

// ethereum object from window, initiate provider and signer
const { ethereum } = window
const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()

// smart contract objects
const stakingContract = new ethers.Contract(stakingContractAddress, stakingABI, signer)
const stakingTknContract = new ethers.Contract(stakingTknContractAddress, stakingTknABI, signer)
const digitalIdContract = new ethers.Contract(digitalIdContractAddress, digitalIdABI, signer)
const awardContract = new ethers.Contract(awardContractAddress, awardABI, signer)

// context provider
export const TransactionProvider = ({ children }) => {
  // states
  const [currentUser, setCurrentUser] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [colleagueOptions, setColleagueOptions] = useState([])
  const [colleaguesInfoData, setColleaguesInfoData] = useState([])

  // save user's name and address mapping in digitalIdentity contract
  const setUserIdentity = async (name) => {
    setCurrentUser(name)
    await digitalIdContract.setName(currentAccount, name)
  }

  // check if wallet is connect
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        checkUserName(accounts[0])
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  // check if token already minted by user wallet address, mint tokens if not
  const mintToken = async (addr) => {
    const mintTx = await stakingTknContract.mint(addr, ethers.utils.parseEther('250'))

    const rc = await mintTx.wait()

    const { event } = rc.events.find(e => {
      return e.event === 'Minted' || e.event === 'NotMinted'
    })

    return event === 'Minted'
  }

  // lookup user's name in DigitalIdentity contract
  const checkUserName = async (addr) => {
    const name = await digitalIdContract.getName(addr)
    setCurrentUser(name)
  }

  // connect to user's wallet
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

  // stake tokens to stakee's address
  const stake = async (tokens, stakeeAddress) => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const parsedAmount = ethers.utils.parseEther(tokens.toString())
      
      // transfer token to stakingTokenContract
      const transferTX = await stakingTknContract.transfer(currentAccount, parsedAmount)
      const transferRc = await transferTX.wait()

      // approve above transaction
      const approveTX = await stakingTknContract.approve(stakingContractAddress, parsedAmount)
      const approveRc = await approveTX.wait()

      // stake tokens to stakee
      const stakeTX = await stakingContract.stake(stakeeAddress, parsedAmount)
      const stakeRc = await stakeTX.wait()
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object')
    }
  }

  // load user identity from smart contract
  const loadEntity = async () => {
    return digitalIdContract.getDirectory()
  }

  const loadIdentitiesFromContract = async () => {
    if (!ethereum) return alert('Please install MetaMask.')

    const accounts = await ethereum.request({ method: 'eth_accounts' })
    const userAddr = accounts[0]

    const addrArray = await loadEntity()

    addrArray.map(async addr => {
      if (addr.toLowerCase() !== userAddr.toLowerCase()) {
        const name = await digitalIdContract.getName(addr)
        setColleagueOptions((old) => [...old, { value: name, label: name }])
        const employeeData = await fetchEmployeeIdDate(addr, name)
        setColleaguesInfoData((data) => [...data, employeeData])
      }
    })
  }

  // check if wallet is connected every time page is rerendered
  useEffect(() => {
    checkIfWalletIsConnected()
    // loadIdentitiesFromContract()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ loadIdentitiesFromContract, connectWallet, colleagueOptions, colleaguesInfoData, currentAccount, stake, currentUser, setCurrentUser, setUserIdentity, loadEntity, checkUserName }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
