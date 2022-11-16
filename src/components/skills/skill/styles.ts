import styled from 'styled-components';

export const Skill = styled.div`
  flex-basis: 1 1 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin: 1.25rem 1.5rem;
`;

export const FigContainer = styled.figure`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:nth-child(1) {
    width: 80px;
    height: 80px;
  }
  &:nth-child(n + 2) {
    width: 60px;
    height: 60px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const FigCaption = styled.figcaption`
  margin: 0.5rem;
  padding: 0.5rem 0;
`;
