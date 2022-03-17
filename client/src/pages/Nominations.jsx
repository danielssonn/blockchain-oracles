import { Menu, ProfileImage } from '../components'

import { MdNotifications } from 'react-icons/md'
import { GiTwoCoins } from 'react-icons/gi'
import { RiWallet3Line, RiMedalLine, RiSearchLine } from 'react-icons/ri'

import IMAGES from '../../images'

const Nominations = () => {
  return (
    <div className="bg-nomination bg-center bg-cover min-h-screen min-w-full">
      <div className="grid grid-cols-12 gap-3 w-full min-h-screen xl:px-20 px-10  py-10">

        {/* left panel */}
        <div className="col-span-2">
          <Menu />
        </div>

        {/* middle */}
        <div className="relative bg-gradient-to-r from-white/50 to-white/10 col-span-7 rounded-l-2xl">
          <div className="">

            {/* title bar */}
            <div className="xl:p-6 p-3 flex justify-between items-center border-b-slate-200 border-b">
              <h1 className="font-semibold text-3xl text-[#5D5FEF]">My Nominations</h1>
              <div className="bg-[#F4F5FB] rounded-full cursor-pointer">
                <RiSearchLine className="text-[#3926AD] text-lg m-3"/>
              </div>
            </div>

            {/* my nominations */}
            <div className="mt-6 px-4">

              <h4 className="font-semibold text-xl text-[#5D5FEF] my-4">My Nominations</h4>

              {/* my nominations */}
              <div className="flex">
                <div className="w-5/6 flex">

                  {[1, 2, 3].map((n, i) =>
                    <div key={n} className="mr-3 w-1/3 py-8 flex flex-col items-center bg-[#FAF7F9] rounded-xl drop-shadow-md cursor-pointer hover:bg-[#A5A6F6]/30">

                      {/* <div className='w-2/5'><img src={IMAGES.np1} alt="np1" /></div> */}

                      <div className="relative w-3/5 flex justify-center items-center mb-4">
                        <img id="profile" src={IMAGES.face} alt="profile-image" className="w-4/5 z-10" />

                          <img src={IMAGES[`bg${n}`]} alt="profile-image" className="absolute w-[120%] h-[120%] z-5" />

                      </div>

                      <p className="text-sm">Adam Smith{n}</p>
                      <p className="text-sm">Purpose Award {n}50</p>
                      <p className="text-sm">Jan 2{n}, 2022</p>

                    </div>
                  )}

                </div>

                <div className="w-1/6 flex justify-center items-center ">
                  <button className="cursor-pointer flex justify-center items-center text-4xl font-normal border border-dashed text-[#5D5FEF] hover:bg-[#A5A6F6]/30 border-[#5D5FEF] w-4/5 min-h-full rounded-xl">+</button>
                </div>

              </div>

              {/* award history */}
              <div className="flex">

                {/* award history */}
                <div className="w-2/3 bg-red-300">
                  <h4>Award History</h4>
                  <div>
                    {[0, 1, 2].map((h, i) =>
                    <div key={h}>
                      <RiMedalLine className="text-[#383be2] text-3xl" />
                      <p>Purpose Award {h}50</p>
                      <p className="text-sm">Jan 2{h}, 202{h}</p>
                    </div>
                    )}
                  </div>
                </div>

                {/* staking actions */}
                <div className="w-1/3 bg-slate-400">
                  <h4>Skating</h4>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* right panel */}
        <div className="bg-[#FAF7F9] bg-opacity-70 col-span-3 rounded-r-2xl flex flex-col items-center xl:pt-16 pt-10">

          {/* profile picture */}
          <ProfileImage/>

          {/* name */}
          <div className="flex justify-center items-center xl:mt-10 mt-6">
            <MdNotifications className="text-[#A5A6F6] text-2xl" />
            <h1 className="ml-2 text-xl font-semibold text-[#7879F1]"> Winner Name </h1>
          </div>

          {/* balance */}
          <div className="xl:w-9/12 w-11/12 mt-10">
            <h1 className="font-semibold text-[#7879F1] text-lg">Balance</h1>
            <div className="drop-shadow-lg rounded-2xl xl:p-4 p-4 flex bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3] mt-2 min-h-50">
              <div className="mr-5 rounded-full xl:w-1/5 w-1/4 flex justify-center items-center border-2 border-white/80">
                <GiTwoCoins className="text-white text-4xl" />
              </div>
              <div>
                <p className="text-white/80 font-light text-sm">Total Balance</p>
                <p className="text-white text-2xl font-semibold">1,000</p>
              </div>
            </div>

            <div className="drop-shadow-lg rounded-2xl xl:p-4 p-4 flex bg-white/60 mt-8 min-h-50">
              <div className="mr-5 rounded-full xl:w-1/5 w-1/4 flex justify-center items-center border-2 border-[#383be2]">
                <RiWallet3Line className="text-[#383be2] text-3xl" />
              </div>
              <div>
                <p className="text-[#5D5FEF]/80 font-light text-sm">Investable Balance</p>
                <p className="text-[#5D5FEF] text-2xl font-semibold">700</p>
              </div>
            </div>

            <div className="drop-shadow-lg rounded-2xl xl:p-4 p-4 flex bg-white/60 mt-6 min-h-50">
              <div className="mr-5 rounded-full xl:w-1/5 w-1/4 flex justify-center items-center border-2 border-[#383be2]">
                <RiMedalLine className="text-[#383be2] text-3xl" />
              </div>
              <div>
                <p className="text-[#5D5FEF]/80 font-light text-sm">Reward Balance</p>
                <p className="text-[#5D5FEF] text-2xl font-semibold">300</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Nominations
