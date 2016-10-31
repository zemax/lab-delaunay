"use strict";

const ready    = require( 'mf-js/modules/dom/ready' );
const Delaunay = require( 'delaunay-fast' );

import {size} from './helpers/viewport';
import fullscreen from './helpers/fullscreen';

import Display from './app/Display2D';

const DENSITY              = 50;
const VARIATION_VERTICAL   = .06;
const VARIATION_HORIZONTAL = .03;
const VARIATION_LUMINANCE  = 15;

let hue0;
let vertices  = [];
let triangles = []

/**************************************************
 * UI
 **************************************************/

const UI     = document.createElement( 'div' );
UI.className = "ui";
UI.innerHTML = ` 
    <button class="fullscreen">Fullscreen</button>
`;

/**************************************************
 * RESIZE
 **************************************************/

const p            = ( x, y ) => ({ x, y });
const initVertices = function () {
	let s   = size();
	const n = Math.floor( s.width * s.height / (DENSITY * DENSITY) );

	// Vertices

	vertices = [ p( 0, 0 ),
				 p( s.width >> 1, 0 ),
				 p( s.width, 0 ),
				 p( s.width, s.height >> 1 ),
				 p( s.width, s.height ),
				 p( s.width >> 1, s.height ),
				 p( 0, s.height >> 1 ),
				 p( 0, s.height ) ];

	for ( let i = 0; i < n; i++ ) {
		vertices.push( p( Math.round( (s.width + 2 * DENSITY) * Math.random() - DENSITY ), Math.round( (s.height + 2 * DENSITY) * Math.random() - DENSITY ) ) );
	}

	// Triangles

	const triplet_triangles = Delaunay.triangulate( vertices.map( vertice => [ vertice.x, vertice.y ] ) );

	triangles = [];

	for ( let i = 0, l = triplet_triangles.length; i < l; i += 3 ) {
		const triangle = triplet_triangles.slice( i, i + 3 ).map( i => vertices[ i ] );

		const center = triangle.reduce( ( stack, vertex ) => ({
			x: (stack.x + (vertex.x / 3)),
			y: (stack.y + (vertex.y / 3))
		}), { x: 0, y: 0 } );

		const hue        = Math.round( VARIATION_HORIZONTAL * center.x + VARIATION_VERTICAL * center.y );
		const saturation = 100;
		const luminance  = Math.round( 50 + VARIATION_LUMINANCE * (2 * Math.random() - 1) );

		triangles.push( {
							triangle: triangle,
							color:    { hue, saturation, luminance }
						} );
	}
};

function draw() {
	let s = size();

	Display.clear();

	triangles.forEach( ( { triangle, color } ) => {
		const color_hsl = 'hsl(' + (hue0 + color.hue) + ',' + color.saturation + '%,' + color.luminance + '%)';
		Display.draw( triangle, color_hsl );
	} );
}

function main() {
	hue0 = Math.floor( 360 * Math.random() );
	initVertices();
	draw();
}

function loop() {
	hue0 = hue0 - 1;
	draw();
	window.requestAnimationFrame( loop );
}

ready( () => {
	// UI

	document.body.appendChild( UI );
	UI.querySelector( '.fullscreen' ).addEventListener( 'click', function () {
		fullscreen( Display.canvas );
	} );

	// Main

	window.addEventListener( 'resize', main, false );
	Display.canvas.addEventListener( 'click', main, false );
	main();

	loop();
} );
