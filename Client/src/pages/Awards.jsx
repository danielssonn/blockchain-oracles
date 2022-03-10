import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

import { MdNotifications, MdShoppingCart, MdSettings } from 'react-icons/md';
import { RiAwardFill } from 'react-icons/ri';
import { BsStarFill } from 'react-icons/bs';

// assets
import IMAGES from '../../images';

const Awards = () => {
  const { selectedProfileBg } = useContext(TransactionContext);

  const buttonCommonStyle =
    'flex justify-start items-center text-base py-3 xl:px-4 pl-2 xl:font-semibold font-medium mb-3 rounded-lg cursor-pointer';
  const buttonIconCommonStyle = 'mt-1 mr-2 text-2xl';
  const inactiveColor = 'text-[#A5A6F6]';

  return (
    <div className="bg-dashboard bg-center bg-cover min-h-screen min-w-full">
      <div className="grid grid-cols-12 gap-3 w-full min-h-screen xl:px-20 px-10 py-16">
        <div className="xl:px-6 flex flex-col bg-slate-500 col-span-2 bg-opacity-0 pt-20">
          <button className={`bg-[#5D5FEF] text-white ${buttonCommonStyle}`}>
            <RiAwardFill className={`text-white ${buttonIconCommonStyle}`} /> My Awards
          </button>

          <button className={`${buttonCommonStyle} ${inactiveColor}`}>
            <BsStarFill className={`${buttonIconCommonStyle} ${inactiveColor}`} /> My Nominations
          </button>
          <button className={`${buttonCommonStyle} ${inactiveColor}`}>
            <MdShoppingCart className={`${buttonIconCommonStyle} ${inactiveColor}`} /> Shopping
          </button>
          <button className={`${buttonCommonStyle} ${inactiveColor}`}>
            <MdSettings className={`${buttonIconCommonStyle} ${inactiveColor}`} /> Setting
          </button>
        </div>
        <div className="relative bg-gradient-to-r from-white/50 to-white/10 col-span-7 rounded-l-2xl">
          <div className="xl:px-5 px-3">
            <img className="absolute xl:-top-8 -top-3" src={IMAGES.branding} alt="branding" />
          </div>
        </div>

        <div className="bg-[#FAF7F9] bg-opacity-70 col-span-3 rounded-r-2xl flex flex-col items-center pt-16">
          <div className="relative w-2/5 flex justify-center items-center">
            <img id="profile" src={IMAGES.face} alt="profile-image" className="w-1/2 z-10" />

            {selectedProfileBg ? (
              <img src={selectedProfileBg} alt="profile-image" className="absolute w-[100%] h-[160%] z-5" />
            ) : (
              <div className="absolute w-[100%] h-[160%] rounded-full bg-violet-500 z-2"></div>
            )}
          </div>

          <div className="flex justify-center items-center mt-10">
            <MdNotifications className="text-[#A5A6F6] mt-1 text-2xl" />
            <h1 className="ml-2 text-xl font-semibold text-[#7879F1]"> Rui Chuang </h1>
          </div>

          <div className="drop-shadow-lg rounded-lg px-2 py-4 flex justify-around items-center bg-gradient-to-tr from-[#3D4E81] via-[#5753C9] to-[#6E7FF3] mt-10 w-11/12 min-h-50">
            <img className="w-2/5" src={IMAGES.points} alt="points" />
            <div className="text-white text-right xl:my-8 my-4">
              My Points
              <h1 className="font-bold xl:text-4xl text-2xl">1,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
