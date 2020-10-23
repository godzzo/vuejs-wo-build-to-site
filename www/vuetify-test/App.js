import VueRouter from 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.4.7/vue-router.esm.browser.js'

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: "/EditList", component: () => import("./pages/EditList.js") },
		{ path: "/CrudTable", component: () => import("./pages/CrudTable.js") },
		{ path: "/Sandra", component: () => import("./pages/Sandra.js") },
		{ path: "/People", component: () => import("./pages/People.js") }
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
			]
		};	
	}
});
