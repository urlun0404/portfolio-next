import styled from 'styled-components';
import * as L from 'styles/layout';

export const Contact = styled(L.Section)``;

export const Title = styled(L.SectionTitle)``;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 500px;
  height: 100%;

  & > #info,
  form {
    flex: 1 1 30%;
    min-width: 30%;
    min-height: 85%;
    padding: 1rem;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    border-radius: 5px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    flex-direction: column;
    align-items: center;
    height: auto;

    & > #info,
    form {
      width: 95%;
      margin: 2rem 0.25rem;
    }
  }
`;
