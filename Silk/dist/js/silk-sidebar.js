/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./silk/src/sidebar/css/silk-sidebar.scss":
/*!************************************************!*\
  !*** ./silk/src/sidebar/css/silk-sidebar.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./silk/src/sidebar/js/components/sidebar.js":
/*!***************************************************!*\
  !*** ./silk/src/sidebar/js/components/sidebar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/silk/src/sidebar/js/components/sidebar.js: JSX attributes must only be assigned a non-empty expression (129:33)\n\n\u001b[0m \u001b[90m 127 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mTabPanel\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"edit-post\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 128 | \u001b[39m                        activeClass\u001b[33m=\u001b[39m\u001b[32m\"active-tab\"\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 129 | \u001b[39m                        onSelect\u001b[33m=\u001b[39m{}\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 130 | \u001b[39m                        className\u001b[33m=\u001b[39m\u001b[32m\"silk-tabs\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 131 | \u001b[39m                        initialTabName\u001b[33m=\u001b[39m\u001b[32m\"Google\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 132 | \u001b[39m                        tabs\u001b[33m=\u001b[39m{ [\u001b[0m\n    at Object.raise (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Object.jsxParseAttributeValue (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3373:22)\n    at Object.jsxParseAttribute (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3426:44)\n    at Object.jsxParseOpeningElementAfterName (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3446:28)\n    at Object.jsxParseOpeningElementAt (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3439:17)\n    at Object.jsxParseElementAt (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3471:33)\n    at Object.jsxParseElementAt (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3487:32)\n    at Object.jsxParseElementAt (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3487:32)\n    at Object.jsxParseElement (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3540:17)\n    at Object.parseExprAtom (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3547:19)\n    at Object.parseExprSubscripts (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Object.parseMaybeUnary (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Object.parseExprOps (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Object.parseMaybeConditional (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Object.parseMaybeAssign (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Object.parseParenAndDistinguishExpression (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:6435:28)\n    at Object.parseExprAtom (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:6215:21)\n    at Object.parseExprAtom (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:3552:20)\n    at Object.parseExprSubscripts (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5862:23)\n    at Object.parseMaybeUnary (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5842:21)\n    at Object.parseExprOps (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5729:23)\n    at Object.parseMaybeConditional (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5702:23)\n    at Object.parseMaybeAssign (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5647:21)\n    at Object.parseExpression (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:5595:23)\n    at Object.parseReturnStatement (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:7617:28)\n    at Object.parseStatementContent (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:7295:21)\n    at Object.parseStatement (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Object.parseBlockBody (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Object.parseBlock (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:7786:10)\n    at Object.parseFunctionBody (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:6876:24)\n    at Object.parseFunctionBodyAndFinish (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:6860:10)\n    at Object.parseMethod (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:6804:10)\n    at Object.pushClassMethod (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:8200:30)\n    at Object.parseClassMemberWithIsStatic (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:8125:12)\n    at Object.parseClassMember (/Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/node_modules/@babel/parser/lib/index.js:8067:10)");

/***/ }),

/***/ "./silk/src/sidebar/js/icons/icons.js":
/*!********************************************!*\
  !*** ./silk/src/sidebar/js/icons/icons.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icons = {};
icons.butterfly = React.createElement("svg", {
  id: "svg",
  className: "silk-svg-component",
  xmlns: "http://www.w3.org/2000/svg",
  width: "400",
  height: "400",
  viewBox: "0, 0, 400,400"
}, React.createElement("g", {
  id: "svgg"
}, React.createElement("path", {
  id: "path0",
  d: "M54.496 51.198 C 41.565 55.351,36.494 75.133,37.779 116.406 C 39.949 186.058,77.968 219.875,159.514 224.684 L 168.637 225.223 169.043 222.572 C 169.266 221.115,169.640 217.168,169.876 213.802 C 170.502 204.851,172.457 192.218,174.733 182.422 C 175.831 177.695,176.907 172.868,177.123 171.695 C 178.157 166.087,149.067 118.317,130.609 95.313 C 104.854 63.216,73.556 45.076,54.496 51.198 M328.556 51.245 C 297.574 58.148,263.262 94.424,230.391 155.030 C 221.761 170.940,222.084 169.768,224.211 177.530 C 226.325 185.246,229.482 204.309,230.066 212.891 C 231.021 226.923,229.588 226.167,250.781 223.814 C 317.652 216.386,352.390 189.489,360.740 138.672 C 362.363 128.795,362.583 89.248,361.073 78.690 C 357.669 54.887,348.175 46.873,328.556 51.245 M157.467 76.758 C 156.778 79.026,155.469 85.147,155.469 86.100 C 155.469 86.668,157.917 88.273,160.910 89.668 C 181.139 99.092,199.075 146.103,191.392 169.557 C 178.659 208.424,178.618 260.436,191.286 305.078 C 195.373 319.482,199.556 332.812,199.988 332.813 C 200.586 332.813,208.155 307.734,210.865 296.776 C 221.347 254.393,220.594 204.413,208.955 169.996 C 205.440 159.599,206.905 144.523,213.347 124.800 C 220.031 104.338,233.892 87.599,244.226 87.508 C 245.689 87.495,242.784 76.233,241.241 75.936 C 237.619 75.238,225.287 82.558,219.319 88.947 C 212.166 96.605,203.784 112.243,201.146 122.852 C 200.852 124.033,200.337 125.000,200.000 125.000 C 199.663 125.000,199.148 124.033,198.854 122.852 C 195.825 110.669,186.162 93.793,177.950 86.346 C 170.799 79.861,158.301 74.011,157.467 76.758 M122.016 235.913 C 85.355 256.124,59.218 305.641,71.504 331.612 C 80.733 351.120,115.234 356.013,140.084 341.338 C 157.011 331.341,177.268 300.386,174.240 289.142 C 172.688 283.378,170.276 264.914,169.361 251.781 L 168.422 238.328 165.266 237.943 C 163.530 237.731,158.770 237.338,154.688 237.069 C 150.605 236.800,142.695 235.910,137.109 235.091 C 131.523 234.271,126.777 233.606,126.563 233.612 C 126.348 233.617,124.302 234.653,122.016 235.913 M264.844 234.796 C 261.621 235.350,254.238 236.207,248.438 236.701 C 242.637 237.196,236.470 237.764,234.733 237.964 L 231.576 238.328 230.621 252.172 C 229.712 265.340,227.381 283.024,225.743 289.174 C 222.750 300.413,243.026 331.362,259.916 341.338 C 284.778 356.020,319.262 351.130,328.496 331.612 C 340.765 305.676,314.595 256.096,277.984 235.913 C 273.390 233.380,273.191 233.363,264.844 234.796 ",
  stroke: "none"
})));
icons.github = React.createElement("svg", {
  class: "custom-github-icon",
  role: "img",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, React.createElement("title", null, "GitHub icon"), React.createElement("path", {
  d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./silk/src/sidebar/js/silk-sidebar.js":
/*!*********************************************!*\
  !*** ./silk/src/sidebar/js/silk-sidebar.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar.js */ "./silk/src/sidebar/js/components/sidebar.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_sidebar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_uistore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/uistore.js */ "./silk/src/sidebar/js/store/uistore.js");
