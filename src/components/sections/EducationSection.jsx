import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import EducationCard from "../cards/EducationCard";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};

function EducationSection({ isInView, educationData }) {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,2fr] gap-8">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Typography variant="h2" className="text-4xl font-bold text-center lg:text-left text-gray-900 dark:text-gray-100">
						Education
					</Typography>
				</motion.div>
				<motion.div
					className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{educationData.map((edu) => (
						<EducationCard key={edu.title} {...edu} />
					))}
				</motion.div>
			</div>
		</div>
	);
}

export default EducationSection;