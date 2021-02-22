import Vue from 'vue';
import router from './plugins/router';
import store from './plugins/store';
import vuetify from './plugins/vuetify';
import core from './plugins/core';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	core,
	render: h => h(App)
}).$mount('#app');
