import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/login.vue'
import CaseInfo from '../views/caseInfo/caseInfo.vue'
import CaseEudit from '../views/caseEudit/caseEudit.vue'
import CaseContentInfo from '../views/caseContentInfo/caseContentInfo.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: '登录',
			keepAlive: true,
		},
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: '首页',
			keepAlive: true,
		},
	},
	{
		path: '/caseInfo',
		name: 'caseInfo',
		component: CaseInfo,
		meta: {
			title: '案件详情',
			keepAlive: true,
		},
	},
	{
		path: '/caseEudit',
		name: 'caseEudit',
		component: CaseEudit,
		meta: {
			title: '案件审核',
			keepAlive: false,
		},
	},
	{
		path: '/caseContentInfo',
		name: 'caseContentInfo',
		component: CaseContentInfo,
		meta: {
			title: '案件内容',
			keepAlive: false,
		},
	},
]

const router = new VueRouter({
	mode: 'history', // require service support
	routes,
})

export default router
