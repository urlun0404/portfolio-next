import styled from 'styled-components';
import * as UI from 'styles/ui';

interface Props {
  isMenuOpened: boolean;
}

export const OpenBtn = styled.button`
  display: none;
  pointer-events: none;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: block;
    padding: 0.25rem;
    pointer-events: unset;
    cursor: pointer;
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const BurgerMenu = styled.div<Props>`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: block;
    width: 55%;
    background-color: #ffffff;
    transform: ${(props) =>
      props.isMenuOpened ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all ease-in 0.2s;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;

export const CloseBtn = styled.button`
  z-index: 100;
  padding: 0.25rem;
  cursor: pointer;
  & > svg {
    width: 25px;
    height: 25px;
  }
`;

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Nav = styled.li`
  padding: 0.5rem 0.25rem;
`;

export const Overlay = styled(UI.Overlay)<Props>`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    z-index: 10;
    display: block;
    width: ${(props) => (props.isMenuOpened ? '100%' : 0)};
    transition: all linear 0.1s;
  }
`;
