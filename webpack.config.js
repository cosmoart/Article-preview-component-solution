const HTMLWEBPACKPLUGIN = require("html-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin"),
    path = require("path");

const cssRule = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
    ],
}

const tsRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

const assetsRules = {
    test: /\.(png|svg|jpg|webp)$/i,
    type: "asset/resource",
}

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [cssRule, tsRule, assetsRules],
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: "./src/index.html",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: "images" },
            ],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}