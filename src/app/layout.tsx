import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/theme-context";
import MainLayout from "@/components/layouts/MainLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
				<ToastContainer  />
				<ThemeProvider>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
