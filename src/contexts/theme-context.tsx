"use client";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { Slide, toast } from "react-toastify";

const ThemeContext = createContext<any>({});

const ThemeProvider = ({ children, ...props }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const docRef = document.documentElement;
		if (darkMode) {
			docRef.className = "dark";
		} else {
			docRef.className = "";
		}
	}, [darkMode]);
	const values = { darkMode, setDarkMode };
	return (
		<ThemeContext.Provider value={values} {...props}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (typeof context === "undefined")
		throw new Error("useTheme must be used in theme provider :)))");
	return context;
};

export { ThemeProvider, useTheme };
