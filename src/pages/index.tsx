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

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <ProjectsProvider>
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </ProjectsProvider>
      </Theme>
    </>
  );
}
