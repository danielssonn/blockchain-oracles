import { Menu, ProfileImage } from '../components'

import { MdNotifications } from 'react-icons/md'
import { GiTwoCoins } from 'react-icons/gi'
import { RiWallet3Line, RiMedalLine } from 'react-icons/ri'

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
          <div className="xl:px-5 px-3">
            {/* <img className="absolute xl:-top-8 -top-3" src={IMAGES.branding} alt="branding" /> */}
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
