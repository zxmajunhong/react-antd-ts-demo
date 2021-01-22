/* eslint-disable @typescript-eslint/no-require-imports */
/**
 *  inject react configd
 */
const CracoLessPlugin = require('craco-less');
const eslintConfig = require('./.eslintrc.js');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 这里可以修改antd的css变量
            modifyVars: { '@primary-color': '#1da57a' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  eslint: {
    configure: (config, { env, paths }) => eslintConfig,
  },
};
