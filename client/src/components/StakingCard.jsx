// assets
import IMAGES from '../../images'

// icons
import { BiLockAlt } from 'react-icons/bi'

const StakingCard = ({ person }) => {
  return (
    <div className="w-1/3 rounded-lg  bg-white/80 drop-shadow-md mr-4">

      <div className="flex pr-4 rounded-t-lg items-center justify-between mb-2 border-b bg-white">
        <img src={IMAGES[`${person.profile}`]} alt="person1" className="w-1/5 rounded-tl-lg"/>

        <div className="text-center">
          <h4 className="font-semibold text-gray-700">{person.fullName}</h4>
          <p className="font-thin text-xs text-gray-700">{person.jobTitle}</p>
        </div>

        <BiLockAlt className="text-gray-700/60 text-2xl m-3 cursor-pointer"/>
      </div>

      <div className="p-4 flex flex-col">

        <div className="flex items-center mb-2">
          <div className="w-1/2" >
            <p className="text-xs font-thin text-stone-600">I Staked</p>
            <p className="font-normal">{person.staked} Tokens</p>
          </div>

          <div className="w-1/2" >
            <p className="text-xs font-thin text-stone-600">Stake Time</p>
            <p className="font-normal">{person.time} day(s)</p>
          </div>

        </div>

        <div className="flex items-center mb-2">
          <div className="w-1/2" >
            <p className="text-xs font-thin text-stone-600">All Staked</p>
            <p className="font-normal">{person.stakingPool} Tokens</p>
          </div>

          <div className="w-1/2" >
            <p className="text-xs font-thin text-stone-600"># of Stakers</p>
            <p className="font-normal">{person.totalStakers}</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default StakingCard
