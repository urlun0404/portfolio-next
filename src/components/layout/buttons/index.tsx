import * as s from './styles';
import { IoMdArrowRoundUp } from 'react-icons/io';
import React, { useEffect, useState, useRef } from 'react';

const options = {
  root: null,
  thread: 0.9,
  rootMargin: '5px',
};

interface Props {
  isBackToTopVisible: boolean;
}

export const BackToTop = function (props: Props) {
  const BackToTopBtnRef = useRef<HTMLButtonElement>(null);

  const scrollBackToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Click back to top');
    event.preventDefault();
    document.querySelector('body')!.scrollTo({
      top: 0,
    });
  };

  return (
    <s.BackToTop
      className={props.isBackToTopVisible ? 'visible' : ''}
      onClick={scrollBackToTop}
    >
      <IoMdArrowRoundUp />
    </s.BackToTop>
  );
};
