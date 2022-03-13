import { Menu, PointsCard, ProfileImage } from '../components'

import { MdNotifications } from 'react-icons/md'

import IMAGES from '../../images'

const Nominations = () => {
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
            {/* <img className="absolute xl:-top-8 -top-3" src={IMAGES.branding} alt="branding" /> */}
          </div>
        </div>

        {/* right panel */}
        <div className="bg-[#FAF7F9] bg-opacity-70 col-span-3 rounded-r-2xl flex flex-col items-center xl:pt-16 pt-10">

          {/* profile picture */}
          <ProfileImage/>

          {/* name */}
          <div className="flex justify-center items-center xl:mt-10 mt-6">
            <MdNotifications className="text-[#A5A6F6] text-2xl" />
            <h1 className="ml-2 text-xl font-semibold text-[#7879F1]"> Winner Name </h1>
          </div>

          {/* points card */}
          <PointsCard/>

        </div>
      </div>
    </div>
  )
}

export default Nominations
