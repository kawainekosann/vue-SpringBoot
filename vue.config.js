let proxyObj = {}

proxyObj['/'] = {
    //websocket
    ws: false,
    //目标地址
    target: 'http://localhost:8081',
    //发送请求头host会被设置为target
    changeOrigin: true,
    //重写后端地址,此处不重写
    pathRewrite: {
        '^/':'/'
    }
}


module.exports = {
    devServer: {
        host: 'localhost',
        port: '8080',
        proxy: proxyObj
    }
}
