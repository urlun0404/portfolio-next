import * as s from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

const navId = {
  home: '',
  about: '#about',
  skills: '#skills',
  projects: '#porjects',
  contact: '#contact',
};

type NavIdValue = typeof navId[keyof typeof navId];

export default function Navs() {
  const [activeNav, setActiveNav] = useState<NavIdValue>('');
  const router = useRouter();

  useLayoutEffect(() => {
    setActiveNav(router.asPath.substring(1));
  }, [router.asPath]);

  return (
    <>
      <s.Nav className={`nav ${activeNav === navId.home ? 'active' : ''}`}>
        <Link href={`/${navId.home}`}>Home</Link>
      </s.Nav>
      <s.Nav className={`nav ${activeNav === navId.about ? 'active' : ''}`}>
        <Link href={`/${navId.about}`}>About</Link>
      </s.Nav>
      <s.Nav className={`nav ${activeNav === navId.skills ? 'active' : ''}`}>
        <Link href={`/${navId.skills}`}>Skills</Link>
      </s.Nav>
      <s.Nav className={`nav ${activeNav === navId.projects ? 'active' : ''}`}>
        <Link href={`/${navId.projects}`}>Projects</Link>
      </s.Nav>
      <s.Nav className={`nav ${activeNav === navId.contact ? 'active' : ''}`}>
        <Link href={`/${navId.contact}`}>Contact</Link>
      </s.Nav>
    </>
  );
}
