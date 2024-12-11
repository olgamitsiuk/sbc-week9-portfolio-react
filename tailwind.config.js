import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
				},
				dark: {
					100: '#E0E1E2',
					200: '#C2C3C4',
					300: '#A3A5A7',
					400: '#858789',
					500: '#66686B',
					600: '#4D4F51',
					700: '#343638',
					800: '#1B1D1E',
					900: '#020405',
					DEFAULT: '#1B1D1E',
				}
			},
			backgroundColor: {
				dark: {
					primary: '#1B1D1E',
					secondary: '#2D2F31',
					accent: '#a855f7',
				}
			},
			textColor: {
				dark: {
					primary: '#FFFFFF',
					secondary: '#E0E1E2',
					accent: '#a855f7',
				}
			}
		}
	},
	plugins: [],
});