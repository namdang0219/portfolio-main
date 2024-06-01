import Topbar from "@/modules/Topbar";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Topbar></Topbar>
			<div>{children}</div>
		</>
	);
};

export default MainLayout;
