import { Typography } from "@material-tailwind/react";
import BaseCard from "./BaseCard";

function ExperienceCard({ company, title, period }) {
	return (
		<BaseCard>
			<Typography variant="h3" className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
				{company}
			</Typography>
			<Typography variant="h4" className="text-xl mb-4 text-gray-900 dark:text-gray-100">
				{title}
			</Typography>
			<Typography variant="paragraph" className="text-gray-700 dark:text-gray-300">
				{period}
			</Typography>
		</BaseCard>
	);
}

export default ExperienceCard;