module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'vuexAdapter',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
};
