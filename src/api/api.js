/*
 * @description: 公共接口
 * @author: Jsj
 * @Compile：2021-01-20 18：00
 * @update: Jsj(2021-01-20 18：00)
 */
import service from '@/utils/request'

/**
 * 登录接口
 */

export function login_path(data) {
	return service({
		url: '/v1/user/login',
		method: 'post',
		data,
	})
}

/**
 * 列表接口
 */
export function list_path(data) {
	return service({
		url: '/v1/report/getList',
		method: 'post',
		data,
	})
}

/**
 * 案件内容接口 未终结案件表
 * reportID
 */
export function outstandingCase_list_path(data) {
	return service({
		url: '/v1/outstandingCase/getListByReportId',
		method: 'post',
		data,
	})
}

/**
 * 案件内容接口 执行案件表
 * reportID
 */
export function executionCase_list_path(data) {
	return service({
		url: '/v1/executionCase/getListByReportId',
		method: 'post',
		data,
	})
}

/**
 * 案件内容详情接口 未终结案件表
 * v1/outstandingCase/getInfo
 */
export function outstandingCase_info_path(data) {
	return service({
		url: '/v1/outstandingCase/getInfo',
		method: 'post',
		data,
	})
}

/**
 * 案件内容详情接口 执行案件表
 * v1/outstandingCase/getInfo
 */
export function executionCase_info_path(data) {
	return service({
		url: '/v1/executionCase/getInfo',
		method: 'post',
		data,
	})
}
/**
 * 修改状态接口
 */
export function update_path(data) {
	return service({
		url: '/v1/report/update',
		method: 'post',
		data,
	})
}
