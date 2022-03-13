const Menu = () => {
  const buttonCommonStyle =
    'flex justify-start items-center text-base py-3 xl:px-4 pl-2 xl:font-semibold font-medium mb-3 rounded-lg cursor-pointer'
  const buttonIconCommonStyle = 'mt-1 mr-2 text-2xl'
  const inactiveStyle = 'text-[#A5A6F6]'
  const activeStyle = 'bg-[#5D5FEF] text-white'

  return (
    <div className="xl:px-6 flex flex-col bg-slate-500 col-span-2 bg-opacity-0 pt-20">
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
