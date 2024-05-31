import React from "react";

interface IButton {
	children: string;
	className?: string;
	width?: string;
	height?: string;
	black?: boolean;
	onClick?: () => void;
}

const Button = ({ children, className, onClick }: IButton) => {
	return (
		<button
			onClick={onClick}
			className={`${className} hover:opacity-60 transition-all w-[180px] h-[50px] sm:w-[120px] sm:h-[38px] flex items-center justify-center border border-black dark:border-gray-400 sm:border-[0.75px] text-[18px] sm:text-[14px]`}
		>
			{children}
		</button>
	);
};

export default Button;
