"use client";
import Button from "@/components/button/Button";
import SubLine from "@/components/subLine/SubLine";
import Title from "@/components/title/Title";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IAbout {
	className?: string;
}

const animState = {
	initState: {
		opacity: 0,
		translateY: 100,
	},
	contentViewState: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.8,
		},
	},
	imageViewState: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.8,
			delay: 0.3,
		},
	},
};

const About = ({ className }: IAbout) => {
	return (
		<div
			id="about"
			className={`${className} container flex items-center sm:flex-wrap-reverse sm:justify-center justify-between gap-5 sm:gap-0 scroll-m-10`}
		>
			<motion.div
				initial={animState.initState}
				whileInView={animState.contentViewState}
			>
				<AboutContent />
			</motion.div>
			<motion.div
				initial={animState.initState}
				whileInView={animState.imageViewState}
			>
				<AboutImage />
			</motion.div>
		</div>
	);
};

export default About;

function AboutContent({}) {
	const { push } = useRouter();
	return (
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
				<Button
					onClick={() => push("/#contact")}
					className="bg-black text-white"
				>
					Contact Me
				</Button>
				<Button
					onClick={() =>
						push(
							"https://drive.google.com/file/d/13p03kMnmMnDw93ficLYdiOeQX0TyOpBu/view"
						)
					}
				>
					Download CV
				</Button>
			</div>
		</div>
	);
}

function AboutImage({}) {
	return (
		<div className="relative  overflow-hidden sm:mb-10 sm:flex sm:justify-center">
			<Image
				src={"/assets/avatar.jpg"}
				alt="about-me-image"
				width={500}
				height={500}
				className="object-cover w-[312px] h-[348px] sm:w-[200px] sm:mx-auto sm:h-[200px] sm:block  rounded-xl"
			></Image>
		</div>
	);
}
