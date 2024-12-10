function SocialSidebar() {
	return (
		<div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white py-4 px-2 flex flex-col gap-2 rounded-lg shadow-lg z-10">
			<a
				href="https://www.linkedin.com/in/olha-mitsiuk/"
				target="_blank"
				rel="noopener noreferrer"
				className="p-2 hover:scale-110 hover:bg-purple-100 transition-all rounded-lg"
				aria-label="LinkedIn Profile"
			>
				<i className="fab fa-linkedin-in text-xl text-gray-800"></i>
			</a>
			<a
				href="https://github.com/olgamitsiuk/"
				target="_blank"
				rel="noopener noreferrer"
				className="p-2 hover:scale-110 hover:bg-purple-100 transition-all rounded-lg"
				aria-label="GitHub Profile"
			>
				<i className="fab fa-github text-xl text-gray-800"></i>
			</a>
			<a
				href="mailto:mitsyuk.olga@gmail.com"
				className="p-2 hover:scale-110 hover:bg-purple-100 transition-all rounded-lg"
				aria-label="Email Contact"
			>
				<i className="fas fa-envelope text-xl text-gray-800"></i>
			</a>
			<a
				href="tel:+447774159472"
				className="p-2 hover:scale-110 hover:bg-purple-100 transition-all rounded-lg"
				aria-label="Phone Contact"
			>
				<i className="fas fa-phone text-xl text-gray-800"></i>
			</a>
		</div>
	);
}

export default SocialSidebar;