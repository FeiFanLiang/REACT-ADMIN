const cracoLessPlugin = require('craco-less');

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
}