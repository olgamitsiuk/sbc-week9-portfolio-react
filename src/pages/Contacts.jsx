import { useState } from 'react';
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

function Contacts() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			name: '',
			email: '',
			message: ''
		});
	};

	return (
		<div className="min-h-screen w-full px-4 py-16 bg-white dark:bg-gray-900">
			<div className="max-w-3xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<Typography variant="h2" className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
						Get in Touch
					</Typography>
					<Typography className="text-lg text-gray-700 dark:text-gray-300">
						Have a question or want to work together? Feel free to reach out!
					</Typography>
				</motion.div>

				<motion.form
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					<div>
						<Typography variant="h6" className="mb-2 text-gray-900 dark:text-white">
							Name
						</Typography>
						<Input
							id="name"
							type="text"
							placeholder="Your name"
							value={formData.name}
							onChange={handleChange}
							className="w-full !border-gray-300 focus:!border-purple-500 dark:!border-gray-600 dark:focus:!border-purple-400 text-gray-900 dark:text-white"
							labelProps={{
								className: "hidden"
							}}
							required
						/>
					</div>

					<div>
						<Typography variant="h6" className="mb-2 text-gray-900 dark:text-white">
							Email
						</Typography>
						<Input
							id="email"
							type="email"
							placeholder="your.email@example.com"
							value={formData.email}
							onChange={handleChange}
							className="w-full !border-gray-300 focus:!border-purple-500 dark:!border-gray-600 dark:focus:!border-purple-400 text-gray-900 dark:text-white"
							labelProps={{
								className: "hidden"
							}}
							required
						/>
					</div>

					<div>
						<Typography variant="h6" className="mb-2 text-gray-900 dark:text-white">
							Message
						</Typography>
						<Textarea
							id="message"
							placeholder="Your message"
							value={formData.message}
							onChange={handleChange}
							className="w-full !border-gray-300 focus:!border-purple-500 dark:!border-gray-600 dark:focus:!border-purple-400 text-gray-900 dark:text-white"
							rows={6}
							required
						/>
					</div>

					<Button
						type="submit"
						className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
						size="lg"
					>
						Send Message
					</Button>
				</motion.form>
			</div>
		</div>
	);
}

export default Contacts;