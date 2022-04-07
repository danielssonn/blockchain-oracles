
import { useState, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

// assets
import IMAGES from '../../images'

const Landing = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext)
  return (

    <div className="bg-dashboard bg-contain bg-repeat-x w-full h-100v flex flex-col justify-center items-center">

      <h1 className="font-semibold text-2xl text-stone-500 uppercase">Welcome to</h1>

      {/* logo */}
      <div className="w-1/5 absolute top-10 left-10">
        <img src={IMAGES.cibc} alt="logo" className="w-1/3 opacity-40" />
      </div>

      {/* Dapp name */}
      <div className="rounded-lg p-4 text-transparent xl:text-6xl text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
        <h1>CIBC Stars</h1>
      </div>

      {/* step cards */}
      <div className="flex justify-center items-stretch w-full">

        {/* connect wallet */}
        {!currentAccount && <div className='animate-fade m-5 flex flex-col justify-center items-center xl:w-1/6 w-1/4 border-4 border-[#5841f0]/60 shadow-[#5841f0] drop-shadow-lg rounded-xl  bg-white/60 p-8 cursor-pointer'>
          <h1 className="font-semibold text-stone-500"> Connect Your Wallet</h1>
          <img src={IMAGES.wallet} alt="logo" className="" />

          <button
            className="py-2 px-6 font-semibold text-white border bg-[#5841f0] rounded-lg"
            onClick={connectWallet}>Connect Wallet
          </button>
        </div>}

        {/* enter user name */}
        {currentAccount && <div className={'animate-fade  m-5 flex justify-evenly items-center drop-shadow-lg rounded-xl bg-white/60 p-8 cursor-pointer'}>

            <img src={IMAGES.tokens} alt="id" className="w-1/3" />

            <div>
              <h1 className="font-semibold text-stone-500"> Congratulations!</h1>
              <h1 className="font-semibold text-stone-500"> You received <span className="text-[#5841f0] text-2xl font-bold">250 CIBC Staking Tokens</span></h1>
              <h1 className="font-semibold text-stone-500"> Enter your name and start to stake on your colleagues</h1>

              <div className="flex items-center mt-4">

              {/* ref={stakeInput} */}
                <input type="text" placeholder='your name' required pattern="[0-9]*" className="w-2/3 p-2 focus:outline-none rounded-l-md border-2 border-white focus:border-[#5841f0]"/>
                <button className="w-1/3 p-2 bg-[#5841f0] text-white font-semibold rounded-r-md border-2 border-[#5841f0]">GO!</button>
                {/* <button className="w-1/3 p-2 bg-[#5841f0] text-white font-semibold rounded-r-md border-2 border-[#5841f0]" onClick={onStakeHandler} disabled={!colleagueSelected}>Stake</button> */}
              </div>
            </div>
        </div>}

      </div>

    </div>

  )
}

export default Landing
