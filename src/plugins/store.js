import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		productionMode: (process.env.NODE_ENV === "production"),
		contentParsed: false
	},
	mutations: {
		update(state, payload) {
			state[payload.property] = payload.data;
		}
	},
	actions: {
	},
	modules: {
	}
});

export default store;
