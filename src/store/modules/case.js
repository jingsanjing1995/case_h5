export default {
	namespaced: true,
	state: {
		caseInfo: '',
		caseContentInfo: '',
	},
	mutations: {
		case_info(state, data) {
			debugger
			state.caseInfo = data
		},
		case_content_info(state, data) {
			debugger
			state.caseContentInfo = data
		},
	},
	actions: {
		set_case_info(state, data) {
			debugger
			state.commit('case_info', data)
		},
		set_case_content_info(state, data) {
			debugger
			state.commit('case_content_info', data)
		},
	},
	getters: {
		case_info(state) {
			return state.caseInfo
		},
		case_content_info(state) {
			return state.caseContentInfo
		},
	},
}
