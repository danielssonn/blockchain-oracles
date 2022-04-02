
// all players
// Alex Dean - user
// Wen MacBay - nominator
// Yianna Lindsay - nominator before
// Safeer Shwetz - nominator before
// Kamaria Lévêque - top player
// Boróka Mooshian - top player
// Nil Shapiro - winner
// Aleida Hussain - staked
// Lorenz Ruskin - stake to

// components
import { Balance, StakerDetails, StakerList, WinnerCard, StakingCard } from '../components'

// assets
import IMAGES from '../../images'

// icons
import { MdNotifications } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'
import { RiSearchLine } from 'react-icons/ri'

const Staking = () => {
  return (
    <div className="bg-dashboard bg-center bg-cover min-h-screen min-w-full px-24 py-8">

      {/* top nav bar */}
      <div className="flex justify-between items-center">

        {/* logo */}
        <img src={IMAGES.cibc} alt="logo" className="w-1/12 px-3" />

        {/* icons & profile */}
        <div className="w-1/3 flex justify-end items-center">
          <div className="text-base mr-3 font-semibold text-stone-800 text-right">
            <p>Hi, Alex Dean</p>
          </div>
          <div className="relative w-1/12 flex justify-center items-center">
            <img id="profile" src={IMAGES.face} alt="profile-image" className="w-4/5 z-10" />
            <img src={IMAGES.bg2} alt="profile-image" className="absolute w-[100%] h-[120%] z-5" />
          </div>
          <div className="bg-[#F4F5FB] rounded-full cursor-pointer mx-3">
            <MdNotifications className="text-[#5D5FEF] text-lg m-3"/>
          </div>
          <div className="bg-[#F4F5FB] rounded-full cursor-pointer mr-3">
            <FiMoreVertical className="text-[#5D5FEF] text-lg m-3"/>
          </div>
          <button className="py-2 px-6 font-semibold text-white bg-[#5841f0] rounded-lg">Connect Wallet</button>

        </div>

      </div>

      <div className="mt-4">

        {/* people stake on me */}
        <div className="flex">

          {/* branding art */}
          <div className="w-3/12">

            <div className="rounded-lg mr-2 py-6 pr-6 bg-trophy bg-contain bg-no-repeat flex flex-col">
              <div className="rounded-lg p-4 text-transparent text-6xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
                <h1 className="mb-4">Work Together</h1>
                <h1>Win Together</h1>
                {/* <h1>SUCCESS</h1> */}
              </div>
            </div>

          </div>

          {/* staking list */}
          <div className="w-4/12">
            <StakerList/>
          </div>

          {/* details */}
          <div className="w-5/12">
            <StakerDetails/>
          </div>

        </div>

        {/* Balance */}
        <div className="my-5">

          <Balance/>

        </div>

        {/* staking investments */}
        <div className="flex bg-[#E5F3FF] rounded-lg p-6 mb-4">

          {/* search */}
          <div className="w-3/12 mr-2">

             {/* search */}
              <div className="flex items-center bg-white rounded-md mb-4">
                <RiSearchLine className="m-3"/>
                <input type="text" placeholder='search for candidate' className="border-2 border-white p-2 focus:outline-none w-full rounded-r-md" />
              </div>

              {/* title */}
              <div className="w-full text-5xl font-extrabold text-[#5841f0]">
                <h1>Stake ON</h1>
                <h1><span className="underline-behind">Lorenz&apos;s</span></h1>
                <h1>Success</h1>
              </div>

          </div>

          {/* details */}
          <div className="w-6/12 mx-2">

            {/* stakee */}
            <div className="flex bg-white/60 rounded-lg py-8 pl-8 pr-12 items-center justify-center">

                <div className="flex justify-center items-center w-1/3 mr-6">
                  <img src={IMAGES.nf8} alt="person1" className="w-4/5 rounded-full bg-white drop-shadow-lg"/>
                </div>

                <div className="w-2/3 flex flex-col">
                  <p className="text-[#3926AD] text-xl font-bold ">Lorenz Ruskin</p>
                  <p className="text-xs font-thin text-stone-600 mb-2">Application Developer, Frontline Technology</p>

                  <div className="flex justify-between items-center border-b pb-2">
                    <p>Tokens in Pool</p>
                    <p>670</p>
                  </div>

                  <div className="flex justify-between items-center border-b pb-2">
                    <p>Total Stakers</p>
                    <p>12</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <input type="text" placeholder='0 token' className="w-2/3 p-2 focus:outline-none rounded-l-md border-2 border-white focus:border-[#5841f0]"/>
                    <button className="w-1/3 p-2 bg-[#5841f0] text-white font-semibold rounded-r-md border-2 border-[#5841f0]">Stake</button>
                  </div>
                </div>

            </div>

          </div>

          {/* count down rebasing circle */}
          <div className="w-3/12 bg-sand bg-right-bottom bg-no-repeat rounded-lg px-8 flex flex-col justify-center items-center">
            <h4 className="text-xl font-semibold text-[#383be2]/80">
              To Next Winner
            </h4>
            <h4 className="text-xl font-semibold text-[#383be2]/80">
              Announcement
            </h4>

            <h4 className="mt-4 text-5xl font-bold text-[#383be2]/80 bg-white/60 p-4 rounded-lg">
              35 Days
            </h4>

          </div>

        </div>

        {/* my staking list */}
        <div className="rounded-lg p-6 bg-[#E5F3FF] flex justify-center items-center">

          <div className="flex items-center w-4/5 justify-evenly">
            {/* winner card */}
            <WinnerCard/>

            {/* staking card */}
            <StakingCard/>

          </div>

              {/* title */}
          <div className="w-1/5 text-5xl font-extrabold text-[#383be2]/80 text-right">
            <h1>My</h1>
            <h1>Staking</h1>
            <h1>History</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Staking
