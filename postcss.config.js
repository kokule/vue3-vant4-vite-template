module.exports = {
  plugins: {
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    "cnjm-postcss-px-to-viewport": {
      viewportWidth: 750, // 根据设计稿设定
      unitPrecision: 3, // 转化精度，转换后保留位数
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      exclude: RegExp(/node_modules/i), /* 或直接 /node_modules/i 不要“”表示是reg表达式*/
    },
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    }
  }
};
// https://github.com/michael-ciniawsky/postcss-load-config
// module.exports = {
//   plugins: {
//     autoprefixer: {
//       overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
//     },
//     'postcss-pxtorem': {
//       rootValue: 37.5,
//       propList: ['*'],
//       // selectorBlackList: ['html'],
//       // minPixelValue: 1.5,
//       // mediaQuery: false,
//       // exclude: 'common'
//     }
//   }
// }
