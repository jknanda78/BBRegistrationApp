module.exports = {
  entry: ["./index.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        include: __dirname + '/src/js',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
        }
      }
    ]
  }
}
