const path = require('path');

module.exports = function (env, argv) {
    return {
        entry: './server/index.ts',
        target: 'node',
        output: {
            filename: 'server.js',
            path: path.resolve(process.cwd(), 'dist')
        },
        devtool: 'cheap-module-eval-source-map',
        resolve: {
            alias: {
                build: path.resolve(__dirname, 'build'),
                dist: path.resolve(__dirname, 'dist')
            },
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader']
                }, {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: ['url-loader']
                }
            ]
        }
    };
};