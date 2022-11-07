import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  margin: 2rem 0;
  padding: 1rem 0.75rem;
  @media (max-width: ${theme.breakpoints.$sm}) {
    display: flex important!;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`;

export const SectionTitle = styled.h3`
  padding: 0.5rem 0;
  @media (max-width: ${theme.breakpoints.$sm}) {
    text-align: center;
  }
`;

export const SectionSubTitle = styled.h4``;
