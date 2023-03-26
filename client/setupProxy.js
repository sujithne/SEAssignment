const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://18.210.66.126:3003',
      changeOrigin: true,
    })
  );
};