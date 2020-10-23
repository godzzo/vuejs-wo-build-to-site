/**
 * Based on https://forum.vuejs.org/t/how-to-load-vue-template-directly-in-browser/1913/16 and https://sssassociates.org/app/main.js
 * 
 */
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
import VueRouter from 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.4.7/vue-router.esm.browser.js'

import Test from './components/Test.js'


Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/about",
			component: () => import("./pages/About.js")
		}
	]
});

new Vue({
	router,
	components: {
		Test
	},
	data () { 
		return {
			message: 'hello world'
		}
	}
}).$mount('#app');
