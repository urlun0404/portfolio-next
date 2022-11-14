import Navs from './navs';
import BurgerMenu from './burger-menu';
import * as s from './styles';

interface Props {
  isNavbarFixed: boolean;
}

export default function Navbar(props: Props) {
  return (
    <s.NavBar className={props.isNavbarFixed ? 'fixed dark' : ''}>
      <s.NavWrapper>
        <Navs />
      </s.NavWrapper>
      <BurgerMenu className={`${props.isNavbarFixed ? 'fixed dark' : ''}`} />
    </s.NavBar>
  );
}
