//webpack-dev-server
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV==='development'
const config = {
    target:'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.jsx$/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']//style-loader将css写到html文件中
        },
        {
            test:/\.styl$/,
            use:[
                'style-loader',
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true,
                    }
                },
                'stylus-loader',
            ]
        },
        {
            test:/\.(gif|jpg|jpeg|png|svg)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:1024,//文件小于1024转换成base64代码写到文件中去
                        name:'[name]-aaa.[ext]'
                    }
                }
            ]
        }
    ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env':{
              NODE_ENV:isDev ? '"development"' : '"production"'
          }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin(),
    ]
}
if(isDev){
    config.devtool='#cheap-module-eval-source-map'//便于调试
   config.devServer={
       port:'8000',
       host:'0.0.0.0',
       overlay:{
           errors:true,
       },
       open:true,
       hot:true,//数据变了的时候只刷新此组件，热加载
   }
   config.plugins.push(
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoEmitOnErrorsPlugin()
   )
}
module.exports=config;