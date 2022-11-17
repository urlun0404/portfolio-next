import About from 'components/about';
import Contact from 'components/contact';
import GlobalStyles from 'styles/global';
import Header from 'components/layout/header';
import Home from 'components/home';
import NavBar from 'components/navbar';
import Projects from 'components/projects';
import ProjectsProvider from 'store/project-context';
import React, { useState } from 'react';
import Skills from 'components/skills';

import { BackToTop } from 'components/layout/buttons';

export default function HomePage() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  return (
    <>
      <GlobalStyles />
      <ProjectsProvider>
        <Header setIsNavbarFixed={setIsNavbarFixed} />
        <NavBar isNavbarFixed={isNavbarFixed} />
        <Home setIsBackToTopVisible={setIsBackToTopVisible} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <BackToTop isBackToTopVisible={isBackToTopVisible} />
      </ProjectsProvider>
    </>
  );
}
