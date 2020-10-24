import VueRouter from 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.4.7/vue-router.esm.browser.js'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/EditList", component: () => import("./pages/EditList.js") },
		{ path: "/CrudTable", component: () => import("./pages/CrudTable.js") },
		{ path: "/Sandra", component: () => import("./pages/Sandra.js") },
		{ path: "/People", component: () => import("./pages/People.js") },
		{ path: "/Discover", component: () => import("./pages/Discover.js") },
		{ path: "/Calendar", component: () => import("./pages/Calendar.js") },
		{ path: "/Basic", component: () => import("./pages/Basic.js") }
	]
});

new Vue({
	router,
	el: '#app',
	vuetify: new Vuetify(),
	data () {
		return {
			drawer: null,
			menu: [
				{title: 'Home Page', link: '/', icon: 'mdi-home' },
				{title: 'EditList', link: '/EditList', icon: 'mdi-home' },
				{title: 'CrudTable', link: '/CrudTable', icon: 'mdi-home' },
				{title: 'Sandra', link: '/Sandra', icon: 'mdi-home' },
				{title: 'People', link: '/People', icon: 'mdi-home' },
				{title: 'Discover', link: '/Discover', icon: 'mdi-home' },
				{title: 'Calendar', link: '/Calendar', icon: 'mdi-home' },
				{title: 'Basic', link: '/Basic', icon: 'mdi-home' }
			]
		};	
	}
});
