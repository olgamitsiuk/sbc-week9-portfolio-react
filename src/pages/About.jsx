import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { jobsData, educationData } from '../assets/data/experience';
import JourneySection from '../components/sections/JourneySection';
import ExperienceSection from '../components/sections/ExperienceSection';
import EducationSection from '../components/sections/EducationSection';

function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<div ref={ref} className="min-h-screen w-full px-4 py-16 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<JourneySection isInView={isInView} />
				<ExperienceSection isInView={isInView} jobsData={jobsData} />
				<EducationSection isInView={isInView} educationData={educationData} />
			</div>
		</div>
	);
}

export default About;