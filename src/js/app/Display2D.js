"use strict";

import {size} from '../helpers/viewport';

const ready = require( 'mf-js/modules/dom/ready' );

/**************************************************
 * CANVAS
 **************************************************/

const canvas           = document.createElement( 'canvas' );
const context          = canvas.getContext( '2d' );
const devicePixelRatio = window.devicePixelRatio || 1;

/**************************************************
 * RESIZE
 **************************************************/

const resize = function () {
	let s = size();

	console.log( 'resize', s );

	if ( !!canvas ) {
		canvas.style.with   = s.width + 'px';
		canvas.style.height = s.height + 'px';
		canvas.width        = s.width * devicePixelRatio;
		canvas.height       = s.height * devicePixelRatio;
	}
};

window.addEventListener( 'resize', resize, false );

/**************************************************
 * INIT
 **************************************************/

ready( () => {
	resize();
	document.body.appendChild( canvas );
} );

/**************************************************
 * DRAW
 **************************************************/

function clear() {
	context.clearRect( 0, 0, canvas.width, canvas.height );
}

function draw( points, color ) {
	console.log( 'draw', points, color );

	context.fillStyle = color;
	context.beginPath();
	context.moveTo( points[ 0 ].x * devicePixelRatio, points[ 0 ].y * devicePixelRatio );
	context.lineTo( points[ 1 ].x * devicePixelRatio, points[ 1 ].y * devicePixelRatio );
	context.lineTo( points[ 2 ].x * devicePixelRatio, points[ 2 ].y * devicePixelRatio );
	context.lineTo( points[ 0 ].x * devicePixelRatio, points[ 0 ].y * devicePixelRatio );
	context.closePath();
	context.fill();
}

/**************************************************
 * EXPORT
 **************************************************/

const Display = {
	canvas,
	clear,
	draw
};

export default Display;
