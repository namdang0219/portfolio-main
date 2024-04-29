import React from "react";

interface IButton {
	children: string;
	className?: string;
	width?: string;
	height?: string;
	black?: boolean;
}

const Button = ({ children, className }: IButton) => {
	return (
		<button
			className={`${className} w-[180px] h-[50px] sm:w-[120px] sm:h-[38px] flex items-center justify-center border border-black sm:border-[0.75px] text-[18px] sm:text-[14px]`}
		>
			{children}
		</button>
	);
};

export default Button;
