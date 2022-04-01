// assets
import IMAGES from '../../images'

// icons
import { BiLockAlt } from 'react-icons/bi'

const StakingCard = () => {
  return (
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
  )
}

export default StakingCard
