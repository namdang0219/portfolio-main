import PortfolioItem from "@/components/PortfolioItem";
import Button from "@/components/button/Button";
import SubLine from "@/components/subLine/SubLine";
import Title from "@/components/title/Title";
import React from "react";

const Portfolio = () => {
	return (
		<section id="work" className="container  scroll-m-10">
			<div className="text-center">
				<Title>My Portfolio</Title>
				<SubLine className="sm:mx-6">
					I love what i do, i take a great pride in what i do
				</SubLine>
			</div>
			<div className="mx-auto w-full max-w-[180px] h-[0.5px] bg-black mt-6 mb-12"></div>
			<div className="flex items-center justify-center gap-x-4 mb-12 sm:gap-x-2">
				<Button>ALL</Button>
				<Button>WEB APP</Button>
				<Button>MOBILE APP</Button>
			</div>
			<div className="grid grid-cols-3 gap-x-5 sm:grid-cols-1 gap-y-5">
        {products.map(item => (
          <PortfolioItem key={item.id} item={item}></PortfolioItem>
        ))}
      </div>
		</section>
	);
};

const products = [
	{
		id: 1,
		title: "Lorem Ipsum",
    time: '2024/03',
		technique: "React, Firebase",
		desc: "A small project about a web film and make something like a designer",
		thumb: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		title: "Lorem Ipsum",
    time: '2024/03',
		technique: "React, Firebase",
		desc: "A small project about a web film and make something like a designer",
		thumb: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		title: "Lorem Ipsum",
    time: '2024/03',
		technique: "React, Firebase",
		desc: "A small project about a web film and make something like a designer",
		thumb: "https://plus.unsplash.com/premium_photo-1712844381902-8f65c580a5f1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export default Portfolio;
