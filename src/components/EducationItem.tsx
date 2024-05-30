"use client";
import React from "react";
import { motion } from "framer-motion";

interface EducationItemProps {
	data: {
		time: string;
		content: string;
		desc: string;
		borderColor?: string;
	};
	index: number;
}

const EducationItem = ({
	data: { time, content, desc },
	index,
}: EducationItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 50 }}
			whileInView={{
				opacity: 1,
				translateY: 0,
				transition: {
					delay: index * 0.1,
					duration: 0.8,
				},
			}}
		>
			<div
				className={`border-l-blue-400 px-8 py-4 border-l-4  bg-white dark:bg-itemBgDark shadow-sm rounded-sm w-full h-full`}
			>
				<span className="text-gray-400 dark:text-gray-300 tracking-wide mb-1 block ">
					{time}
				</span>
				<h6 className="text-[20px] mb-1 tracking-widest dark:text-gray-100 font-semibold">
					{content}
				</h6>
				<p className="text-gray-500 leading-relaxed dark:text-gray-300 dark:opacity-90">
					{desc}
				</p>
			</div>
		</motion.div>
	);
};

export default EducationItem;
