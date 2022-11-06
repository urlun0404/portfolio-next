import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.bg.black70};
`;

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: ${theme.colors.bg.black30} 0px 3px 8px;
`;
