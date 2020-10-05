const
  path = require( "path" ),
  HtmlWebpackPlugin = require( "html-webpack-plugin" ),
  InlineChunkHtmlPlugin = require(
    "inline-chunk-html-plugin" ),
  { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

module.exports = {

  entry: './src/index.js',

  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Ex2", }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [".(js|css)"]),
  ],

  resolveLoader: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "loaders"),
    ],
  },

  module: {
    rules: [
      { test: /\.md$/, use: [ 
        "html-loader", "markdown-loader", "latex-loader" 
      ] },
      { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ {
        loader: "url-loader",
        options: { encoding: 'utf8' }
      } ]},
    ],
  },
}
