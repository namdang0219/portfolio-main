import React, { ReactNode } from "react";

const TechItem = ({ children }: { children: ReactNode }) => {
	return <div className="px-6 py-2 rounded-lg border-gray-300 border flex items-center gap-2">{children}</div>;
};

export default TechItem;
