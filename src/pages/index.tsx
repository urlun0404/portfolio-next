import About from 'components/about';
import Contact from 'components/contact';
import Footer from 'components/footer';
import GlobalStyles from 'styles/global';
import Home from 'components/home';
import NavBar from 'components/navbar';
import Projects from 'components/projects';
import Skills from 'components/skills';
import Theme from 'styles';

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Theme>
    </>
  );
}
