import styled from 'styled-components';
import Link from 'next/link';

export const ProjectDetails = styled.section`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 40%;
  overflow: hidden;
`;

export const HeaderTitleGroup = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeights.extraBold};
  color: white;

  & > h2,
  h5 {
    margin: 1rem 0.25rem;
  }
`;

export const ImageContainer = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.15;
  }
`;

export const ImageOverlap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.colors.bg.black90};
`;

export const Details = styled.main`
  width: 100%;
  height: 60%;
  padding: 1rem 2rem;

  & > h4,
  h5 {
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0;
  }

  & > h5 {
    font-size: ${(props) => props.theme.fontSizes.$md};
    color: ${(props) => props.theme.colors.$secondary};
  }

  & > h4 {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  & > ul {
    width: 80%;
    padding: 0.5rem;
    margin: 1rem 0 2rem;
    text-align: justify;

    @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
      width: 90%;
      padding: 0;
    }

    li {
      margin: 1.25rem 0;
      line-height: 1.55em;
    }
  }
`;

export const LinkGroup = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;
  align-items: baseline;
  justify-items: start;
  width: 300px;
  padding: 0.5rem;
  text-align: center;
`;

export const DemoLink = styled(Link)`
  min-width: 90px;
  width: 5%;
  max-width: 120px;
  padding: 0.5rem 0.75rem;
  font-size: ${(props) => props.theme.fontSizes.$sm};
  color: ${(props) => props.theme.colors.bg.white90};
  background-color: ${(props) => props.theme.colors.$secondary};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }

  &:nth-child(1) {
    grid-column: 1/2;
  }
  &:nth-child(2) {
    grid-column: 2/3;
  }
`;

export const BackLink = styled(Link)`
  grid-row: 2/3;
  grid-column: 1/3;
  font-size: ${(props) => props.theme.fontSizes.$lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.colors.$error};
  }
`;
