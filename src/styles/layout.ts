import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Section = styled.section`
  width: 100%;
  padding: 1rem 0.75rem;
  margin: 2rem 0;
  @media (max-width: ${theme.breakpoints.$sm}) {
    display: flex important!;
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionTitle = styled.h3`
  @media (max-width: ${theme.breakpoints.$sm}) {
    text-align: center;
  }
`;

export const SectionSubTitle = styled.h4``;
