const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.tsx', '.ts', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vueファイルの中で ts を書けるようにする
          loaders: {
            ts: {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
            scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
          },
          options: {
            esModule: true,
          },
        },
      },
    ],
  },
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: `${__dirname}/public/dist`,
    filename: '[name].js',
  },
};
