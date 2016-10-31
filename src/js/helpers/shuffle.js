export default a => {
	for ( var j, x, i = a.length; i; j = parseInt( Math.random() * i ), x = a[ --i ], a[ i ] = a[ j ], a[ j ] = x ) {
	}
	return a;
};
