const cracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
    plugins: [
        {
          plugin: cracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
    webpack:{
      alias:{
        '@':path.resolve(__dirname,'./src'),
        'view':path.resolve(__dirname,'./views'),
        'api':path.resolve(__dirname,'./api'),
        'utils':path.resolve(__dirname,'./utils')
      }
    }
}