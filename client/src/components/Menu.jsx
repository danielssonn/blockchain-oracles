import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// icons
import { MdShoppingCart, MdSettings } from 'react-icons/md'
import { RiAwardFill } from 'react-icons/ri'
import { BsStarFill } from 'react-icons/bs'

const Menu = () => {
  const [activeBtn, setActiveBtn] = useState()
  const [currentPath, setCurrentPath] = useState()
  const location = useLocation()

  useEffect(() => {
    // location.pathname === '/awards' ? setActiveBtn(true) : setActiveBtn(false)

    setCurrentPath(location.pathname)
    setActiveBtn(location.pathname === '/awards')

    console.log(`current page: ${location.pathname}`)
  }, [])

  // navigation
  const navigate = useNavigate()
  const toPage = (to) => {
    navigate(to)
  }

  // common css styles
  const buttonCommonStyle =
    'flex justify-start items-center text-base py-3 xl:px-4 pl-2 xl:font-semibold font-medium mb-3 rounded-lg cursor-pointer'

  const activeBtnStyle = `${buttonCommonStyle} bg-[#5D5FEF] text-white`
  const activeIconStyle = 'mr-2 text-2xl text-white'

  const inactiveIconStyle = 'mr-2 text-2xl text-[#A5A6F6]'
  const inactiveBtnStyle = `text-[#A5A6F6] ${buttonCommonStyle}`

  // mouse hover event
  const mouseEnter = (name) => {
    if (name !== currentPath) {
      setActiveBtn(!activeBtn)
    }
  }

  const mouseLeave = (name) => {
    setActiveBtn(location.pathname === '/awards')
  }

  return (
    <div className="xl:px-6 flex flex-col bg-slate-500 bg-opacity-0 pt-20">

      <button
        onClick={() => toPage('/awards')}
        onMouseEnter={() => mouseEnter('/awards')}
        onMouseLeave={() => mouseLeave('/awards')}
        className={`${activeBtn ? activeBtnStyle : inactiveBtnStyle}`}>
        <RiAwardFill className={`${activeBtn ? activeIconStyle : inactiveIconStyle}`} /> My Awards
      </button>
      <button
        onClick={() => toPage('/nominations')}
        onMouseEnter={() => mouseEnter('/nominations')}
        onMouseLeave={() => mouseLeave('./nominations')}
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
