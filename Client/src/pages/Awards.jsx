
import { Menu, PointsCard, ProfileImage } from '../components'

import { MdNotifications } from 'react-icons/md'
import { RiMedalLine } from 'react-icons/ri'
import { SiEthereum } from 'react-icons/si'

// assets
import IMAGES from '../../images'

const Awards = () => {
  return (
    <div className="bg-dashboard bg-center bg-cover min-h-screen min-w-full">
      <div className="grid grid-cols-12 gap-3 w-full min-h-screen xl:px-20 px-10  py-10">

        {/* left panel */}
        <div className="col-span-2">
          <Menu />
        </div>

        {/* middle */}
        <div className="bg-gradient-to-r from-white/50 to-white/10 col-span-7 rounded-l-2xl">

          <div className="xl:px-5 px-3">
            {/* <img className="absolute xl:-top-8 -top-3" src={IMAGES.branding} alt="branding" /> */}
          </div>

          <div className="flex flex-col xl:px-5 px-3">

            {/* Blockchain prize */}
            <div className="bg-white bg-opacity-60 xl:p-6 p-3 rounded-2xl w-full my-4">

              <h4 className="font-semibold text-[#5D5FEF] text-xl">Select Your Blockchain Reward</h4>

              <div className="flex">
                <div className="flex flex-col justify-center items-center w-1/3 bg-white border rounded-lg p-5 mr-5 mt-5">
                  <div className="flex justify-center items-center border rounded-full p-5 border-[#383be2]">
                    <SiEthereum className="text-[#383be2] text-5xl" />
                  </div>
                  <p className="mt-5">1 Ethereum</p>
                  <p className="font-light text-sm text-slate-500">ETH </p>
                  <p>$ 2,971*</p>
                  <button className="py-2 px-8 mt-2 border rounded-full font-medium text-[#383be2] border-[#383be2] hover:bg-[#383be2] hover:text-white hover:font-semibold">select</button>
                </div>

                <div className="flex flex-col justify-center items-center w-1/3 bg-nft1 bg-center rounded-lg mr-5 mt-5">
                  <div className="w-full h-2/5 rounded-t-lg mb-5"></div>
                  <p>NFT1 Name</p>

                  <button className="bg-white bg-opacity-70 py-2 px-8 mt-2 border rounded-full font-medium text-[#383be2] border-[#383be2] hover:bg-[#383be2] hover:text-white hover:font-semibold">select</button>
                  <button className="py-2 px-8 mt-2 border rounded-full font-medium text-[#383be2] border-[#383be2] hover:bg-[#383be2] hover:text-white hover:font-semibold">view artwork</button>

                </div>

                <div className="flex flex-col justify-end items-center w-1/3 bg-nft1 bg-center rounded-lg mr-5 mt-5 cursor-pointer">
                  <div className="flex flex-col justify-end items-center w-full rounded-b-lg bg-slate-100 bg-opacity-70 py-3">

                    <p>NFT1 Name</p>

                    <button className="bg-white bg-opacity-70 py-2 px-8 mt-2 border rounded-full font-medium text-[#383be2] border-[#383be2] hover:bg-[#383be2] hover:text-white hover:font-semibold">select</button>
                    <button className="py-2 px-8 mt-2 border rounded-full font-medium text-[#383be2] border-[#383be2] hover:bg-[#383be2] hover:text-white hover:font-semibold">view artwork</button>

                  </div>

                </div>

              </div>

            </div>

            {/* award history */}
            <div className="bg-white bg-opacity-60 xl:p-6 p-3 rounded-2xl w-full">
              <h4 className="font-semibold text-[#5D5FEF] text-xl">History</h4>

              <div className="flex">
                {[0, 1, 2].map((h, i) =>
                <div key={h} className="flex flex-col items-center p-5 border rounded-2xl mt-3 mr-8 w-[30%] bg-white">
                  <div>
                    <p className="text-[#7879F1] text-xl font-semibold mb-3">Moment Maker</p>
                  </div>

                  <div className="flex justify-between">
                    <div className="p-5 flex justify-center items-center rounded-full drop-shadow-lg bg-white/60 mr-6">
                      <RiMedalLine className="text-[#383be2] text-5xl" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-thin text-slate-400 mt-5">From</p>
                      <p>John D</p>
                      <p className="text-xs font-thin text-slate-400 mt-3">Jan 2{h}, 202{h}</p>
                    </div>
                  </div>
                </div>
                )}
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

          {/* points card */}
          <PointsCard/>

          {/* followings */}
          <div className="px-8 xl:mt-6 mt-10">
            <h1 className="mb-5 font-semibold text-[#7879F1] text-xl">Followings</h1>
            <img className="w-4/5 m-auto" src={IMAGES.followings} alt="followings" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Awards
