import Navs from '../navs';
import React, { useCallback, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import * as s from './styles';

export default function BurgerMenu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, []);

  const openMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsMenuOpened(true);
  }, []);

  const closeMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsMenuOpened(false);
  }, []);

  return (
    <>
      <s.OpenBtn onClick={openMenu}>
        <GiHamburgerMenu />
      </s.OpenBtn>
      <s.BurgerMenu isMenuOpened={isMenuOpened}>
        <s.MenuTop>
          <s.CloseBtn onClick={closeMenu}>
            <IoMdClose />
          </s.CloseBtn>
        </s.MenuTop>
        <s.NavWrapper>
          <Navs />
        </s.NavWrapper>
      </s.BurgerMenu>
      <s.Overlay isMenuOpened={isMenuOpened} />
    </>
  );
}
