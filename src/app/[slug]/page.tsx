import SubLine from "@/components/subLine/SubLine";
import FirebaseTech from "@/components/techniques/FirebaseTech";
import ReactTech from "@/components/techniques/ReactTech";
import ChildTitle from "@/components/title/ChildTitle";
import Title from "@/components/title/Title";
import Footer from "@/modules/Footer";
import Nav from "@/modules/Nav";
import Topbar from "@/modules/Topbar";
import Image from "next/image";
import React from "react";

const ProductDetail = () => {
	return (
		<div>
			<Topbar className="bg-white"></Topbar>
			{/* banner  */}
			<div className="w-full max-w-[1240px] px-5 mx-auto mt-[100px]">
				<div className="relative">
					<Image
						alt="Product-cover"
						src={
							"https://images.unsplash.com/photo-1716600650689-e3e69802078f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={1000}
						height={1000}
						className="w-full aspect-[16/8] object-cover object-center rounded-2xl"
					></Image>
				</div>
			</div>
			{/* content  */}
			<div className="w-full max-w-[1040px] mx-auto px-5">
				<Title className="text-[28px] mt-8">
					Movie Browser - TMDB API
				</Title>
				<SubLine className="mt-2">
					Visit Github:{" "}
					<a
						className="text-blue-500 hover:underline"
						href="https://github.com/namdang0219/browse-movies"
						target="_blank"
					>
						https://github.com/namdang0219/browse-movies
					</a>
				</SubLine>
				<p className="text-lg mt-4 leading-relaxed mb-4">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries.
				</p>
				<div className="slider flex items-center gap-5 mt-10 overflow-x-scroll rounded-xl">
					{Array(5)
						.fill(null)
						.map((item, index) => (
							<div key={index} className="relative shrink-0">
								<Image
									alt="slider-img"
									src={
										"https://images.unsplash.com/photo-1716681864605-e3ac39e9aea4?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									}
									width={1000}
									height={1000}
									className="w-[400px] aspect-video rounded-xl"
								></Image>
							</div>
						))}
				</div>
				<div className="">
					<ChildTitle className="mt-8 mb-4">Technique</ChildTitle>
					<div className="flex items-center gap-5">
						<ReactTech></ReactTech>
						<FirebaseTech></FirebaseTech>
					</div>
				</div>
				<div>
					<ChildTitle className="mt-8 mb-4">Feature</ChildTitle>
					<ul className="list-disc ml-8 leading-8">
						<li>Size: 10 people</li>
						<li>
							Target: Practice about Api and how to develop an
							React Application
						</li>
					</ul>
				</div>
				<div>
					<ChildTitle className="mt-8 mb-4">Infomation</ChildTitle>
					<ul className="list-disc ml-8 leading-8">
						<li>Size: 10 people</li>
						<li>
							Target: Practice about Api and how to develop an
							React Application
						</li>
					</ul>
				</div>
			</div>
      <Footer className="mt-28"></Footer>
		</div>
	);
};

export default ProductDetail;
