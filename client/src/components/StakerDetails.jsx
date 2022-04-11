import { FaRegSmile } from 'react-icons/fa'

const StakerDetails = (props) => {
  console.log(props)
  return (

    <div className="py-6 pl-6 rounded-l-lg bg-white/60 ">

      <h4 className="font-semibold text-xl text-[#5D5FEF] mb-3">Hi Alex, Wen MacBay just staked on you!</h4>

      <div className="rounded-lg border border-[#3926AD] flex items-center mb-3">

        {/* message */}
        <div className="w-3/5 pb-3">
          <div className="p-4">
            <p className="font-normal xl:text-base text-xs mb-1">Hi Alex,</p>
            <p className="font-normal xl:text-base text-xs">Thanks for all your efforts on the CIBC Costco Mastercard initiative!  I appreciate your hard work ensuring every Costco client got their new CIBC Mastercard on time. You will go on to achieve big things. <FaRegSmile className="inline"/></p>
            <p className="font-normal xl:text-base text-xs mt-3">Wen</p>
          </div>
        </div>

          {/* staking data */}
        <div className="w-2/5 my-8 px-4 border-l border-[#3926AD]/40">
          <div className="mb-5">
            <p className="xl:text-sm text-xs font-thin text-stone-400">Staked</p>
            <p className="font-normal xl:text-base text-xs">100 Tokens</p>
          </div>
          <div className="mb-5">
            <p className="xl:text-sm text-xs font-thin text-stone-400">From</p>
            <p className="xl:text-base text-xs font-normal">Today</p>
          </div>

          {/* CTA */}
          <button onClick={() => props.stakeeChanger({ value: 'Wen', label: 'Wen MacBay' })} className="text font-semibold bg-[#5841f0] xl:text-base text-xs px-4 py-2 rounded-lg text-white">Stake On Wen!</button>
        </div>
      </div>
    </div>

  )
}

export default StakerDetails
