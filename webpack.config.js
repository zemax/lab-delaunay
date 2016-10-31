var path    = require( "path" );
var webpack = require( "webpack" );

var production = (process.argv.indexOf( "--production" ) > -1);

module.exports = {
	cache:   {},
	entry:   {
		main: [ "./src/js/main.js" ],
	},
	output:  {
		path:     path.join( __dirname, "build" ),
		filename: "js/[name].js"
	},
	module:  {
		loaders: [
			{
				test:    /\.js$/,
				exclude: /node_modules/,
				loader:  "babel?presets[]=es2015!eslint",
			},
			{
				test:   /\.json$/,
				loader: "json"
			}
		],
	},
	plugins: [ new webpack.DefinePlugin( { __PROD__: production } ),
			 ].concat( production ? [ new webpack.optimize.UglifyJsPlugin( { compress: { drop_console: true, warnings: false } } ) ] : [] )
};
