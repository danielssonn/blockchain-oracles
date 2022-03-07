import React, { useContext, useEffect, useState } from 'react';
import * as io5 from 'react-icons/io5';
import * as fi from 'react-icons/fi';
import * as cg from 'react-icons/cg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const iconFamilies = {
  io5,
  fi,
  cg,
};

const Icon = ({ family, name }) =>
  React.createElement(iconFamilies[family][name], { className: 'text-white ml-2 mt-1' });

const AnchorButton = ({ to, title, family, name }) => {
  return (
    <AnchorLink
      href={'#' + to}
      offset="120"
      type="button"
      className="flex max-w-fit cursor-pointer my-2 px-5 pt-[13px] h-[50px] text-base font-semibold text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-[#3926AD] via-violet-600 to-[#C367D6] bg-size-200 bg-pos-0 hover:bg-pos-100"
    >
      {title}
      {/* <FiSend className="text-white ml-2 mt-1" /> */}
      <Icon {...{ family, name }} />
    </AnchorLink>
  );
};

export default AnchorButton;
