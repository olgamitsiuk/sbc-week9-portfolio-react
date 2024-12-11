import { Typography, Button } from "@material-tailwind/react";
import SocialSidebar from "../SocialSidebar";
import CV from "../../assets/Olha_Mitsiuk_CV.pdf";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import avatarImage from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";

function Hero() {
	const handleDownloadCV = () => {
		const link = document.createElement('a');
		link.href = CV;
		link.download = 'Olha_Mitsiuk_CV.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="min-h-[calc(100vh-4rem)] relative">
			<BackgroundBeamsWithCollision className="absolute inset-0">
				<SocialSidebar />
			</BackgroundBeamsWithCollision>

			<div className="relative h-full flex items-center">
				<div className="max-w-7xl mx-auto w-full py-8 sm:py-12 px-8 sm:px-16 lg:px-20">
					<div className="flex flex-col lg:flex-row items-center gap-8 ml-8 sm:ml-12">
						<motion.div
							className="lg:flex-1 flex justify-center items-center order-first lg:order-last mb-6 lg:mb-0"
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
						>
							<div className="relative w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
								<img
									src={avatarImage}
									alt="Olha Mitsiuk"
									className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-500/20" />
							</div>
						</motion.div>

						<motion.div
							className="lg:flex-1 text-center lg:text-left"
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
						>
							<Typography variant="h1" className="mb-6 sm:mb-8">
								<div className="flex flex-col items-center lg:items-start">
									<span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
										HEY, I'M{" "}
									</span>
									<div className="relative">
										<span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-pink-500 text-transparent bg-clip-text dark:from-purple-400 dark:via-pink-300 dark:to-pink-300">
											OLHA MITSIUK
										</span>
									</div>
								</div>
							</Typography>

							<Typography
								variant="lead"
								className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-8 sm:mb-12 max-w-4xl"
							>
								A Result-Oriented Frontend Developer based in Staines, Surrey
							</Typography>

							<motion.div
								className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6, duration: 0.8 }}
							>
								<motion.div
									whileHover={{ y: -2 }}
									transition={{ type: "spring", stiffness: 300 }}
									className="flex-1 sm:flex-initial"
								>
									<Link to="/projects">
										<Button
											size="lg"
											className="w-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors px-4 sm:px-6"
										>
											PROJECTS
										</Button>
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ y: -2 }}
									transition={{ type: "spring", stiffness: 300 }}
									className="flex-1 sm:flex-initial"
								>
									<Button
										size="lg"
										onClick={handleDownloadCV}
										className="w-full bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-400 border border-purple-700 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors px-4 sm:px-6"
									>
										DOWNLOAD CV
									</Button>
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;