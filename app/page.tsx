import Hero from "./component/hero/hero";
import About from "./component/About/About";
import Header from "./component/header/header";
import Skills from "./component/Skills/Skills";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import Projects from "./component/Projects/Projects";
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
