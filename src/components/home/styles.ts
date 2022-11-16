import styled, { keyframes } from 'styled-components';
import * as L from 'styles/layout';

const fadeIn = keyframes`
to{
  opacity: 1
}
`;

const typing = keyframes`
from {
  width: 0%;
}

to {
  width: 100%;
}
`;

export const Home = styled(L.Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;

  // Animation in Home
  & > h1 .typing {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: ${typing} 1.5s steps(30, end) 0.5s 1 normal forwards;
  }

  & > .fadeIn:nth-child(2) {
    animation: ${fadeIn} 0.8s ease-in 2.2s 1 normal forwards;
  }

  & > .fadeIn:nth-child(3) {
    animation: ${fadeIn} 1s ease-in 3s 1 normal forwards;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  margin: 1rem 0;
  font-weight: ${(props) => props.theme.fontWeights.medium};

  & span {
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
  opacity: 0;

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
  opacity: 0;

  a {
    min-width: 36px;
    min-height: 36px;
    width: 48px;
    height: 48px;
    padding: 0.75rem;
    margin: 0.25rem 1rem;
  }
`;
