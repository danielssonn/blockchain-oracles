// assets
import IMAGES from '../../images'

// icons
import { MdArrowCircleUp } from 'react-icons/md'
import { BiCrown } from 'react-icons/bi'

const WinnerCard = () => {
  return (
    <div className="rounded-lg  w-1/4 bg-white/90 drop-shadow-md mr-4">

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
            <p className="font-normal text-[#3926AD]">150 Tokens</p>
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
              <p className="font-normal text-emerald-700">150%</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default WinnerCard
