const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'boundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react'],
                plugins: ['transform-class-properties', 'transform-object-rest-spread']
            }
        }
    }, {
      test: /\.?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]}
    ]
  }, 
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    historyApiFallback: true
  },  
  devtool: 'cheap-module-eval-source-map'
};

