import * as L from 'styles/layout';
import styled from 'styled-components';

export const Skills = styled(L.Section)`
  display: flex;
  flex-direction: column;
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
