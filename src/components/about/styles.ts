import styled from 'styled-components';
import * as L from 'styles/layout';

export const About = styled(L.Section)`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 60% 40%;
  row-gap: 1rem;
  column-gap: 0.75rem;
  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    display: flex;
  }
`;

export const Title = styled(L.SectionTitle)`
  grid-row: 1/2;
  text-transform: uppercase;
`;

export const Biography = styled.article`
  grid-row: 2/3;
  grid-column: 1/2;
  font-size: 0.75rem;
  line-height: 1.5em;
  text-align: justify;
  & > p {
    margin: 0.75rem 0;
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
    height: auto;
    border-radius: 10px;
    @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
      width: 80%;
    }
  }
`;
