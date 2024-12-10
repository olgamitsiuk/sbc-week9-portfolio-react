import { Typography } from "@material-tailwind/react";
import BaseCard from "./BaseCard";

function JourneyCard() {
	return (
		<BaseCard className="w-full">
			<div className="space-y-8">
				<div>
					<Typography className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						My path to web development has been quite the adventure! I started out as an
						Aerospace Engineer, which might sound pretty different from what I do now. But
						you'd be surprised how well problem-solving skills translate across fields! This
						unique background helps me approach coding challenges from different angles.
					</Typography>
				</div>

				<div>
					<Typography variant="h3" className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
						What I Love to Do
					</Typography>
					<Typography className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
						I'm all about creating web experiences that not only look great but also work
						smoothly.
					</Typography>
					<div className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						My toolbox includes:
						<div className="space-y-2 mt-4">
							<p>React and Svelte for building dynamic user interfaces</p>
							<p>HTML5, CSS3, and JavaScript to bring designs to life</p>
							<p>TypeScript for adding that extra layer of reliability to my code</p>
						</div>
					</div>
				</div>

				<div>
					<Typography variant="h3" className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
						Always Learning
					</Typography>
					<Typography className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
						The tech world never stands still, and neither do I! I'm currently diving deeper into
						Full Stack development through a bootcamp at Step8Up Academy. It's exciting to
						expand my skills and see how front-end and back-end pieces fit together.
					</Typography>
				</div>
			</div>
		</BaseCard>
	);
}

export default JourneyCard;