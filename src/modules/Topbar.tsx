"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";
import { useParams } from "next/navigation";
import { Slide, toast } from "react-toastify";

const MenuIconStyles = styled.div`
	position: relative;
	margin-right: 20px;
	.center-position {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.sample-menu-button {
		width: 50px;
		height: 40px;
		transition: all 0.3s ease-in-out;
	}
	.sample-menu-icon {
		position: absolute;
		top: 50%;
		left: 20%;
		height: 2px;
		margin-top: -2px;
		right: 0;
		width: 60%;
	}
	.sample-menu-icon::before,
	.sample-menu-icon::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
	}
	.sample-menu-icon::before {
		top: -10px;
	}
	.sample-menu-icon::after {
		bottom: -10px;
	}
	.sample-menu-icon,
	.sample-menu-icon::before,
	.sample-menu-icon::after {
		background-color: white;
		transition: all 0.3s ease-in-out;
	}
	.sample-menu-button.active .sample-menu-icon {
		left: 10%;
		width: 80%;
		background-color: transparent;
	}
	.sample-menu-button.active .sample-menu-icon::before,
	.sample-menu-button.active .sample-menu-icon::after {
		top: 50%;
		margin-top: -2px;
	}
	.sample-menu-button.active .sample-menu-icon::before {
		transform: rotate(45deg);
	}
	.sample-menu-button.active .sample-menu-icon::after {
		transform: rotate(-45deg);
	}

	.sample-menu-icon2 {
		position: absolute;
		top: 50%;
		left: 20%;
		height: 2px;
		margin-top: -2px;
		right: 0;
		width: 60%;
	}
	.sample-menu-icon2::before,
	.sample-menu-icon2::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
	}
	.sample-menu-icon2::before {
		top: -10px;
	}
	.sample-menu-icon2::after {
		bottom: -10px;
	}
	.sample-menu-icon2,
	.sample-menu-icon2::before,
	.sample-menu-icon2::after {
		background-color: black;
		transition: all 0.3s ease-in-out;
	}
	.sample-menu-button.active .sample-menu-icon2 {
		left: 10%;
		width: 80%;
		background-color: transparent;
	}
	.sample-menu-button.active .sample-menu-icon2::before,
	.sample-menu-button.active .sample-menu-icon2::after {
		top: 50%;
		margin-top: -2px;
	}
	.sample-menu-button.active .sample-menu-icon2::before {
		transform: rotate(45deg);
	}
	.sample-menu-button.active .sample-menu-icon2::after {
		transform: rotate(-45deg);
	}
`;

const Topbar = ({ className }: { className?: string }) => {
	const [topbarColor, setTopbarColor] = useState<boolean>(false);
	const [menuActive, setMenuActive] = useState<boolean>(false);
	const params = useParams();
	const { setDarkMode, darkMode } = useTheme();
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setTopbarColor(true);
			} else {
				setTopbarColor(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
	}, []);

	function handleDarkMode() {
		const options: any = {
			position: "top-center",
			autoClose: 1000,
			hideProgressBar: true,
			transition: Slide,
		};
		if (darkMode == false) {
			setDarkMode(true);
			toast.success("ダークモードに変換しました！", {
				...options,
				theme: "dark",
			});
		} else {
			setDarkMode(false);
			toast.success("ライトモードに変換しました！", {
				...options,
				theme: "light",
			});
		}
	}

	function handleTopbarColor() {
		if (!params.slug) {
			if (topbarColor) {
				return "bg-white dark:bg-gray-800 text-black dark:text-textDark  shadow-md";
			} else {
				return " text-white bg-transparent";
			}
		} else {
			return "bg-white dark:bg-gray-800 text-black dark:text-textDark shadow-md";
		}
	}

	return (
		<div
			className={`${handleTopbarColor()} ${className} transition-all  fixed z-50 w-full top-0`}
		>
			<div className="flex items-center justify-between w-full max-w-[1240px]  px-5 mx-auto py-3">
				<Link
					href={"/#home"}
					className="text-[30px] sm:text-[22px] font-bold"
				>
					Portfolio
				</Link>
				<Nav className="sm:hidden"></Nav>
				{/* Icon dark mode  */}
				<div
					className={`sm:hidden  cursor-pointer ${!topbarColor && !params.slug && 'hover:bg-gray-700'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-all p-2 rounded-full`}
					onClick={() => handleDarkMode()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={30}
						height={30}
						viewBox="0 0 24 24"
					>
						<g fill="currentColor" fillOpacity={0}>
							<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
								<animate
									fill="freeze"
									attributeName="fill-opacity"
									begin="0.7s"
									dur="0.4s"
									values="0;1"
								></animate>
							</path>
							<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
								<animate
									fill="freeze"
									attributeName="fill-opacity"
									begin="1.1s"
									dur="0.4s"
									values="0;1"
								></animate>
							</path>
						</g>
						<path
							fill="none"
							stroke="currentColor"
							strokeDasharray={56}
							strokeDashoffset={56}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
						>
							<animate
								fill="freeze"
								attributeName="stroke-dashoffset"
								dur="0.6s"
								values="56;0"
							></animate>
						</path>
					</svg>
				</div>

				{/* Menu Icon in mobile screen  */}
				<MenuIconStyles
					onClick={() => setMenuActive(!menuActive)}
					className="hidden sm:block"
				>
					<div
						className={`sample-menu-button center-position ${
							menuActive && "active"
						}`}
					>
						<div
							className={`${
								topbarColor
									? "sample-menu-icon2"
									: "sample-menu-icon"
							}`}
						></div>
					</div>
				</MenuIconStyles>
			</div>
		</div>
	);
};

export default Topbar;
