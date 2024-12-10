import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../cards/ProjectCard";
import { featuredRepoIds, projectDetails } from '../../assets/data/projects';
import imgProject from '../../assets/img/web-development.jpg';

export const ProjectsSection = () => {
	// first 6 projects
	const projects = featuredRepoIds.slice(0, 6).map(id => ({
		title: projectDetails[id].title,
		description: projectDetails[id].description,
		imageUrl: imgProject, // temporary solution
		repoUrl: id === 'music-shop' ? projectDetails[id].github : projectDetails[id].github,
		liveUrl: projectDetails[id].homepage,
		technologies: projectDetails[id].technologies
	}));

	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Projects</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						Check out some of my recent work
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;