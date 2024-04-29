import React from "react";

interface IInput {
	name: string;
	children: string;
	className?: string;
	type?: string;
	placeholder?: string;
}

const Input = ({
	children,
	name,
	type = "text",
	placeholder = "Type your input...",
}: IInput) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="font-medium text-[22px] sm:text-lg">
				{children}
			</label>
			<input
				type={type}
				id={name}
				autoComplete="off"
				placeholder={placeholder}
				className="outline-none block py-4 sm:py-3 sm:placeholder:text-[14px] bg-transparent border-b w-full border-b-subGray"
			/>
		</div>
	);
};

export default Input;
