const path = require('path')
const resolve = dir => {
	return path.join(__dirname, dir)
}
// console.log(process.env.NODE_ENV)
module.exports = {
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
			.set('~', resolve('/'))
	},

	// 打包时不生成.map文件
	productionSourceMap: false,

	devServer: {
		port: 9999,
		proxy: {
			'/proxy/': {
				target: 'https://api.hoxiuxiu.com/',
				pathRewrite: {'^/proxy/': ''},
				secure: false
			},
			'/proxy-qixiu/': {
				target: 'http://api.qixiu.hoxiuxiu.com/',
				pathRewrite: {'^/proxy-qixiu/': ''},
				secure: false
			},
			'/proxy-hxx/': {
				target: 'http://developer.hxx.hoxiuxiu.com/',
				pathRewrite: {'^/proxy-hxx/': ''},
				secure: false
			},
		}
	}
}
