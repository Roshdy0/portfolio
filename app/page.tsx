import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import FloatingButtons from "./component/FloatingButtons/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <FloatingButtons />
      <Footer />
    </main>
  );
}
