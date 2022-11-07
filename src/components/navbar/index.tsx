import Navs from './navs';
import BurgerMenu from './burger-menu';
import * as s from './styles';

export default function Navbar() {
  return (
    <s.NavBar>
      <s.NavWrapper>
        <Navs />
      </s.NavWrapper>
      <BurgerMenu />
    </s.NavBar>
  );
}
