import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// import contractABI, contractAddress

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [selectedProfileBg, setSelectedProfileBg] = useState('');

  const selectProfileBg = (img) => {
    setSelectedProfileBg(img);
    console.log(img);
  };

  const mintProfileNFT = () => {
    console.log('mint ' + selectedProfileBg);
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ connectWallet, currentAccount, selectedProfileBg, selectProfileBg, mintProfileNFT }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
