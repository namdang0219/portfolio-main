"use client";
import React from "react";
import ChildTitle from "./title/ChildTitle";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItemType {
	item: {
		serviceName: string;
		desc: string;
		imagePath: string;
	};
	index: number;
}

const ServiceItem = ({
	item: { serviceName, desc, imagePath },
	index,
}: ServiceItemType) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 80, scale: 0.8 }}
			whileInView={{
				opacity: 1,
				translateY: 0,
				scale: 1,
				transition: {
					delay: index * 0.1,
					duration: 0.6,
				},
			}}
		>
			<section className="p-7 bg-white shadow-md dark:bg-itemBgDark">
				<div className="relative mb-6 flex items-center justify-center">
					<Image
						src={imagePath}
						alt={serviceName}
						className="object-contain h-[120px] w-auto dark:invert"
						width={200}
						height={200}
					></Image>
				</div>
				<ChildTitle className="mb-2">{serviceName}</ChildTitle>
				<p className="font-light sm:text-sm text-base text-subGray dark:text-gray-300 tracking-wider leading-relaxed">
					{desc}
				</p>
			</section>
		</motion.div>
	);
};

export default ServiceItem;
