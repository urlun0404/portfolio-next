import styled from 'styled-components';
import * as L from 'styles/layout';

export const Home = styled(L.Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  font-weight: ${(props) => props.theme.fontWeights.medium};

  & > span {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

export const SubTitle = styled.h2`
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

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0.25rem;

  a {
    min-width: 36px;
    min-height: 36px;
    width: 48px;
    height: 48px;
    padding: 0.75rem;
    margin: 0.25rem 1rem;
  }
`;
