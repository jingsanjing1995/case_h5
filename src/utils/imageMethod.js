import { upload_image_path } from '@/api/api'
import { Toast } from 'vant'
/**
 *
 * 调用此方法，传入此方法的是图片对象数组，返回的是字符串拼接
 * imageList 是一个数组，用来存储当前的路径
 * 传入一个数组，这个数组可能是一张，也可能是多张图将file.file保存在这个数组中
 * 传入这个数组将这个数组通过formData上传返回一个数组这个数组里包含的每一个对象里有短路径和长路径
 * 将数组重的短路径拼接成字符串然后return
 */
export async function upload_img_data(imagePath) {
	let formData = new FormData()
	if (imagePath) {
		// 多张图片上传接口
		formData.append('file', imagePath)
		let imageUrl = await upload_image_path(formData)
		debugger
		return imageUrl
	}
}
/**
 * 此方法是将file对象转化成图片预览路径调用的是webapi
 * 调用此方法。传入一个file对象，将传入的对象转化成图片本地地址（local的地址）实现预览
 */
export function get_file_url(file) {
	var url = null
	debugger
	if (window.createObjectURL !== undefined) {
		url = window.createObjectURL(file)
	} else if (window.URL !== undefined) {
		url = window.URL.createObjectURL(file)
	} else if (window.webkitURL !== undefined) {
		url = window.webkitURL.createObjectURL(file)
	}
	return url
}
/**
 * 限制图片大小
 */
export function img_size(file, width, height) {
	return new Promise((resolve, reject) => {
		console.log(reject)
		let url = window.URL || window.webkitURL
		let img = new Image()
		img.onload = function() {
			// 图片比例校验
			// let valid = img.width <=width&& img.height <=height
			// valid ? resolve() : reject();
			let valid = img.width <= 300000 && img.height <= 10000
			valid ? resolve() : resolve()
		}
		img.src = url.createObjectURL(file)
	}).then(
		() => {
			return file
		},
		(error) => {
			console.log(this)
			Toast(`图片最大尺寸为${width}*${height}！`)
			return Promise.reject(error)
		}
	)
}
