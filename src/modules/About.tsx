import Button from "@/components/button/Button";
import SubLine from "@/components/subLine/SubLine";
import Title from "@/components/title/Title";
import Image from "next/image";
import React from "react";

interface IAbout {
	className?: string;
}

const About = ({ className }: IAbout) => {
	return (
		<div
			className={`${className} container flex items-center sm:flex-wrap-reverse justify-between gap-5 sm:gap-0`}
		>
			<div>
				<Title className="sm:text-center">About Me</Title>
				<SubLine className="mb-7 sm:text-center">
					Frontend Developer & Web Designer
				</SubLine>
				<p className="max-w-[575px] sm:text-center sm:font-light sm:text-base mb-10 leading-relaxed tracking-wider text-[20px]">
					初めまして、ナムと申します。デザインエンジニアを目指して、ECCコンピュータ専門学校で勉強しています。Reactで開発するのは大好きで、ReactとReactNativeどちらも使用できます。UI/UX
					デザインの面もやっていて、色々な作品を自分でデザインしてから、コーディングを行なってます。
				</p>
				<div className="flex items-center space-x-6 sm:justify-center">
					<Button className="bg-black text-white">Contact Me</Button>
					<Button>Download CV</Button>
				</div>
			</div>
			<div className="relative w-[312px] h-[348px] sm:w-[200px] sm:h-[200px] sm:mb-10 sm:mx-auto rounded-xl overflow-hidden">
				<Image
					src={
						'/assets/avatar.jpg'
					}
					alt="about-me-image"
					fill
					className="object-cover"
				></Image>
			</div>
		</div>
	);
};

export default About;
