"use client";
import SubLine from "@/components/subLine/SubLine";
import FirebaseTech from "@/components/techniques/FirebaseTech";
import ReactNativeTech from "@/components/techniques/ReactNativeTech";
import ReactTech from "@/components/techniques/ReactTech";
import TailwindTech from "@/components/techniques/TailwindTech";
import ChildTitle from "@/components/title/ChildTitle";
import Title from "@/components/title/Title";
import { data } from "@/libs/data";
import Footer from "@/modules/Footer";
import Nav from "@/modules/Nav";
import Topbar from "@/modules/Topbar";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const ProductDetail = () => {
	const params = useParams();
	const productData = data.products.find(
		(product) => product.slug === params?.slug
	);

	const handleTechnique = (technique: string) => {
		switch (technique) {
			case "React":
				return <ReactTech></ReactTech>;
			case "Tailwind":
				return <TailwindTech></TailwindTech>;
			case "Firebase":
				return <FirebaseTech></FirebaseTech>;
			case "React Native":
				return <ReactNativeTech></ReactNativeTech>;
			default:
				break;
		}
	};

	if (!productData) return;

	
	return (
		<div>
			{/* <Topbar className="bg-white"></Topbar> */}
			{/* banner  */}
			<div className="w-full max-w-[1240px] px-5 mx-auto mt-[100px]">
				<div className="relative">
					<Image
						alt="Product-cover"
						src={productData.banner}
						width={1000}
						height={1000}
						className="w-full aspect-[16/8] object-cover object-center rounded-2xl"
					></Image>
				</div>
			</div>
			{/* content  */}
			<div className="w-full max-w-[1040px] mx-auto px-5">
				<Title className="text-[28px] mt-8">
					{productData.titleLarge}
				</Title>
				{productData.publicSite && (
					<SubLine className="mt-2">
						Public:{" "}
						<a
							className="text-blue-500 dark:text-blue-400 hover:underline"
							href={productData.publicSite}
							target="_blank"
						>
							{productData.publicSite}
						</a>
					</SubLine>
				)}
				<SubLine className="mt-2">
					Visit Github:{" "}
					<a
						className="text-blue-500 dark:text-blue-400 hover:underline"
						href={productData.github}
						target="_blank"
					>
						{productData.github}
					</a>
				</SubLine>
				<p className="text-lg mt-4 leading-relaxed mb-4">
					{productData.desc}
				</p>
				<ImageSlider images={productData.images}></ImageSlider>
				<div className="">
					<ChildTitle className="mt-8 mb-4">テクニック</ChildTitle>
					<div className="flex items-center gap-5">
						{productData.techniques.map((item, index) => (
							<div key={index}>{handleTechnique(item)}</div>
						))}
					</div>
				</div>
				<div>
					<ChildTitle className="mt-8 mb-4">制作目的</ChildTitle>
					<ul className="list-disc ml-8 leading-8 text-lg">
						{productData.purpose.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<ChildTitle className="mt-8 mb-4">
						プロジェクト概要
					</ChildTitle>
					<ul className="list-disc ml-8 leading-8 text-lg">
						{productData.overview.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<Footer className="mt-28"></Footer>
		</div>
	);
};

export default ProductDetail;

function ImageSlider({ images }: { images: string[] }) {
	return (
		<div className="slider flex items-center gap-5 mt-10 overflow-x-scroll rounded-xl">
			{images.map((item, index) => (
				<div key={index} className="relative shrink-0">
					<Image
						alt="slider-img"
						src={item}
						width={1000}
						height={1000}
						className="w-[400px] aspect-video rounded-xl object-cover"
					></Image>
				</div>
			))}
		</div>
	);
}
