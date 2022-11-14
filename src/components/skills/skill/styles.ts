import styled from 'styled-components';

const imageWidth = '3rem';

export const Skill = styled.div`
  flex-basis: 1 1 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 220px;
  width: 45%;
  max-width: 250px;
  margin: 0.5rem 0.75rem;
  padding: 0.75rem;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const FigContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > img {
    width: ${imageWidth};
    height: ${imageWidth};
  }
`;

export const FigCaption = styled.figcaption`
  margin: 0.5rem;
  padding: 0.5rem 0;
`;
