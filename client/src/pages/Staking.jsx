
import React, { useState, useContext } from 'react'
// components
import { Balance, StakingCard, NavBar } from '../components'
import { TransactionContext } from '../context/TransactionContext'

import Select from 'react-select'

// assets
import IMAGES from '../../images'

import { RiSearchLine } from 'react-icons/ri'

const Staking = () => {
  const stakeInput = React.createRef()

  const { stake, currentUser } = useContext(TransactionContext)

  const [selectedColleague, setSelectedColleague] = useState('Someone')
  const [LorenzStaked, setLorenzStaked] = useState(false)
  const [colleagueSelected, setColleagueSelected] = useState(false)
  const [availableStakingTokens, setAvailableStakingTokens] = useState(250)
  const [stakedTokens, setStakedTokens] = useState(0)
  const [selectedColleagueInfo, setSelectedColleagueInfo] = useState({
    profile: 'user',
    fullName: 'Your Colleague Name',
    jobTitle: 'Check your colleague\'s staking details',
    stakingPool: 0,
    totalStakers: 0
  })

  const [stakedColleagues, setStakedColleagues] = useState([])

  const colleagues = [{ value: 'Lorenz', label: 'Lorenz Ruskin' }, { value: 'Wen', label: 'Wen MacBay' }, { value: 'Aleida', label: 'Aleida Hussain' }]

  const stakingData = [
    {
      profile: 'nf8',
      fullName: 'Lorenz Ruskin',
      jobTitle: 'Application Developer, Frontline Technology',
      stakingPool: 500,
      totalStakers: 8
    },
    {
      profile: 'nf1',
      fullName: 'Wen MacBay',
      jobTitle: 'Project Manager, Personal Lending',
      stakingPool: 670,
      totalStakers: 4
    },
    {
      profile: 'nf7',
      fullName: 'Aleida Hussain',
      jobTitle: 'Project Manager, Personal Lending',
      stakingPool: 300,
      totalStakers: 5
    }
  ]

  const addNewStakingCard = (colleague) => {
    console.log(colleague)
    colleague.staked = stakeInput.current.value
    colleague.stakingPool += parseInt(stakeInput.current.value)
    console.log(colleague.jobTitle)
    // colleague.jobTitle = '2022 Annual Achiever Candidate'
    colleague.totalStakers += 1
    colleague.time = 1
    setLorenzStaked(true)
  }

  const onStakeHandler = e => {
    const v = parseInt(stakeInput.current.value)
    if (v > availableStakingTokens) {
      alert('You don\'t have enough tokens to stake.')
    }

    if (v > 0 && !LorenzStaked && v <= availableStakingTokens) {
      setAvailableStakingTokens(availableStakingTokens - v)
      setStakedTokens(stakedTokens + v)
      stake(v)
      setStakedColleagues(() => stakedColleagues.push(selectedColleagueInfo))
      addNewStakingCard(selectedColleagueInfo)
    } else {
      console.log('staking must > 0, stop adding new card')
    }
  }

  const handleSelectionChange = e => {
    console.log(e)
    setSelectedColleague(e.value)
    setSelectedColleagueInfo(stakingData.find(d => d.fullName === e.label))
    setColleagueSelected(true)
  }

  const selectStyle = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none'
    })
  }

  console.log('currentUser:', currentUser)

  return (
    <div className="bg-dashboard flex flex-col justify-center items-center bg-center bg-cover min-h-screen min-w-full px-6 xl:px-24 xl:py-24 py-8">

      {/* top nav bar */}
      <div className="w-10/12">
        <NavBar userName={currentUser}/>
      </div>

      {/* body */}
      <div className="mt-4 w-10/12">

        {/* staking input */}
        <div className="flex">

          {/* branding */}
          <div className="w-4/12 bg-trophy bg-contain bg-no-repeat">
            <div className="rounded-lg mr-2 py-6 pr-6 flex flex-col justify-center items-center">

              {selectedColleague === 'Someone' && <div className="rounded-lg p-4 text-transparent xl:text-6xl text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
                <h1 className="mb-4">Work Together</h1>
                <h1>Win Together</h1>
              </div>}

              {selectedColleague !== 'Someone' && <div className="w-full xl:text-6xl text-4xl font-extrabold text-[#5841f0]">
                <h1>Stake ON</h1>
                <h1><span className="underline-behind">{selectedColleague}&apos;s</span></h1>
                <h1>Success</h1>
              </div>}

            </div>
          </div>

          {/* staking list */}
          <div className="w-8/12">

            <div className="mx-2">

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

              {/* stakee info */}
              <div className="flex bg-white/60 rounded-lg py-8 pl-8 pr-12 items-center justify-center">

                  <div className="flex justify-center items-center w-1/3 mr-6">
                    <img src={IMAGES[`${selectedColleagueInfo.profile}`]} alt="person1" className="w-4/5 rounded-full bg-white drop-shadow-lg"/>
                  </div>

                  <div className="w-2/3 pr-10">

                    <div className= "flex flex-col ">

                      <p className="text-[#3926AD] text-xl font-bold ">{selectedColleagueInfo.fullName}</p>
                      <p className="text-xs font-thin text-stone-600 mb-2">{selectedColleagueInfo.jobTitle}</p>

                      <div className="flex justify-between items-center border-b pb-2">
                        <p>Tokens in Pool</p>
                        <p>{selectedColleagueInfo.stakingPool}</p>
                      </div>

                      <div className="flex justify-between items-center border-b pb-2">
                        <p>Total Stakers</p>
                        <p>{selectedColleagueInfo.totalStakers}</p>
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

        {/* balance */}
        <div className="my-4 w-full">

          <Balance available={availableStakingTokens} staked={stakedTokens}/>

        </div>

        {/* my staking list */}
        {/* bg-team bg-left bg-contain bg-no-repeat */}
        <div className="rounded-lg w-full p-6 bg-[#E5F3FF] flex justify-center items-center bg-team bg-right bg-contain bg-no-repeat">

           {/* title */}
          <div className="w-2/12 text-5xl font-extrabold text-[#383be2]/80 text">
            <h1>Who I</h1>
            <h1>Staked</h1>
            <h1>On</h1>
          </div>

          <div className="flex items-center w-10/12 justify-start">

            {/* staking card */}

            {LorenzStaked
              ? (
              <StakingCard person={selectedColleagueInfo}/>)
              : null
            }

            {/* <StakingCard person={npc}/> */}
            {/* <StakingCard/> */}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Staking
