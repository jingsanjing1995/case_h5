import { login_path } from '../../api/api.js'
import { Toast } from 'vant'
import {
	getToken,
	setToken,
	removeToken,
	getUid,
	setUid,
	removeUid,
} from '@/utils/auth'
import { resetRouter } from '@/router'
// import router from '@/router'

const LOGIN = 'LOGIN' // 获取用户信息
const SetUserData = 'SetUserData' // 获取用户信息
const LOGOUT = 'LOGOUT' // 退出登录、清除用户数据
const USER_DATA = 'userDate' // 用户数据

export default {
	namespaced: true,
	state: {
		token: getToken() || '', // token
		uid: getUid() || '', // uid
		user: JSON.parse(localStorage.getItem(USER_DATA) || null), // 用户详情
	},
	mutations: {
		[LOGIN](state, data) {
			let userToken = data.data.serviceToken
			let uid = data.data.uid
			state.token = userToken
			state.uid = uid
			state.user = data.data
			setToken(userToken)
			setUid(uid)
			localStorage.setItem(USER_DATA, JSON.stringify(data.data))
		},

		[SetUserData](state, userData = {}) {
			state.user = userData
			localStorage.setItem(USER_DATA, JSON.stringify(userData))
		},
		[LOGOUT](state) {
			state.user = null
			state.token = null
			removeToken()
			removeUid()
			localStorage.removeItem(USER_DATA)
			resetRouter()
		},
	},
	actions: {
		async login(state, data) {
			debugger
			try {
				let res = await login_path({
					mobilePhone: data.loginInfo.mobilePhone,
					password: data.loginInfo.password,
				})
				console.log(res)
				state.commit(LOGIN, res)
				var toast = Toast({
					type: 'success',
					message: '登录成功',
					mask: true,
					forbidClick: true,
				})
				setTimeout(() => {
					toast.clear()
					debugger
					const redirect = data.$route.query.redirect || '/'
					data.$router.replace({
						path: redirect,
					})
				}, 1000)
			} catch (error) {
				console.log(error)
				Toast.fail(error.message)
			}
		},

        
	},
	getters: {
		token(state) {
			return state.token
		},
		uid(state) {
			return state.uid
		},
		user(state) {
			return state.user
		},
	},
}
