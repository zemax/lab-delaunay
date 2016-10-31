"use strict";

export const size = function () {
	return {
		width:  (window.innerWidth || document.documentElement.clientWidth),
		height: (window.innerHeight || document.documentElement.clientHeight),
	}
};
