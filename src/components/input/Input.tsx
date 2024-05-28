import { motion } from "framer-motion";
import React from "react";

interface IInput {
	data: {
		name: string;
		label: string;
		className?: string;
		type?: string;
		placeholder?: string;
	};
	index: number;
}

const Input = ({
	data: { label, name, type = "text", placeholder = "Type your input..." },
	index,
}: IInput) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 20, scale: 1 }}
			whileInView={{
				opacity: 1,
				translateY: 0,
				scale: 1,
				rotate: 0,
				transition: {
					delay: index * 0.2,
					duration: 0.4,
				},
			}}
		>
			<div className="mb-4">
				<label
					htmlFor={name}
					className="font-medium text-[22px] sm:text-lg"
				>
					{label}
				</label>
				<input
					type={type}
					id={name}
					autoComplete="off"
					placeholder={placeholder}
					className="outline-none block py-4 sm:py-3 sm:placeholder:text-[14px] bg-transparent border-b w-full border-b-subGray"
				/>
			</div>
		</motion.div>
	);
};

export default Input;
