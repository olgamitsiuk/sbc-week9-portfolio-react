import { motion } from "framer-motion";
import { Card, CardBody } from "@material-tailwind/react";

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		scale: 0.95
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 12,
			duration: 0.6
		}
	}
};

function BaseCard({ children, className = "" }) {
	return (
		<motion.div
			variants={cardVariants}
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.2 }
			}}
		>
			<Card className={`h-full hover:shadow-lg transition-shadow bg-purple-700/10 dark:bg-purple-600/10 ${className}`}>
				<CardBody>
					{children}
				</CardBody>
			</Card>
		</motion.div>
	);
}

export default BaseCard;