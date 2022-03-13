import { useNavigate } from 'react-router-dom'

// icons
import { MdShoppingCart, MdSettings } from 'react-icons/md'
import { RiAwardFill } from 'react-icons/ri'
import { BsStarFill } from 'react-icons/bs'

const Menu = () => {
  // common css styles
  const buttonCommonStyle =
    'flex justify-start items-center text-base py-3 xl:px-4 pl-2 xl:font-semibold font-medium mb-3 rounded-lg cursor-pointer'
  const buttonIconCommonStyle = 'mr-2 text-2xl'
  const inactiveStyle = 'text-[#A5A6F6]'
  const activeStyle = 'bg-[#5D5FEF] text-white'

  // navigation
  const navigate = useNavigate()
  const toMyNominations = () => {
    navigate('/nominations')
  }

  return (
    <div className="xl:px-6 flex flex-col bg-slate-500 bg-opacity-0 pt-20">
      <button className={`${activeStyle} ${buttonCommonStyle}`}>
        <RiAwardFill className={`text-white ${buttonIconCommonStyle}`} /> My Awards
      </button>
      <button onClick={toMyNominations} className={`${buttonCommonStyle} ${inactiveStyle}`}>
        <BsStarFill className={`${buttonIconCommonStyle} ${inactiveStyle} `} /> My Nominations
      </button>
      <button className={`${buttonCommonStyle} ${inactiveStyle}`}>
        <MdShoppingCart className={`${buttonIconCommonStyle} ${inactiveStyle}`} /> Shopping
      </button>
      <button className={`${buttonCommonStyle} ${inactiveStyle}`}>
        <MdSettings className={`${buttonIconCommonStyle} ${inactiveStyle}`} /> Setting
      </button>

    </div>
  )
}

export default Menu
