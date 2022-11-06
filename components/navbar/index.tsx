import Link from 'next/link';
import BurgerMenu from './burger-menu';
import * as s from './styles';

export default function Navbar() {
  return (
    <s.NavBar>
      <s.NavWrapper>
        <s.Nav>
          <Link href="/">Home</Link>
        </s.Nav>
        <s.Nav>
          <Link href="/">About</Link>
        </s.Nav>
        <s.Nav>
          <Link href="/">Skills</Link>
        </s.Nav>
        <s.Nav>
          <Link href="/">Projects</Link>
        </s.Nav>
        <s.Nav>
          <Link href="/">Contact</Link>
        </s.Nav>
      </s.NavWrapper>
      <BurgerMenu />
    </s.NavBar>
  );
}
