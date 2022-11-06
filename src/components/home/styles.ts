import styled from 'styled-components';
import * as L from 'styles/layout';

export const Home = styled(L.Section)`
  text-align: center;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  & > span {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
export const SubTitle = styled.p`
  width: 70%;
  margin: 0 auto;
  font-size: 0.95rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: 1.5em;
  line-height: 1.75rem;
  & > p:first-child {
    margin: 0.25rem 0;
    font-size: 1.05rem;
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`;
