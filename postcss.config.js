// module.exports = {
//   plugins: {
//     // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
//     "cnjm-postcss-px-to-viewport": {
//       viewportWidth: 375, // 根据设计稿设定
//       minPixelValue: 1, // 最小的转换数值
//       unitPrecision: 2, // 转化精度，转换后保留位数
//       exclude: "common"
//     },
//     autoprefixer: {
//       overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
//     }
//   }
// };
// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['html'],
      minPixelValue: 1.5,
      mediaQuery: false,
      exclude: 'common'
    }
  }
}
