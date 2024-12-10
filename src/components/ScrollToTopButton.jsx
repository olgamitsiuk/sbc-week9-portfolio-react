import { useState, useEffect } from 'react';
import { IconButton } from "@material-tailwind/react";

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-20 right-4 z-[1000]">
			{isVisible && (
				<IconButton
					onClick={scrollToTop}
					className="bg-purple-700 hover:bg-purple-800 
            shadow-lg hover:shadow-xl transition-all duration-300 p-3
            dark:bg-purple-600 dark:hover:bg-purple-700"
				>
					<i className="fas fa-arrow-up text-white text-lg"></i>
				</IconButton>
			)}
		</div>
	);
}

export default ScrollToTopButton;