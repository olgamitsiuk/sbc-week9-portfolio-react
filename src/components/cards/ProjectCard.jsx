import React from "react";
import { motion } from "framer-motion";
import { Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, imageUrl, repoUrl, liveUrl, technologies }) => {
	const buttonClasses = "flex-1 h-10 rounded-lg text-center transition-colors flex items-center justify-center gap-2 text-sm";
	const primaryButtonClasses = `${buttonClasses} bg-primary-600 text-white dark:bg-primary-500 dark:hover:bg-primary-600 hover:bg-primary-700`;
	const secondaryButtonClasses = `${buttonClasses} bg-transparent text-white border border-white dark:border-dark-100 hover:bg-white/10`;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3 }}
			className="w-full group"
		>
			<Card className="relative overflow-hidden rounded-xl bg-white dark:bg-dark-800 shadow-lg h-[420px] cursor-pointer hover:shadow-xl">
				<img
					src={imageUrl || "/api/placeholder/600/400"}
					alt={title}
					className="h-full w-full object-cover"
				/>

				<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
					<h3 className="text-2xl font-semibold text-white">{title}</h3>
				</div>

				<div className="absolute inset-0 bg-black/80 dark:bg-dark-800/90 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
					<div className="h-full flex flex-col p-8">
						<p className="text-gray-200 dark:text-dark-100 text-lg leading-relaxed mb-8 transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100">
							{description}
						</p>

						<div className="flex flex-wrap gap-2 mb-auto transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-150">
							{technologies.map((tech, index) => (
								<span
									key={index}
									className="text-sm px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 dark:bg-primary-900/20 dark:text-primary-200"
								>
									{tech}
								</span>
							))}
						</div>

						<div className="flex gap-4 mt-6 transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-200">
							{liveUrl ? (
								<>
									<a
										href={liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className={primaryButtonClasses}
									>
										<span>Live Demo</span>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</a>
									{typeof repoUrl === 'string' ? (
										<a
											href={repoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={secondaryButtonClasses}
										>
											<FontAwesomeIcon icon={faGithub} size="lg" />
											<span>View Code</span>
										</a>
									) : (
										<div className="flex-1 flex gap-2">
											<a
												href={repoUrl.frontend}
												target="_blank"
												rel="noopener noreferrer"
												className={secondaryButtonClasses}
											>
												<FontAwesomeIcon icon={faGithub} size="lg" />
												<span>Frontend</span>
											</a>
											<a
												href={repoUrl.backend}
												target="_blank"
												rel="noopener noreferrer"
												className={secondaryButtonClasses}
											>
												<FontAwesomeIcon icon={faGithub} size="lg" />
												<span>Backend</span>
											</a>
										</div>
									)}
								</>
							) : (
								<a
									href={repoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={`w-full ${secondaryButtonClasses}`}
								>
									<FontAwesomeIcon icon={faGithub} size="lg" />
									<span>View Code</span>
								</a>
							)}
						</div>
					</div>
				</div>
			</Card>
		</motion.div>
	);
};

export default ProjectCard;