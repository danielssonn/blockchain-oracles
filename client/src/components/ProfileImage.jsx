import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

// assets
import IMAGES from '../../images'

const ProfileImage = () => {
  const { selectedProfileBg } = useContext(TransactionContext)

  return (
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
  )
}

export default ProfileImage
