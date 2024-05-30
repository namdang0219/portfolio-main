"use client";
import Image from "next/image";
import React from "react";
import ChildTitle from "./title/ChildTitle";
import SubLine from "./subLine/SubLine";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface IPortfolioItem {
	item: {
		thumb: string;
		title?: string;
		technique: string;
		desc?: string;
		time: string;
	};
	index: number
}

const PortfolioItem = ({
	item: { thumb, title, technique, desc, time }, index
}: IPortfolioItem) => {
	const {push} = useRouter()
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
			<div onClick={() => push('/movie')} className="bg-white dark:bg-itemBgDark shadow-md group sm:aspect-square sm:flex sm:flex-col cursor-pointer">
				<div className="relative h-[254px] sm:flex-1 overflow-hidden">
					<Image
						src={thumb}
						alt="product-thumb"
						fill
						className="object-cover object-center group-hover:scale-[1.03] transition-all"
					></Image>
				</div>
				<div className="p-4">
					<div className="flex items-center justify-between">
						<ChildTitle>{title}</ChildTitle>
						<span className="text-sm font-normal text-subGray">
							{time}
						</span>
					</div>
					<SubLine className="text-base dark:text-gray-400">{technique}</SubLine>
					<p className="text-base sm:mt-1 font-light line-clamp-2">
						{desc}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioItem;
