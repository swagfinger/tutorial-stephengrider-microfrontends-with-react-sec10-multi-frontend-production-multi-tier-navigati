//@babel/preset-react - transform jsx react tags
//@babel/preset-env - es2015,es2016, es2017 syntax etc down to es5
//@babel/plugin-transform-runtime - async/await syntax + etc
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
