import React from "react";
import Topbar from "./Topbar";
import Link from "next/link";
import { socials } from "@/utils/socials";

interface IHeader {
	className?: string;
}

const Header = ({ className }: IHeader) => {
	return (
		<header
			className={`${className} h-[100vh] bg-cover bg-center lg:h-[650px] sm:h-[320px] text-white flex items-center justify-center`}
			style={{
				backgroundImage:
					"url('/assets/banner.jpg')",
				
			}}
		>
			<Topbar></Topbar>
			<section className="sm:mt-16">
				<div className="text-[32px] sm:text-[18px] font-light text-center">
					Hello World
				</div>
				<h1 className="uppercase text-[48px] sm:text-[26px] font-bold mb-2 sm:mb-1 tracking-wide">
					Dang Xuan Nam
				</h1>
				<div className="text-[22px] sm:text-[14px] font-light text-center mb-4 sm:mb-2">
					{"I'm a "}
					<span className="font-medium">{"Design Engineer"}</span>
				</div>
				<div className="flex items-center justify-center space-x-4 sm:space-x-1">
					{socials.map((item) => (
						<Link
							key={item.name}
							href={item.href}
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
