const HTMLWEBPACKPLUGIN = require("html-webpack-plugin");

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

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [cssRule, tsRule],
    },
    plugins: [
        new HTMLWEBPACKPLUGIN({
            template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}