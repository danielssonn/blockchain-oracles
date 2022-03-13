import { useNavigate } from 'react-router-dom'

// icons
import { MdShoppingCart, MdSettings } from 'react-icons/md'
import { RiAwardFill } from 'react-icons/ri'
import { BsStarFill } from 'react-icons/bs'
import { useState } from 'react'

const Menu = () => {
  // common css styles
  const buttonCommonStyle =
    'flex justify-start items-center text-base py-3 xl:px-4 pl-2 xl:font-semibold font-medium mb-3 rounded-lg cursor-pointer'

  const activeBtnStyle = `${buttonCommonStyle} bg-[#5D5FEF] text-white`
  const activeIconStyle = 'mr-2 text-2xl text-white'

  const inactiveIconStyle = 'mr-2 text-2xl text-[#A5A6F6]'
  const inactiveBtnStyle = `text-[#A5A6F6] ${buttonCommonStyle}`

  const [activeBtn, setActiveBtn] = useState(true)

  // navigation
  const navigate = useNavigate()
  const toMyNominations = () => {
    navigate('/nominations')
  }

  // mouse hover event
  const mouseEnter = () => {
    setActiveBtn(false)
  }

  const mouseLeave = () => {
    setActiveBtn(true)
  }

  return (
    <div className="xl:px-6 flex flex-col bg-slate-500 bg-opacity-0 pt-20">
      {/* <button className={`${awardBtnStyle}`}> */}
      <button className={`${activeBtn ? activeBtnStyle : inactiveBtnStyle}`}>
        <RiAwardFill className={`${activeBtn ? activeIconStyle : inactiveIconStyle}`} /> My Awards
      </button>
      <button
        onClick={toMyNominations}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={`${!activeBtn ? activeBtnStyle : inactiveBtnStyle}`}>
        <BsStarFill className={`${!activeBtn ? activeIconStyle : inactiveIconStyle}`} /> My Nominations
      </button>
      <button className={`${inactiveBtnStyle}`}>
        <MdShoppingCart className={`${inactiveIconStyle}`} /> Shopping
      </button>
      <button className={`${inactiveBtnStyle}`}>
        <MdSettings className={`${inactiveIconStyle}`} /> Setting
      </button>

    </div>
  )
}

export default Menu
