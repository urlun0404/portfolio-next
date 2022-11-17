import styled from 'styled-components';
import * as L from 'styles/layout';

export const About = styled(L.Section)`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 60% 40%;
  row-gap: 1rem;
  column-gap: 0.75rem;

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    display: flex;
  }

  & > #bio,
  #photo {
    transition: all 0.3s ease-in;
  }

  &.hidden {
    & > #bio {
      transform: translateX(-150%);
    }

    & > #photo {
      transform: translateX(150%);
    }
  }
`;

export const Title = styled(L.SectionTitle)`
  grid-row: 1/2;
  text-transform: uppercase;
`;

export const Biography = styled.article`
  grid-row: 2/3;
  grid-column: 1/2;
  font-size: ${(props) => props.theme.fontSizes.$md};
  line-height: 1.5em;
  text-align: justify;

  & > p {
    margin: 0.75rem 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$md}) {
    font-size: 0.85rem;
  }
`;

export const Photo = styled.figure`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 10px;

    @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
      width: 70%;
    }
  }
`;

export const Resume = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  display: grid;
  justify-items: center;
  font-size: ${(props) => props.theme.fontSizes.$sm};

  & > p {
    grid-row: 1/2;
    grid-column: 1/3;
    line-height: 1.5em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    font-size: 0.7rem;
    text-align: center;
  }
`;

export const ResumeLink = styled.a`
  min-width: 90px;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  color: ${(props) => props.theme.colors.bg.white};
  background-color: ${(props) => props.theme.colors.bg.black};
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.bg.grayDark90};
  }
`;
