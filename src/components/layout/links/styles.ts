import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
  transition: all ease-in 0.15s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
  }

  &:active {
    transform: scale(0.8);
  }

  svg {
    width: 80%;
    height: 80%;
    color: #ffffff;
  }
`;
