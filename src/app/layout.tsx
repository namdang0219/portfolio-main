import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "@/contexts/theme-context";
import Topbar from "@/modules/Topbar";
import { useParams } from "next/navigation";
import MainLayout from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MeowCopter🍓",
	description: "Created by NamDang 2024",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body id="home" className={inter.className}>
				<ThemeProvider>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
