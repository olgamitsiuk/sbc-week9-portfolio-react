import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import { featuredRepoIds, projectDetails } from '../assets/data/projects';
import imgProject from '../assets/img/web-development.jpg';

const Projects = () => {
	const projects = featuredRepoIds.map(id => ({
		title: projectDetails[id].title,
		description: projectDetails[id].description,
		imageUrl: imgProject,
		repoUrl: id === 'music-shop' ? projectDetails[id].github : projectDetails[id].github,
		liveUrl: projectDetails[id].homepage,
		technologies: projectDetails[id].technologies
	}));

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold mb-4 dark:text-white">My Projects</h1>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;