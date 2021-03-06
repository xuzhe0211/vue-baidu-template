const path = require('path');
// const Mock = require('./mock/mock.js');
const CompressionPlugin = require('compression-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const rootPath = path.resolve(__dirname);

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        // overlay: {
        //     warnings: false,
        //     errors: true
        // },
        // before(app, s) {
        //     Mock(app)
        // },
        proxy: {
            '/v2x/bsp': {
                target: 'https://180.76.50.78:9001',
                changeOrigin: true,
                pathRewrite: {'': ''}
            }
        }
    },
    pluginOptions: {
        'resolve-alias': {
            alias: {
                src: path.resolve(rootPath, 'src'),
                components: path.resolve(rootPath, 'src/components'),
                utils: path.resolve(rootPath, 'src/utils')
            }
        }
    },
    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
            }),
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/, // 匹配文件名
                threshold: 10240, // 对超过10K的数据进行压缩
                deleteOriginalAssets: false
            })
        ]
    },
    css: {
        extract: false
    },
    chainWebpack: (config) => {
        // // 自动导入样式文件
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)));
        config.resolve.symlinks(true); // 修复热更新失效
        // 删除预加载
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    }
};
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/static/css/mixins/element.less'),
                path.resolve(__dirname, './src/static/css/mixins/info-mixins.less'),
                path.resolve(__dirname, './src/static/css/mixins/common-mixins.less'),
            ]
        });
}
