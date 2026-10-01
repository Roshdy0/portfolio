import Hero from "@/app/component/hero/hero";
import About from "@/app/component/About/About";
import CareerJourney from "@/app/component/CareerJourney/CareerJourney";
import Header from "@/app/component/header/header";
import Skills from "@/app/component/Skills/Skills";
import Footer from "@/app/component/Footer/Footer";
import Contact from "@/app/component/Contact/Contact";
import Projects from "@/app/component/Projects/Projects";
import FloatingButtons from "@/app/component/FloatingButtons/FloatingButtons";

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<Skills />
			<About />
			<CareerJourney />
			<Projects />
			<Contact />
			<FloatingButtons />
			<Footer />
		</main>
	);
}
