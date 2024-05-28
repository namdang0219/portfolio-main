import Link from "next/link";
import React from "react";

interface INav {
	className?: string;
}

const Nav = ({ className }: INav) => {
	return (
		<div className={`flex items-center justify-center space-x-8 ${className}`}>
			{navLinks.map((item) => (
				<Link
					key={item.id}
					href={item.href}
					className="font-semibold hover:underline"
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

const navLinks = [
	{
		id: 1,
		name: "HOME",
		href: "/#home",
	},
	{
		id: 2,
		name: "ABOUT",
		href: "/#about",
	},
	{
		id: 3,
		name: "SERVICE",
		href: "/#service",
	},
	{
		id: 4,
		name: "EDUCATION",
		href: "/#education",
	},
	{
		id: 5,
		name: "WORK",
		href: "/#work",
	},
	{
		id: 6,
		name: "CONTACT",
		href: "#contact",
	},
];

export default Nav;
