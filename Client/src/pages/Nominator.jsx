import React, { useContext, useEffect, useState } from 'react';

// assets
import IMAGES from '../../images';

const Nominator = () => {
  return (
    <div className="bg-dashboard bg-center bg-cover min-h-screen min-w-full ">
      <div className="grid grid-cols-12 gap-3 w-full min-h-screen px-10 py-16">
        <div className="bg-slate-500 col-span-2 opacity-0"></div>
        <div className="bg-gradient-to-r from-[#FBF7F9] to-[#EDF7FF] opacity-70 col-span-7 rounded-l-xl"></div>
        <div className="bg-[#FAF7F9] opacity-70 col-span-3 rounded-r-xl flex flex-col items-center pt-20">
          <div className="relative w-2/5 flex justify-center items-center">
            <img id="profile" src={IMAGES.face} alt="profile-image" className="w-1/2 z-10" />

            {/* <img src={profileBg} alt="profile-image" className="absolute w-[300px] h-[300px] z-5" /> */}

            <div className="absolute w-[100%] h-[160%] rounded-full bg-violet-500 z-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nominator;
