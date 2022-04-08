const StakingInput = () => {
  return (
  <div>
    {/* staking investments */}
    <div className="flex bg-[#E5F3FF]/70 rounded-lg p-6 mb-4">

      {/* search */}
      <div className="w-4/12 mr-2">

        {/* search */}
          <div className="flex items-center bg-white rounded-md mb-4">
            <RiSearchLine className="m-3"/>
            <Select
              options={colleagues}
              placeholder={'search your colleague here'}
              styles={selectStyle}
              onChange={handleSelectionChange}
              className="border-2 border-white p-2 focus:outline-none w-full rounded-r-md"/>

          </div>

          {/* title */}
          <div className="w-full text-5xl font-extrabold text-[#5841f0]">
            <h1>Stake ON</h1>
            <h1><span className="underline-behind">{selectedColleague}&apos;s</span></h1>
            <h1>Success</h1>
          </div>

      </div>

      {/* details */}
      <div className="w-8/12 mx-2">

        {/* stakee */}
        <div className="flex bg-white/60 rounded-lg py-8 pl-8 pr-12 items-center justify-center">

            <div className="flex justify-center items-center w-1/3 mr-6">
              <img src={IMAGES[`${colleagueStakingData.profile}`]} alt="person1" className="w-4/5 rounded-full bg-white drop-shadow-lg"/>
            </div>

            <div className="w-2/3 pr-10">

              <div className= "flex flex-col ">

                <p className="text-[#3926AD] text-xl font-bold ">{colleagueStakingData.fullName}</p>
                <p className="text-xs font-thin text-stone-600 mb-2">{colleagueStakingData.jobTitle}</p>

                <div className="flex justify-between items-center border-b pb-2">
                  <p>Tokens in Pool</p>
                  <p>{colleagueStakingData.stakingPool}</p>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                  <p>Total Stakers</p>
                  <p>{colleagueStakingData.totalStakers}</p>
                </div>

                <div className="flex items-center mt-4">
                  <input type="number" ref={stakeInput} placeholder='0 token' required pattern="[0-9]*" className="w-2/3 p-2 focus:outline-none rounded-l-md border-2 border-white focus:border-[#5841f0]" disabled={!colleagueSelected}/>
                  <button className="w-1/3 p-2 bg-[#5841f0] text-white font-semibold rounded-r-md border-2 border-[#5841f0]" onClick={onStakeHandler} disabled={!colleagueSelected}>Stake</button>
                </div>
              </div>

            </div>

        </div>

      </div>

    </div>
  </div>
  )
}

export default StakingInput
