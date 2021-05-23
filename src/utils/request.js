import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
import { getToken, getUid } from '@/utils/auth'
import API from '@/utils/config'

// create an axios instance
const service = axios.create({
	baseURL: API.BASE_URL, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 10000, // request timeout
})

// request interceptor
service.interceptors.request.use(
	(config) => {
		// do something before request is sent
		if (store.getters['user/token'] && store.getters['user/uid']) {
			config.headers['Token'] = getToken()
			config.headers['uid'] = getUid()
		}
		// if (config.showLoading) {
		Toast.loading({
			message: '加载中...',
			forbidClick: true,
			loadingType: 'spinner',
			duration: 0,
		})
		// }
		return config
	},
	(error) => {
		// do something with request error
		console.log(error, 'err') // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	(response) => {
		Toast.clear()
		const res = response.data

		// if the custom code is not 20000, it is judged as an error.
		if (res.code !== 200 && res.code !== 300000) {
			// 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
			if (
				res.code === 50008 ||
				res.code === 50012 ||
				res.code === 50014 
			) {
				// to re-login
				Toast.confirm(
					'You have been logged out, you can cancel to stay on this page, or log in again',
					'Confirm logout',
					{
						confirmButtonText: 'Re-Login',
						cancelButtonText: 'Cancel',
						type: 'warning',
					}
				).then(() => {
					store.dispatch('user/resetToken').then(() => {
						location.reload()
					})
				})
			} else {
				Toast.fail({
					message: res.message,
					duration: 1.5 * 1000,
				})
			}
			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return res
		}
	},
	(error) => {
		Toast.clear()
		console.log('err' + error) // for debug
		Toast.fail({
			message: error.message,
			duration: 1.5 * 1000,
		})
		return Promise.reject(error)
	}
)

export default service
