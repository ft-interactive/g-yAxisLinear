(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.g = global.g || {})));
}(this, function (exports) { 'use strict';

	function yaxisLinear() {
		console.log("yaxislinear function")
	  return 42;
	};

	exports.yaxisLinear = yaxisLinear;

	Object.defineProperty(exports, '__esModule', { value: true });

}));