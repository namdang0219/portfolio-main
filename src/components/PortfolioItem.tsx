"use client";
import Image from "next/image";
import React from "react";
import ChildTitle from "./title/ChildTitle";
import SubLine from "./subLine/SubLine";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface IPortfolioItem {
	item: {
		banner: string;
		titleLarge?: string;
		techniques: string[];
		desc?: string;
		time: string;
		slug: string;
	};
	index: number;
}

const PortfolioItem = ({
	item: { banner, titleLarge, techniques, desc, time, slug },
	index,
}: IPortfolioItem) => {
	const { push } = useRouter();
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 80, scale: 0.8 }}
			whileInView={{
				opacity: 1,
				translateY: 0,
				scale: 1,
				rotate: 0,
				transition: {
					delay: index * 0.1,
					duration: 1,
				},
			}}
		>
			<div
				onClick={() => push(`/product/${slug}`)}
				className="bg-white rounded-md overflow-hidden dark:bg-itemBgDark shadow-md group sm:flex sm:flex-col cursor-pointer"
			>
				<div className="relative overflow-hidden">
					<Image
						src={banner}
						alt="product-thumb"
						width={600}
						height={600}
						className="object-cover w-full object-center aspect-[16/8] group-hover:scale-[1.03] transition-all"
					></Image>
				</div>
				<div className="p-4">
					<div className="flex items-center justify-between">
						<ChildTitle className="line-clamp-1">{titleLarge}</ChildTitle>
						<span className="text-sm font-normal text-subGray">
							{time}
						</span>
					</div>
					<SubLine className="text-base dark:text-gray-400">
						{techniques.join(", ")}
					</SubLine>
					<p className="text-base sm:mt-1 font-light line-clamp-2">
						{desc}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioItem;
