//base64转码（压缩完成后的图片为base64编码，这个方法可以将base64编码转回file文件）
// base64转blob
const dataURLtoFile = function(base64Data) {
	let arr = base64Data.split(','),
		fileType = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		l = bstr.length,
		u8Arr = new Uint8Array(l)

	while (l--) {
		u8Arr[l] = bstr.charCodeAt(l)
	}
	return new Blob([u8Arr], {
		type: fileType,
	})
}
// blob转file
const blobToFile = function(newBlob, fileName) {
	newBlob.lastModifiedDate = new Date()
	newBlob.name = fileName
	return newBlob
}
//压缩图片
export function compressImg(file) {
	var blob
	var files
	var fileSize = parseFloat(parseInt(file['size']) / 1024 / 1024).toFixed(2)
	var read = new FileReader()
	read.readAsDataURL(file)
	return new Promise(function(resolve, reject) {
		read.onload = function(e) {
			var img = new Image()
			img.src = e.target.result
			img.onload = function() {
				//默认按比例压缩
				var w = this.width,
					h = this.height
				//生成canvas
				var canvas = document.createElement('canvas')
				var ctx = canvas.getContext('2d')
				var base64
				// 创建属性节点
				canvas.setAttribute('width', w)
				canvas.setAttribute('height', h)
				ctx.drawImage(this, 0, 0, w, h)
				debugger
				if (fileSize < 1) {
					console.log('小于1M')
					//如果图片小于一兆 那么不执行压缩操作
					base64 = canvas.toDataURL(file['type'], 0.1)
				} else if (fileSize > 1 && fileSize < 1.5) {
					base64 = canvas.toDataURL(file['type'], 0.08)
				} else if (fileSize > 1 && fileSize < 2) {
					debugger
					console.log('小于2M')
					//如果图片大于1M并且小于2M 那么压缩0.5
					base64 = canvas.toDataURL(file['type'], 0.05)
				} else {
					debugger
					console.log('大于2M')
					//如果图片超过2m 那么压缩0.2
					base64 = canvas.toDataURL(file['type'], 0.02)
				}
				debugger
				// 回调函数返回file的值（将base64编码转成file）
				// blob = dataURLtoFile(base64) //如果后台接收类型为base64的话这一步可以省略
				// file = blobToFile(blob, '123')
				resolve(base64)
			}
		}
	})
}
