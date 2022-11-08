import styled from 'styled-components';

export const Nav = styled.li`
  margin: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.$md};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  &.active {
    text-decoration: underline;
  }

  a {
    transition: all ease-in 0.3s;

    &:hover {
      color: #969696;
    }
  }
`;
