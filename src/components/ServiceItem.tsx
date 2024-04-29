import React from "react";
import ChildTitle from "./title/ChildTitle";
import Image from "next/image";

interface ServiceItemType {
	item: {
		serviceName: string;
		desc: string;
    imagePath: string
	};
}

const ServiceItem = ({ item: { serviceName, desc, imagePath } }: ServiceItemType) => {
	return (
		<section className="p-7 bg-white shadow-md">
			<div className="h-[120px] relative mb-6 flex items-center justify-center">
        <Image src={imagePath} fill alt={serviceName} className="object-contain"></Image>
      </div>
			<ChildTitle className="mb-2">{serviceName}</ChildTitle>
			<p className="font-light sm:text-sm text-base text-subGray tracking-wider leading-relaxed">
				{desc}
			</p>
		</section>
	);
};

export default ServiceItem;
