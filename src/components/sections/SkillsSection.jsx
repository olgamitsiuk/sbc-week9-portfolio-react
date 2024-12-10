import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData } from '../../assets/data/skills';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3
		}
	}
};

const categoryVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1
		}
	}
};

const skillVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.8
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 20
		}
	}
};

const SkillsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section ref={ref} className="w-full py-16 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
					initial={{ opacity: 0, y: -20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
					transition={{ duration: 0.6 }}
				>
					Tech Stack & Skills
				</motion.h2>

				<motion.div
					className="space-y-8 flex flex-col items-center"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					{skillsData.map((category) => (
						<motion.div
							key={category.category}
							className="w-full flex flex-col items-center"
							variants={categoryVariants}
						>
							<h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400 text-center">
								{category.category}
							</h3>
							<motion.div
								className="flex flex-wrap justify-center gap-3"
								variants={categoryVariants}
							>
								{category.skills.map((skill) => (
									<motion.span
										key={skill}
										className="px-4 py-2 bg-purple-700 dark:bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors cursor-default"
										variants={skillVariants}
										whileHover={{
											y: -5,
											scale: 1.05,
											transition: { type: "spring", stiffness: 300 }
										}}
									>
										{skill}
									</motion.span>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;