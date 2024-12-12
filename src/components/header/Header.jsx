import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import navList from "./NavList";
import {
	Navbar,
	Typography,
	IconButton,
	Avatar,
} from "@material-tailwind/react";
import avatarImage from "../../assets/img/avatar.jpg";

function Header() {
	const [openNav, setOpenNav] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { isDarkMode, toggleTheme } = useTheme();
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
		};
	}, []);

	return (
		<>
			<Navbar
				ref={headerRef}
				className={`sticky top-0 z-50 h-max max-w-full border-none rounded-none px-4 dark:bg-gray-900 transition-all duration-300 
                ${isScrolled ? "py-1 lg:py-2 shadow-md" : "py-2 lg:py-4"}`}>
				<div className="flex items-center justify-between w-full text-gray-900 dark:text-white">
					<div className="flex items-center gap-4">
						<Avatar
							src={avatarImage}
							alt="avatar"
							size={isScrolled ? "sm" : "md"}
							className="border border-purple-500 transition-all duration-300"
						/>
						<Typography
							variant="h4"
							className={`font-bold cursor-pointer py-1.5 text-gray-900 hover:text-purple-600 transition-all duration-300 dark:text-white
                                ${isScrolled ? "text-2xl" : "text-3xl"}`}
						>
							<Link to="/"> Olha Mitsiuk</Link>
						</Typography>
					</div>
					<div className="flex items-center justify-between gap-4">
						<div className={`mr-4 hidden lg:block transition-all duration-300 ${isScrolled ? "scale-95" : "scale-100"}`}>
							{navList}
						</div>
						<i
							className={`fa-solid fa-circle-half-stroke text-gray-900 hover:text-purple-600 transition-all duration-300 cursor-pointer dark:text-white
                                ${isScrolled ? "text-base" : "text-lg"}`}
							onClick={toggleTheme}
						></i>
						<IconButton
							variant="text"
							className={`ml-auto text-gray-900 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden dark:text-white transition-all duration-300
                                ${isScrolled ? "h-5 w-5" : "h-6 w-6"}`}
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className={`${isScrolled ? "h-5 w-5" : "h-6 w-6"}`}
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`${isScrolled ? "h-5 w-5" : "h-6 w-6"}`}
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
			</Navbar>
			<div className={`fixed inset-0 z-40 lg:hidden ${openNav ? "block" : "hidden"}`}>
				<div className="fixed inset-0 bg-black/50" onClick={() => setOpenNav(false)} />
				<div className="fixed left-0 right-0 top-[53px] -mt-[3px] bg-white dark:bg-gray-900">
					<div className="p-4">
						{navList}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;