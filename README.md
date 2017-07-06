# webpack-optimizing-demo

A vue.js demo 4 webpack long term cache

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Tutorial

[Webpack Freestyle 之 Long Term Cache](https://zhuanlan.zhihu.com/p/27710902)

steps:

1. [time 2 chunkhash](https://github.com/lyyourc/webpack-code-splitting-demo/commit/4d8f3e3e6e9e52a700cd2b2c8219b6b9ef400fce)
2. [Update App.vue](https://github.com/lyyourc/webpack-code-splitting-demo/commit/a37d901802b2c7814e124b6096a1593e0b49454e)
3. [+ Extract webpack runtime](https://github.com/lyyourc/webpack-code-splitting-demo/commit/94f9966056b1187984ad5c273c804d5bc1d4c41c)
4. [Update App.vue again](https://github.com/lyyourc/webpack-code-splitting-demo/commit/237328b24088e66263c044c14503b9a989874fc6)
5. [Import module in App.vue](https://github.com/lyyourc/webpack-code-splitting-demo/commit/47f026c0d4fd3a6e8571117eff7d7e71392fbb6c)
6. [+ oh my HashModuleIds plugin](https://github.com/lyyourc/webpack-code-splitting-demo/commit/3a6a944a32c41d714c6d477b1d00b497f002ed3e)
7. [re-import module in App.vue](https://github.com/lyyourc/webpack-code-splitting-demo/commit/9bd422da28a6f0626cd45d005d421bd887dcc2e5)