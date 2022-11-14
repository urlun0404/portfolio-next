import styled, { css } from 'styled-components';

export const NavBar = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.25rem 1rem;
  width: 100%;

  &.fixed {
    position: fixed;
    top: 0;
  }

  &.dark {
    background-color: ${(props) => props.theme.colors.bg.black90};

    & > a,
    & > .burger-menu.open-btn > svg {
      color: ${(props) => props.theme.colors.bg.white90};
    }
  }
`;

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  text-align: center;

  .nav {
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    display: none;
  }
`;
