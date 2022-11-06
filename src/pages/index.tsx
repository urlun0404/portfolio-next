import About from 'components/about';
import Contact from 'components/contact';
import Footer from 'components/footer';
import Home from 'components/home';
import NavBar from 'components/navbar';
import Projects from 'components/projects';
import Skills from 'components/skills';
import Head from 'next/head';
import Theme from 'styles';
import GlobalStyles from 'styles/global';

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>You-Lun Lin | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
