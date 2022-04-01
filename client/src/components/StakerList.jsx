// assets
import IMAGES from '../../images'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BiCoinStack } from 'react-icons/bi'

const StakerList = () => {
  return (
    <div className="p-6 rounded-l-lg bg-white/60 ">

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

  )
}

export default StakerList
