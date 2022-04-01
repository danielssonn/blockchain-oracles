
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
import { Chart, Balance, StakerDetails, StakerList, WinnerCard, StakingCard } from '../components'

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

        </div>

      </div>

      <div className="mt-4">

        {/* people stake on me */}
        <div className="flex">

          {/* branding art */}
          <div className="w-3/12">

            <div className="rounded-lg mr-2 py-6 pr-6 bg-trophy bg-contain bg-no-repeat flex flex-col">
              <div className="rounded-lg p-4 text-transparent text-6xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
                <h1>STAKE</h1>
                <h1>ON THE</h1>
                <h1>SUCCESS</h1>
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
        <div>
          <div className="flex rounded-lg">

            {/* investment list */}
            <div className="w-4/12 bg-[#E5F3FF] rounded-lg p-6 bg-rank bg-bottom bg-no-repeat">

              {/* table */}
              <div className="w-full mt-2">

                <h4 className="font-semibold text-[#5D5FEF] mb-3">Popular Candidates</h4>

                {/* title */}
                <div className="flex items-center p-2 bg-white text-sm text-gray-600 rounded-t-md border-b">
                  <p className="w-1/5"></p>
                  <p className="w-1/5">Name</p>
                  <p className="w-1/5">Tokens in pool</p>
                  <p className="w-1/5">Stakers</p>
                </div>

                {/* body */}
                <div className="bg-white/60 rounded-b-md p-2 text-sm">

                  {/* table row */}
                  <div className="flex items-center py-2 border-b">
                    <div className="w-1/5 flex justify-center">
                      <img src={IMAGES.nf8} alt="person1" className="w-1/2 rounded-full bg-[#383be2]/60"/>
                    </div>

                    <p className="w-1/5">John D.</p>
                    <p className="w-1/5">1,000</p>
                    <p className="w-1/5">8</p>
                    <button className="w-1/5 py-1 px-2 border border-[#3926AD] text-[#3926AD] text-sm font-semibold">Stake</button>

                  </div>

                  <div className="flex items-center py-2 border-b">
                    <div className="w-1/5 flex justify-center">
                      <img src={IMAGES.nf5} alt="person1" className="w-1/2 rounded-full bg-[#383be2]/60"/>
                    </div>

                    <p className="w-1/5">Lucas L.</p>
                    <p className="w-1/5">800</p>
                    <p className="w-1/5">12</p>
                    <button className="w-1/5 py-1 px-2 border border-[#3926AD] text-[#3926AD] text-sm font-semibold">Stake</button>

                  </div>

                  <div className="flex items-center py-2 border-b">
                    <div className="w-1/5 flex justify-center">
                      <img src={IMAGES.nf9} alt="person1" className="w-1/2 rounded-full bg-[#383be2]/60"/>
                    </div>

                    <p className="w-1/5">Boróka M.</p>
                    <p className="w-1/5">650</p>
                    <p className="w-1/5">4</p>
                    <button className="w-1/5 py-1 px-2 border border-[#3926AD] text-[#3926AD] text-sm font-semibold">Stake</button>

                  </div>

                  <div className="flex items-center py-2 border-b">
                    <div className="w-1/5 flex justify-center">
                      <img src={IMAGES.nf6} alt="person1" className="w-1/2 rounded-full bg-[#383be2]/60"/>
                    </div>

                    <p className="w-1/5">Kamaria L.</p>
                    <p className="w-1/5">650</p>
                    <p className="w-1/5">4</p>
                    <button className="w-1/5 py-1 px-2 border border-[#3926AD] text-[#3926AD] text-sm font-semibold">Stake</button>

                  </div>

                </div>

              </div>
            </div>

            {/* details */}
            <div className="w-5/12 bg-[#E5F3FF] rounded-lg p-6 mx-2 bg-eth bg-cover">

              <div className="flex items-end">

                {/* title */}
                <div className="w-1/2 text-5xl font-extrabold text-[#5841f0]">
                  <h1>Stake ON</h1>
                  <h1><span className="underline-behind">Lorenz&apos;s</span></h1>
                  <h1>Success</h1>
                </div>

                {/* actions */}
                <div className="w-1/2 flex flex-col items-end">

                  {/* search */}
                  <div className="flex items-center bg-white w-full rounded-md mb-4">
                    <RiSearchLine className="my-2 mx-4"/>
                    <input type="text" placeholder='search for candidate' className="py-2 focus:outline-none w-full rounded-r-md" />
                  </div>

                  <div className="flex w-full items-center">
                    <input type="text" placeholder='0 token' className="w-2/3 p-2 focus:outline-none rounded-l-md border-2 border-white focus:border-[#5841f0]"/>
                    <button className="w-1/3 p-2 bg-[#5841f0] text-white font-semibold rounded-r-md border-2 border-[#5841f0]">Stake</button>
                  </div>

                </div>
              </div>

              <div className="flex bg-white/60 mt-4 rounded-lg px-2">

                {/* chart */}
                <div className="w-3/5 py-4">
                  <Chart/>
                </div>

                {/* data */}
                <div className="w-2/5 p-4">
                  <div className="flex justify-between items-center mb-4 pb-2">
                    <img src={IMAGES.nf8} alt="person1" className="w-2/5 rounded-full bg-blue-400"/>
                    <p>Lorenz Ruskin</p>
                  </div>

                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <p>Tokens in Pool</p>
                    <p>670</p>
                  </div>

                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <p>Total Stakers</p>
                    <p>12</p>
                  </div>

                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <p>Total Stakers</p>
                    <p>12</p>
                  </div>

                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <p>Total Stakers</p>
                    <p>12</p>
                  </div>

                </div>

              </div>

            </div>

            {/* my staking list */}
            <div className="w-3/12 rounded-lg p-6 bg-[#E5F3FF]">
              <h4 className="font-semibold text-xl text-[#5D5FEF] mb-3">My Staking</h4>

              {/* winner card */}
              <WinnerCard/>

              {/* staking card */}
              <StakingCard/>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Staking