/* harmony import */ var _store_uistore_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_store_uistore_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_settingsstore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/settingsstore.js */ "./silk/src/sidebar/js/store/settingsstore.js");
/* harmony import */ var _store_settingsstore_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_store_settingsstore_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icons.js */ "./silk/src/sidebar/js/icons/icons.js");
/**
 * Local dependencies.
 */




/**
 * WordPress dependencies.
 */

var registerPlugin = wp.plugins.registerPlugin;
/**
 * Register the sidebar plugin.
 */

registerPlugin("silk", {
  icon: _icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].butterfly,
  render: _components_sidebar_js__WEBPACK_IMPORTED_MODULE_0___default.a
});

/***/ }),

/***/ "./silk/src/sidebar/js/store/settingsstore.js":
/*!****************************************************!*\
  !*** ./silk/src/sidebar/js/store/settingsstore.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var registerStore = wp.data.registerStore; // https://wordpress.stackexchange.com/questions/324979/getting-a-custom-gutenberg-components-state-from-outside-that-component?rq=1

var initial_state = {
  settings: {
    g_browser_title_max_lenght: 150
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_SETTING":
      {
        return _objectSpread({}, state, {
          settings: _defineProperty({}, action.key, action.value)
        });
      }
  }

  return state;
};

var actions = {
  setSetting: function setSetting(key, value) {
    return {
      type: "SET_SETTING",
      key: key,
      value: value
    };
  }
};
var selectors = {
  getSettings: function getSettings(state) {
    return state.settings;
  }
};
registerStore("silk/settings", {
  reducer: reducer,
  actions: actions,
  selectors: selectors
});

/***/ }),

/***/ "./silk/src/sidebar/js/store/uistore.js":
/*!**********************************************!*\
  !*** ./silk/src/sidebar/js/store/uistore.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var registerStore = wp.data.registerStore; // https://wordpress.stackexchange.com/questions/324979/getting-a-custom-gutenberg-components-state-from-outside-that-component?rq=1

var initial_state = {
  modal: {
    isOpen: false
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "TOGGLE_MODAL_OPEN":
      {
        return _objectSpread({}, state, {
          modal: {
            isOpen: !state.modal.isOpen
          }
        });
      }
  }

  return state;
};

var actions = {
  toggleModalOpen: function toggleModalOpen() {
    return {
      type: "TOGGLE_MODAL_OPEN"
    };
  }
};
var selectors = {
  getModalOpemState: function getModalOpemState(state) {
    return state.modal.isOpen;
  }
};
registerStore("silk/ui", {
  reducer: reducer,
  actions: actions,
  selectors: selectors
});

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./silk/src/sidebar/js/silk-sidebar.js ./silk/src/sidebar/css/silk-sidebar.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/silk/src/sidebar/js/silk-sidebar.js */"./silk/src/sidebar/js/silk-sidebar.js");
module.exports = __webpack_require__(/*! /Users/saskia/Documents/repos/websites/silk/wp-content/plugins/silk/silk/src/sidebar/css/silk-sidebar.scss */"./silk/src/sidebar/css/silk-sidebar.scss");


/***/ })

/******/ });