// assets
import IMAGES from '../../images'

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { BiCoinStack } from 'react-icons/bi'

const StakerList = () => {
  return (
    <div className="p-6 rounded-r-lg bg-white/60 h-full">

      <h4 className="font-semibold text-right text-xl text-[#5D5FEF] mb-3">Who Staked On Me</h4>

      {/* <h4 className="mb-3 text-xl text-right font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
        <span className="text-sm text-[#5753C9] py-2 font-thin rounded-full">3 Stakers | 600 Tokens</span>
      </h4> */}

      {['Wen MacBay', 'Safeer Shwetz', 'Yianna Lindsay'].map((n, i) =>
        <div key={i} className={`group flex items-center rounded-lg border cursor-pointer pr-6 mb-3 hover:text-[#3926AD] hover:border-[#3926AD] ${i === 0 ? 'border-[#3926AD]' : null}`}>
          <img src={IMAGES[`nf${i + 1}`]} alt="person1" className={`w-[15%] ${i === 0 ? 'bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3]' : null}  rounded-l-lg`}/>
          <div className="flex justify-between items-center w-4/5">
            <p className="ml-3">{ n }</p>
            <div className="flex items-center">
              <BiCoinStack />
              <p className="px-1">{i + 1}00</p>

            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default StakerList
