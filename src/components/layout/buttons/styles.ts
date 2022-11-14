import styled from 'styled-components';

export const BackToTop = styled.button`
  position: fixed;
  right: 50px;
  bottom: 20px;
  width: 36px;
  height: 36px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.bg.grayLight70};
  border-radius: 50%;
  transition: all ease-in 0.2s;
  opacity: 0;
  pointer-events: none;
  cursor: pointer;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.bg.gray70};
    transform: scale(1.1);
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colors.bg.black70};
  }
`;
