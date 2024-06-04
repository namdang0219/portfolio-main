import Topbar from "@/modules/Topbar";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MainLayout = ({ children }: { children: ReactNode }) => {
	// console.log(document)
	return (
		<>
			{/* <ModalBase></ModalBase> */}

			<Topbar></Topbar>
			<div>{children}</div>
		</>
	);
};

// function ModalBase() {
  
// 	return createPortal(
// 		<div className="fixed top-0 left-0 z-[1000] inset-0 text-emerald-400 bg-black bg-opacity-40">
// 			<div className="absolute flex items-center justify-center w-[60%] aspect-[16/10] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
// 				<p>Modal</p>
// 			</div>
// 		</div>,
// 	 document.querySelector('body')
// 	);
// }

export default MainLayout;
