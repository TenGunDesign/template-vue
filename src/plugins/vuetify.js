import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const options = {
	theme: {
		themes: {
			light: {
				primary: "#3DA3C4"
			}
		}
	},
	icons: {
		iconfont: 'mdi'
	}
};

export default new Vuetify(options);
