import CountUp from 'react-countup'

// images
import IMAGES from '../../images'

const PointsCard = () => {
  return (
    <div className="drop-shadow-lg rounded-2xl xl:p-8 p-4 flex flex-col bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3] mt-10 w-11/12 min-h-50">
      <div className="flex w-full justify-between items-center">
        <h4 className="text-white/60 font-semibold xl:text-lg text-base">Moment Maker</h4>
        <img className="xl:w-10 w-6 opacity-60" src={IMAGES.logo} alt="logo" />

      </div>
      <div className="flex justify-end items-baseline xl:mt-8 mt-8 xl:mb-8 mb-4">
        <h1 className="font-bold xl:text-6xl text-3xl text-white/80 mr-1">
          <CountUp start={750} end={1000} duration={2} delay={1} separator="," />
        </h1>
        <p className="text-white/60">points</p>
      </div>
      <div className="flex w-full justify-between text-white/60 xl:text-base text-sm">
          <p>Winner Name</p>
          <p>2022</p>
      </div>
    </div>
  )
}

export default PointsCard
