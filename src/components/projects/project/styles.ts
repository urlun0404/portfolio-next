import Link from 'next/link';
import styled from 'styled-components';
import { Card } from 'styles/ui';

export const Project = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 250px;
  width: 25%;
  height: 350px;
  padding: 1rem 0.75rem;
  margin: 1.5rem;
  text-align: center;

  .caption {
    text-transform: capitalize;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.$sm}) {
    margin: 1.5rem auto;
  }
`;

export const FigContainer = styled.figure`
  position: relative;
  min-height: 140px;
  width: 100%;
  height: 50%;
  overflow: hidden;

  #demo {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &:hover {
    #demo {
      opacity: 1;
    }

    img {
      opacity: 0.5;
    }
  }
`;

export const DemoLinkContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.black70};
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
`;

export const DemoLink = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  padding: 8px;
  margin: 0 0.75rem;
  color: #000000;
  background-color: #ffffff;
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FigCaption = styled.figcaption`
  font-size: ${(props) => props.theme.fontSizes.$md};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const MoreInfoLink = styled(Link)`
  width: 80px;
  height: 2.5em;
  padding: 0.5rem 0.75rem;
  line-height: 1.5em;
  font-size: ${(props) => props.theme.fontSizes.$xs};
  background-color: #c6c6c6;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 8px;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 6px 0px inset,
      rgba(0, 0, 0, 0.5) -3px -3px 6px 1px inset;
  }
`;
