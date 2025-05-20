/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#E8F0E9",
					100: "#C5D9C7",
					200: "#9FC0A3",
					300: "#78A77E",
					400: "#5A9462",
					500: "#3D8046",
					600: "#2D6135",
					700: "#194923",
					800: "#0E3015",
					900: "#051A09",
				},
				secondary: {
					50: "#FEF8EB",
					100: "#FCEBC8",
					200: "#FADDA1",
					300: "#F8CF79",
					400: "#F7C55B",
					500: "#F5A623",
					600: "#DF8F10",
					700: "#B2720D",
					800: "#855509",
					900: "#593A06",
				},
				accent: {
					50: "#FCEDEE",
					100: "#F9CED1",
					200: "#F5A8AF",
					300: "#F1838C",
					400: "#EE6873",
					500: "#E63946",
					600: "#D12232",
					700: "#A71B28",
					800: "#7D141E",
					900: "#530D14",
				},
				success: {
					500: "#4CAF50",
				},
				warning: {
					500: "#FF9800",
				},
				error: {
					500: "#F44336",
				},
				neutral: {
					50: "#F5F5F5",
					100: "#E9E9E9",
					200: "#D9D9D9",
					300: "#C4C4C4",
					400: "#9D9D9D",
					500: "#7B7B7B",
					600: "#555555",
					700: "#434343",
					800: "#262626",
					900: "#000000",
				},
			},
			fontFamily: {
				sans: ["var(--font-montserrat)", "sans-serif"],
				serif: ["var(--font-playfair)", "serif"],
				body: ["var(--font-opensans)", "sans-serif"],
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			animation: {
				"bounce-slow": "bounce 3s infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"pattern-dots": 'url("/patterns/dots.svg")',
				"pattern-leaves": 'url("/patterns/leaves.svg")',
			},
			boxShadow: {
				"inner-lg": "inset 0 2px 15px 0 rgba(0, 0, 0, 0.05)",
			},
		},
	},
	plugins: [],
};
