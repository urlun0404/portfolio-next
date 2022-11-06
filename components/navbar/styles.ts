import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Nav = styled.li`
  padding: 0.25rem 0.5rem;
`;
