import { useContext } from 'react'

import { TransactionContext } from '../context/TransactionContext'
import { Menu, PointsCard } from '../components'

import { MdNotifications } from 'react-icons/md'

// assets
import IMAGES from '../../images'

const Awards = () => {
  const { selectedProfileBg } = useContext(TransactionContext)

  // const switchButtonStyle = () => {};

  return (
    <div className="bg-dashboard bg-center bg-cover min-h-screen min-w-full">
      <div className="grid grid-cols-12 gap-3 w-full min-h-screen xl:px-20 px-10  py-10">
        {/* left panel */}

        <div className="col-span-2">
          <Menu />
        </div>

        {/* middle */}
        <div className="relative bg-gradient-to-r from-white/50 to-white/10 col-span-7 rounded-l-2xl">
          <div className="xl:px-5 px-3">
            <img className="absolute xl:-top-8 -top-3" src={IMAGES.branding} alt="branding" />
          </div>
        </div>

        {/* right panel */}
        <div className="bg-[#FAF7F9] bg-opacity-70 col-span-3 rounded-r-2xl flex flex-col items-center xl:pt-16 pt-10">

          {/* profile picture */}
          <div className="relative w-3/5 flex justify-center items-center">
            <img id="profile" src={IMAGES.face} alt="profile-image" className="w-4/5 z-10" />

            {selectedProfileBg
              ? (
              <img src={selectedProfileBg} alt="profile-image" className="absolute w-[120%] h-[120%] z-5" />
                )
              : (
              <div className="absolute xl:w-[220px] w-[160px]  xl:h-[220px] h-[160px] rounded-full bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3] z-2"></div>
                )}
          </div>

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

          {/* Appreciate button */}
          <button className="w-3/5 my-8 px-4 py-3 bg-[#5D5FEF] rounded-xl text-white font-semibold xl:text-lg text-base drop-shadow-md">
            Appreciate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Awards
