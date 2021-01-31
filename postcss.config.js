module.exports = () => ({
	plugins: {
		tailwindcss: {
			prefix: 'sgt-',
			corePlugins: {
				preflight: false,   
			},
			theme: {
				extend: {
					fontFamily: {
						sans: ['Verdana', 'sans-serif'],
					},
					colors: {
						'sglight': '#CfDEF5',
						'sgdark': '#666f7c',
					},
				}
			}
		},
		autoprefixer: {},
	}
});




