module.exports = {
	publicPath: "/",

	chainWebpack: config => {
		config.entry('app').prepend(`./src/assets/localization/${process.env.VUE_APP_BUILD_TARGET}.js`);
	},

	transpileDependencies: [
		'vuetify'
	],

	productionSourceMap: false
};
