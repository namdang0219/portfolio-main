import About from "@/modules/About";
import Contact from "@/modules/Contact";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Portfolio from "@/modules/Portfolio";
import Service from "@/modules/Service";
import React from "react";

const Home = () => {
	
	return (
		<div>
			<Header className="mb-[100px] sm:mb-5"></Header>
			<About></About>
			<Service></Service>
			<Portfolio></Portfolio>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;
