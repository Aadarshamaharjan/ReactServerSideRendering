const path = require("path");
const nodeExternals = require("webpack-node-externals");

const client = {
    mode:"development",
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    module:{
        rules:[
            {
                test: /js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/image/[name].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    emit: false
                }
            },
        ]
    }
}

const server = {
    mode:"development",
    target: 'node',
    entry: './server/index.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname),
        libraryTarget: "commonjs2"
    },
    module:{
        rules:[
            {
                test: /js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.(scss|css)$/,
                loader: "ignore-loader"
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/image/[name].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    emit: false
                }
            },
        ]
    },
    externals:[nodeExternals()]
}

module.exports = [client, server];
