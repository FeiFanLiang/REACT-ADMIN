const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target : 'http://testportal1.aimmcloud.com/api',
            changeOrigin : true
        })
    );
};