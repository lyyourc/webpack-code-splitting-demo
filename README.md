# webpack-code-splitting-demo

A vue.js demo 4 webpack code splitting,

and long term cache demo in [cache branch](https://github.com/lyyourc/webpack-code-splitting-demo/tree/cache).

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

[Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831?refer=ElemeFE).

Steps:

1. [Init project](https://github.com/lyyourc/webpack-code-splitting-demo/commit/1c6b0997fb6333ee6475cd5b29917969af2a3c50)
2. [Init app](https://github.com/lyyourc/webpack-code-splitting-demo/commit/4612aa87216273bf5aa100688e655a76381ebf81)
3. [Set 'vendor' entry](https://github.com/lyyourc/webpack-code-splitting-demo/commit/6324e8a591b0c2b1fe5cd6c288a2cdfe56e17550)
4. [Set up `CommonsChunkPlugin`](https://github.com/lyyourc/webpack-code-splitting-demo/commit/4af7b5be5d503a59ac43209747ec2b740d39ebb2)
5. [Automatically splitting vendor](https://github.com/lyyourc/webpack-code-splitting-demo/commit/7a6f534eebc73afd48644656acc51840c6694a3d)
6. [Add router](https://github.com/lyyourc/webpack-code-splitting-demo/commit/84d6c7cdfdc399e887bef59c8f13c6bce6215961)
7. [Dynamic import router components](https://github.com/lyyourc/webpack-code-splitting-demo/commit/4fb8417bece69f5a6466243d39be75cb5361cc8d)
8. [+ `async` flag](https://github.com/lyyourc/webpack-code-splitting-demo/commit/dc549cc060ec90f95b4fa3152938b2349405ff4c)
9. [`count` in minChunks](https://github.com/lyyourc/webpack-code-splitting-demo/commit/5ef01ab9dd2b402c8b9d66f96c3a6c3d0be1fc96)