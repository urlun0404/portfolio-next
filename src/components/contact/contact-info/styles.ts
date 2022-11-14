import styled from 'styled-components';

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0.5rem;
`;

export const Brief = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  text-align: center;

  img {
    width: 100%;
    max-width: 150px;

    height: auto;
    border-radius: 50%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    position: static;
  }
`;

export const BriefTextContainer = styled.div`
  padding: 1rem;

  p {
    margin: 0.5rem 0;
  }

  p:nth-child(-n + 2) {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  p:last-child {
    font-size: ${(props) => props.theme.fontSizes.$sm};
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  p {
    margin: 1rem 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    position: static;
  } ;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    width: 36px;
    height: 36px;
    padding: 0.25rem;
    margin: 0.25rem 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    justify-content: center;
  } ;
`;
