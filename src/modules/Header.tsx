"use client";
import React from "react";
import Topbar from "./Topbar";
import Link from "next/link";
import { socials } from "@/utils/socials";
import { TypeAnimation } from "react-type-animation";

interface IHeader {
	className?: string;
}

const Header = ({ className }: IHeader) => {
	return (
		<header
			className={`${className} h-[100vh] bg-cover bg-center lg:h-[650px] sm:h-[320px] text-white flex items-center justify-center`}
			style={{
				backgroundImage: "url('/assets/banner.jpg')",
			}}
		>
			
			<section className="sm:mt-16">
				<div className="text-[22px] flex items-center gap-4 sm:text-[18px] font-light text-center">
					<div className="w-full h-[0.1px] bg-white bg-opacity-40"></div>
					<span className="shrink-0">初めまして</span>
					<div className="w-full h-[0.1px] bg-white bg-opacity-40"></div>
				</div>
				<h1 className="uppercase text-[48px] sm:text-[26px] font-semibold mb-2 sm:mb-1 tracking-widest">
					Dang Xuan Nam
				</h1>
				<div className="text-[22px]  h-8 sm:text-[14px] font-light text-center mb-4 sm:mb-2">
					<TypeAnimation
						sequence={[
							"私はフロントエンジニアです！",
							1000,
							"I'm a Frontend Engineer！", 
							1000,
						]}
						wrapper="span"
						speed={10}
						// style={{ fontSize: "2em", display: "inline-block" }}
						repeat={Infinity}
					/>
				</div>
				<div className="flex items-center justify-center space-x-4 sm:space-x-1">
					{socials.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							target="_blank"
							className="size-12 sm:scale-75 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-25 hover:bg-opacity-60 transition-all rounded-full"
						>
							{item.icon}
						</Link>
					))}
				</div>
			</section>
		</header>
	);
};

export default Header;
