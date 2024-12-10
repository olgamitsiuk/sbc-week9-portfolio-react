import { NavLink } from "react-router-dom";
import { pages } from "../../assets/data/pages";
import { Typography } from "@material-tailwind/react";

const navList = (
	<ul className="text-gray-900 dark:text-gray-100 mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
		{pages.map(({ name, to }) => (
			<Typography
				key={name}
				as="li"
				variant="medium"
				className="p-1 font-bold"
			>
				<NavLink
					to={to}
					className={({ isActive }) => `
            transition-all duration-300 border-b-2
            ${isActive
							? "text-primary-600 dark:text-primary-400 border-primary-600 dark:border-primary-400"
							: "hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 border-transparent"
						}`}
				>
					{name}
				</NavLink>
			</Typography>
		))}
	</ul>
);

export default navList;