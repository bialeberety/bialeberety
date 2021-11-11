const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			orange: "#F57F72",
			red: "#CE125C",
			brown: "#944A1A",
			beige: {
				light: "#F6F3EE",
				DEFAULT: "#F5EAE1",
				dark: "#FFD4AB",
			},
			purple: {
				DEFAULT: "#BC4E82",
				dark: "#3D1144",
			},
			green: {
				light: "#B7DA6B",
				DEFAULT: "#47894E",
				dark: "#B7DA6B",
			},
			spacing: {
				xxl: "110px",
				xl: "68px",
				l: "42px",
				m: "26px",
				s: "16px",
				xs: "10px",
				xxs: "6px",
			},
		},
		extend: {},
	},
	plugins: [],
};

module.exports = config;
