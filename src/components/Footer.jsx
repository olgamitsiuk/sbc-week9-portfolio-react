import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { pages } from "../assets/data/pages";

const currentYear = new Date().getFullYear();

function Footer() {
	return (
		<footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 dark:border-gray-800 p-6 text-center md:justify-between bg-white dark:bg-gray-900">
			<Typography className="font-normal text-gray-900 dark:text-gray-200">
				&copy; {currentYear} Olha Mitsiuk
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				{pages.map(({ name, to }) => (
					<li key={name}>
						<Typography
							className="font-normal text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
						>
							<Link to={to}>{name}</Link>
						</Typography>
					</li>
				))}
			</ul>
		</footer>
	);
}

export default Footer;