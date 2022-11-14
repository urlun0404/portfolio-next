import About from 'components/about';
import Contact from 'components/contact';
import Footer from 'components/footer';
import GlobalStyles from 'styles/global';
import Home from 'components/home';
import NavBar from 'components/navbar';
import Projects from 'components/projects';
import Skills from 'components/skills';
import Theme from 'styles';
import ProjectsProvider from 'store/project-context';
import { BackToTop } from 'components/layout/buttons';
import React, { useState } from 'react';

export default function HomePage() {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Theme>
        <ProjectsProvider>
          <NavBar />
          <Home setIsBackToTopVisible={setIsBackToTopVisible} />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop isBackToTopVisible={isBackToTopVisible} />
        </ProjectsProvider>
      </Theme>
    </>
  );
}
