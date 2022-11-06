import styled from 'styled-components';
import * as L from 'styles/layout';

export const Home = styled(L.Section)`
  text-align: center;
`;

export const Title = styled.h1`
  margin: 1rem 0;
`;
export const SubTitle = styled.p`
  width: 70%;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontSizes.$md};
  line-height: 1.5em;
`;
