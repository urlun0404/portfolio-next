import styled from 'styled-components';
import * as L from 'styles/layout';

export const Projects = styled(L.Section)`
  width: 100%;
  height: 100%;
`;

export const Title = styled(L.SectionTitle)``;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    flex-direction: column;
  }
`;
