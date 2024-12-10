import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import JourneyCard from "../cards/JourneyCard";

function JourneySection({ isInView }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.6 }}
			className="mb-24"
		>
			<Typography variant="h2" className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
				My Journey
			</Typography>
			<JourneyCard />
		</motion.div>
	);
}

export default JourneySection;