import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import(/* webpackChunkName: "view-Home" */ '../views/Home.vue')
		},
		{
			path: '/gettingstarted',
			name: 'GettingStarted',
			component: () => import(/* webpackChunkName: "view-GettingStarted" */ '../views/GettingStarted.vue')
		}
	]
});

export default router;
