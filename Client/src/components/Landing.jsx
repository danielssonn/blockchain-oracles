import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { AnchorButton } from './index';

// icons
import { IoWalletOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { FiSend } from 'react-icons/fi';

// assets
import IMAGES from '../../images';

const Landing = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [changeProfileBg, setProfileBg] = useState(false);
  const [profileBg, setProfile] = useState();

  // change profile background while hove over
  const changeBg = (e) => {
    setProfileBg(true);
    setProfile(e.target.id);
  };

  // force to scroll to top when reload
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const commonStyle = 'flex bg-[#E5F3FF] h-70v mt-10 px-10 justify-center items-center drop-shadow-lg';

  return (
    <div id="top" className="flex w-full justify-center items-center bg-[#8796BB] bg-opacity-80">
      <div className="flex flex-col xl:w-2/3 w-5/6 h-screen py-20">
        <div id="connect" className={`${commonStyle}`}>
          <div className="w-2/5 ">
            <img src={IMAGES.winner} alt="winner" />
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
                  className="flex max-w-fit my-2 px-5 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Connect Wallet
                  <IoWalletOutline className="text-white ml-2 mt-1" />
                </button>
              )}

              {currentAccount && <AnchorButton title="Let's start" to="note" family="io5" name="IoRocketSharp" />}
            </div>
          </div>
        </div>

        <div id="note" className={`${commonStyle}`}>
          <div className="w-3/5 ">
            <h1 className="font-bold text-3xl mb-5">
              You received the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
                Purpose Award 250
              </span>{' '}
              from Jane Smith
            </h1>
            <div className="p-5 mb-5 bg-slate-200 rounded-md">
              <p className="mb-3">Hi John Doe,</p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>Thank you!</p>

              <p className="mb-3"> Jane Smith</p>
            </div>
            <div className="flex justify-start items-center">
              <AnchorButton title="Mint A Blockchain Certificate" to="profile" family="si" name="SiEthereum" />
              <div className="flex cursor-pointer ml-10">
                <h5 className="text-[#3926AD] font-semibold">Thanks to Jane</h5>
                <FiSend className="text-[#3926AD] ml-2 mt-1" />
              </div>
            </div>
          </div>
          <div className="w-2/5 ">
            <img src={IMAGES.thumbUp} alt="thumbUp" className="w-auto" />
          </div>
        </div>

        <div id="profile" className={`${commonStyle}`}>
          <div className="w-3/5 ">
            <h1 className="font-bold text-4xl">Share your achievement!</h1>
            <h1 className="font-medium text-3xl">Make yourself a Moment Maker Profile Picture</h1>

            <div className="flex justify-start my-10 pr-10">
              <img
                id={IMAGES.bg1}
                src={IMAGES.bg1}
                alt="bg1-image"
                className="w-1/6 mr-10 cursor-pointer"
                onMouseOver={changeBg}
              />
              <img
                id={IMAGES.bg2}
                src={IMAGES.bg2}
                alt="bg2-image"
                className="w-1/6 mr-10 cursor-pointer"
                onMouseOver={changeBg}
              />
              <img
                id={IMAGES.bg3}
                src={IMAGES.bg3}
                alt="bg3-image"
                className="w-1/6 mr-10 cursor-pointer"
                onMouseOver={changeBg}
              />
              <img
                id={IMAGES.bg4}
                src={IMAGES.bg4}
                alt="bg4-image"
                className="w-1/6 mr-10 cursor-pointer"
                onMouseOver={changeBg}
              />
            </div>

            <button
              type="button"
              className="flex max-w-fit cursor-pointer my-2 px-10 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Use As New Profile Picture
              <CgProfile className="text-white ml-2 mt-1" />
            </button>
          </div>
          <div className="relative w-2/5 flex justify-center items-center">
            <img id="profile" src={IMAGES.face} alt="profile-image" className="w-1/2 2xl:w-2/5 z-10" />

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
