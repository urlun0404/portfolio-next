import * as L from 'styles/layout';
import styled from 'styled-components';

export const Skills = styled(L.Section)`
  display: flex;
  flex-direction: column;

  & .skill-img {
    opacity: 1;
    transform: scale(1);
    transition: all 0.8s ease-in;
  }

  &.hidden {
    & .skill-img {
      opacity: 0;
      transform: scale(0.3);
    }
  }
`;

export const Title = styled(L.SectionTitle)`
  text-transform: uppercase;
`;

export const Container = styled.section`
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
  padding: 0 1rem;
`;
