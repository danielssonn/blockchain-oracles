const StakerDetails = () => {
  return (

    <div className="py-6 pr-6 rounded-r-lg bg-white/60 ">
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

  )
}

export default StakerDetails
