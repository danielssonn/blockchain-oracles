// Alex Dean - user
// Wen MacBay - nominator
// Yianna Lindsay - nominator before
// Safeer Shwetz - nominator before
// Kamaria Lévêque - top player
// Boróka Mooshian - top player
// Nil Shapiro - winner
// Aleida Hussain - staked
// Lorenz Ruskin - stake to

// assets
import IMAGES from '../../images'

import { Chart } from '../components'

// icons
import { MdNotifications, MdArrowCircleUp } from 'react-icons/md'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BiCoinStack, BiCrown, BiLockAlt } from 'react-icons/bi'
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
        <div className="flex rounded-lg">

          {/* branding art */}
          <div className="w-3/12 rounded-lg mr-2 py-6 pr-6 bg-trophy bg-contain bg-no-repeat flex flex-col">

            <div className="rounded-lg p-4 text-transparent text-6xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
              <h1>STAKE</h1>
              <h1>ON THE</h1>
              <h1>SUCCESS</h1>
            </div>

          </div>

          {/* staking list */}
          <div className="w-4/12 p-6 rounded-l-lg bg-white/60 ">

            <h4 className="font-semibold text-xl text-[#5D5FEF] mb-3">Staking Pool</h4>

            <div className="group flex items-center rounded-lg border border-[#3926AD] cursor-pointer pr-6 mb-3">
              <img src={IMAGES.nf3} alt="person1" className="w-[15%] bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3] rounded-l-lg"/>
              <div className="text-[#3926AD] flex">
                <p className="mx-3 font-bold mr-8">Wen MacBay</p>
                <p>just staked on you!</p>
              </div>
              <HiOutlineArrowNarrowRight className="text-2xl ml-auto text-[#3926AD] group-hover:animate-pulse"/>

            </div>

            {['Yianna Lindsay', 'Safeer Shwetz'].map((n, i) =>
              <div key={i} className="group flex items-center rounded-lg border cursor-pointer pr-6 mb-3 hover:text-[#3926AD] hover:border-[#3926AD]">
                <img src={IMAGES[`nf${i + 1}`]} alt="person1" className="w-[15%] bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3] rounded-l-lg"/>
                <div className="flex justify-between items-center w-4/5">
                  <p className="ml-3">{ n }</p>
                  <div className="flex items-center">
                    <BiCoinStack />
                    <p className="px-1">{i + 1}00</p>

                  </div>
                </div>
                <HiOutlineArrowNarrowRight className="text-2xl ml-auto text-[#3926AD] hidden group-hover:block"/>
              </div>

            )}

          </div>

          {/* details */}
          <div className="w-5/12 py-6 pr-6 rounded-r-lg bg-white/60 ">

            <h4 className="mb-3 text-right text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
              <span className="text-sm text-[#5753C9] py-2 px-4 ml-4 font-thin rounded-full">3 stakers | 600 tokens in the pool</span>
            </h4>

            <div className="rounded-lg border border-[#3926AD] flex items-center">
              {/* staking data */}
              <div className="w-2/5 my-8 mx-4 border-r border-[#3926AD]/40">
                <div className="mb-5">
                  <p className="text-sm font-thin text-stone-400">Staked</p>
                  <p className="font-normal">300 Tokens</p>
                </div>
                <div className="mb-5">
                  <p className="text-sm font-thin text-stone-400">From</p>
                  <p className="text-base font-normal">Today</p>
                </div>
                <button className="text-sm font-semibold text-[#3926AD] underline">Say Thanks To Wen</button>
              </div>

              {/* message */}
              <div className="w-3/5 pb-3">
                <div className="p-4">
                  <p className="text-sm font-thin text-stone-400">Message</p>
                  <p className="text-sm font-normal mb-1">Hi Alex,</p>
                  <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua consectetur adipiscing elit,consectetur adipiscing elit,consectetur adipiscing elit,consectetur adipiscing elit,...</p>
                  <p className="text-sm font-normal mt-1">Wen</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Balance */}
        <div className="my-5">

          <div className="flex justify-evenly items-center bg-[#383be2]/60 p-8 rounded-lg">

            {/* profile lg */}
            <div className="relative w-1/12 flex justify-center items-center">
              <img id="profile" src={IMAGES.face} alt="profile-image" className="w-4/5 z-10" />
              <img src={IMAGES.bg2} alt="profile-image" className="absolute w-[120%] h-[120%] z-5" />
            </div>

            {/* title */}
            <div>
              <p className="text-2xl font-bold text-white">My</p>
              <p className="text-2xl font-bold text-white">Token</p>
              <p className="text-2xl font-bold text-white">Balance</p>
            </div>

            {/* balance card */}

            {[
              { title: 'All Tokens', balance: 500, bg: 'bg-coins' },
              { title: 'Staked Tokens', balance: 500, bg: 'bg-tree' },
              { title: 'Reward Tokens', balance: 500, bg: 'bg-rocket' }
            ].map((n, i) =>
              <div key={n} className={`w-1/4 rounded-xl p-8 flex bg-white/60 ${n.bg} bg-cover bg-no-repeat`}>
                <div className="text-left flex flex-col justify-center">
                  <p className="text-[#383be2]/80 font-light text-base mb-2">{n.title}</p>
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6] text-3xl">{n.balance} <span className="text-[#383be2]/80 font-light text-sm">Name Tokens</span></p>
                </div>
              </div>
            )}

          </div>

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

                {/* my staking */}
            <div className="w-3/12 rounded-lg p-6 bg-[#E5F3FF]">
              <h4 className="font-semibold text-xl text-[#5D5FEF] mb-3">My Staking</h4>

              {/* staking card */}
              <div className="rounded-lg  bg-white/60 drop-shadow-md mb-5">

                <div className="flex pr-4 rounded-t-lg items-center justify-between mb-2 border-b bg-[#5841f0]">
                  <img src={IMAGES.nf4} alt="person1" className="w-1/5 rounded-tl-lg"/>

                  <div className="text-center">
                    <h4 className="font-semibold text-white">Nil Shapiro</h4>
                    <p className="font-thin text-xs text-white">2020 Annual Achiever Winner</p>
                  </div>

                  <BiCrown className="text-yellow-400 text-2xl m-3 cursor-pointer"/>
                </div>

                <div className="p-4 flex flex-col">

                  <div className="flex items-center mb-2">
                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">Stacked</p>
                      <p className="font-normal">100 Tokens</p>
                    </div>

                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">Earned</p>
                      <p className="text-xl font-semibold text-[#3926AD]">150 Tokens</p>
                    </div>

                  </div>

                  <div className="flex items-center mb-2">
                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">Stake Time</p>
                      <p className="font-normal">58 days</p>
                    </div>

                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">% Return</p>
                      <div className="flex items-center">
                        <MdArrowCircleUp className="text-emerald-700 mr-2 text-xl font-semibold"/>
                        <p className="text-xl font-semibold text-emerald-700">150%</p>
                      </div>
                    </div>

                  </div>

                  <div className="flex items-center">
                    <button className="mr-2 w-1/2 py-1 px-5 border bg-white/80 border-[#3926AD] text-[#3926AD] text-sm font-semibold">Keep</button>
                    <button className="mr-2 w-1/2 py-1 px-5 border bg-white/80 border-[#3926AD] text-[#3926AD] text-sm font-semibold">Harvest</button>

                  </div>

                </div>

              </div>

              {/* staking card */}
              <div className="rounded-lg  bg-white/60 drop-shadow-md">

                <div className="flex pr-4 rounded-t-lg items-center justify-between mb-2 border-b bg-white">
                  <img src={IMAGES.nf7} alt="person1" className="w-1/5 rounded-tl-lg"/>

                  <div className="text-center">
                    <h4 className="font-semibold text-gray-700">Aleida Hussain</h4>
                    <p className="font-thin text-xs text-gray-700">2022 Annual Achiever Candidate</p>
                  </div>

                  <BiLockAlt className="text-gray-700/60 text-2xl m-3 cursor-pointer"/>
                </div>

                <div className="p-4 flex flex-col">

                  <div className="flex items-center mb-2">
                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">Stacked</p>
                      <p className="font-normal">100 Tokens</p>
                    </div>

                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">Stake Time</p>
                      <p className="font-normal">18 days</p>
                    </div>

                  </div>

                  <div className="flex items-center mb-2">
                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600">Tokens in pool</p>
                      <p className="font-normal">500 Tokens</p>
                    </div>

                    <div className="w-1/2" >
                      <p className="text-xs font-thin text-stone-600"># of Stakers</p>
                      <p className="font-normal">20</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Staking
