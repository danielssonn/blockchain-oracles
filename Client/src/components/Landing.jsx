import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

import { IoRocketSharp } from 'react-icons/io5';
import { FiSend } from 'react-icons/fi';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import winner from '../../images/winner.png';
import thumbUp from '../../images/thumb-up.png';
import bg1 from '../../images/bg1.png';
import bg2 from '../../images/bg2.png';
import bg3 from '../../images/bg3.png';
import bg4 from '../../images/bg4.png';
import face from '../../images/face.png';

const Landing = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [changeProfileBg, setProfileBg] = useState(false);
  const [profileBg, setProfile] = useState();

  const changeBg = (e) => {
    setProfileBg(true);
    setProfile(e.target.id);
  };

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div id="top" className="flex w-full justify-center items-center bg-[#8796BB] bg-opacity-80">
      <div className="flex flex-col xl:w-2/3 w-5/6 h-screen py-20">
        <div className="bg-[#E5F3FF] h-70v mt-10 px-10 flex justify-center items-center drop-shadow-lg">
          <div className="w-2/5 ">
            <img src={winner} alt="winner" />
          </div>
          <div className="w-3/5 ">
            <div>
              <h1 className="font-bold text-4xl">
                Hi{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
                  Moment Maker!
                </span>{' '}
              </h1>
              <h1 className="font-bold text-4xl">Enjoy your first Blockchain Award.</h1>
            </div>
            <div className="my-5 font-normal">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna{' '}
              </p>
            </div>
            <div>
              {!currentAccount && (
                <button
                  type="button"
                  onClick={connectWallet}
                  className="my-2 px-5 h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Connect Wallet
                </button>
              )}

              {currentAccount && (
                <AnchorLink
                  href="#note"
                  offset="120"
                  type="button"
                  className="flex max-w-fit cursor-pointer my-2 px-5 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Let's start
                  <IoRocketSharp className="text-white ml-2 mt-1" />
                </AnchorLink>
              )}
            </div>
          </div>
        </div>

        <div id="note" className="flex bg-[#E5F3FF] h-70v mt-10 px-10 justify-center items-center drop-shadow-lg">
          <div className="w-3/5 ">
            note
            <AnchorLink
              href="#profile"
              offset="120"
              type="button"
              className="flex max-w-fit cursor-pointer my-2 px-5 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Send A Thanks Message
              <FiSend className="text-white ml-2 mt-1" />
            </AnchorLink>
          </div>
          <div className="w-2/5 ">
            <img src={thumbUp} alt="bg1" className="w-auto" />
          </div>
        </div>

        <div id="profile" className="flex bg-[#E5F3FF] h-70v mt-10 px-10 justify-center items-center drop-shadow-lg">
          <div className="w-3/5 ">
            <h1 className="font-bold text-4xl">Share your achievement!</h1>
            <h1 className="font-medium text-4xl">Make yourself a Moment Maker Profile Picture</h1>

            <div className="flex justify-start my-10 pr-10">
              <img id={bg1} src={bg1} alt="bg1-image" className="w-1/6 mr-10 cursor-pointer" onMouseOver={changeBg} />
              <img id={bg2} src={bg2} alt="bg2-image" className="w-1/6 mr-10 cursor-pointer" onMouseOver={changeBg} />
              <img id={bg3} src={bg3} alt="bg3-image" className="w-1/6 mr-10 cursor-pointer" onMouseOver={changeBg} />
              <img id={bg4} src={bg4} alt="bg4-image" className="w-1/6 mr-10 cursor-pointer" onMouseOver={changeBg} />
            </div>

            <button
              type="button"
              className="flex max-w-fit cursor-pointer my-2 px-10 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Select
            </button>
            {/* <AnchorLink
              href="#profile"
              offset="120"
              type="button"
              className="flex max-w-fit cursor-pointer my-2 px-10 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Select
            </AnchorLink> */}
          </div>
          <div className="relative w-2/5 flex justify-center items-center">
            <img id="profile" src={face} alt="profile-image" className="w-1/2 z-10" />

            {changeProfileBg ? (
              <img src={profileBg} alt="profile-image" className="absolute w-[300px] h-[300px] z-5" />
            ) : (
              <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-500 z-2"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
