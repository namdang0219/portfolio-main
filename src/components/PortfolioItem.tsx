import Image from "next/image";
import React from "react";
import ChildTitle from "./title/ChildTitle";
import SubLine from "./subLine/SubLine";

interface IPortfolioItem {
	item: {
		thumb: string;
		title?: string;
		technique: string;
		desc?: string;
		time: string;
	};
}

const PortfolioItem = ({
	item: { thumb, title, technique, desc, time },
}: IPortfolioItem) => {
	return (
		<div className="bg-white shadow-md group sm:aspect-square sm:flex sm:flex-col cursor-pointer">
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
				<SubLine className="text-base">{technique}</SubLine>
				<p className="text-base sm:mt-1 font-light line-clamp-2">{desc}</p>
			</div>
		</div>
	);
};

export default PortfolioItem;
