import styled from 'styled-components';

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    align-items: center;
  } ;
`;

export const Brief = styled.div`
  position: relative;
  top: 30px;
  width: 150px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  p {
    margin: 0.5rem 0;
  }

  p:nth-child(-n + 2) {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  p:last-child {
    font-size: ${(props) => props.theme.fontSizes.$sm};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    position: static;
  }
`;

export const ContactLinks = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  P {
    margin: 1rem 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    position: static;
  } ;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    width: 36px;
    height: 36px;
    padding: 0.25rem;
    margin: 0 0.5rem;
  }
`;
