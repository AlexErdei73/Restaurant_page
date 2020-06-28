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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage.js */ \"./src/loadHomePage.js\");\n\n\nObject(_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"loadMenuBar\"])();\nObject(_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/*! exports provided: loadMenuBar, loadHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMenuBar\", function() { return loadMenuBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHomePage\", function() { return loadHomePage; });\nfunction loadMenuBar() {\n    const content = document.querySelector('#content');\n    const menuBar = document.createElement('div');\n    menuBar.setAttribute('id','menubar');\n    const center = document.createElement('div');\n    center.setAttribute('id','center');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Alex\\'s Restaurant';\n    const menu = ['home','menu','contact'];\n    const ul = document.createElement('ul');\n    let li = [];\n    let listItem;\n    for (let i = 0; i < 3; i++){\n        listItem = document.createElement('li');\n        listItem.textContent = menu[i];\n        listItem.setAttribute('id',menu[i]);\n        listItem.style = 'display: inline;' + \n                         'margin-left: 10%;' +\n                         'font-size: large;';\n        ul.appendChild(listItem);\n    }\n    content.style = 'width: 100%;' +\n                    'border: 2px solid #3b3b3b;';\n    menuBar.style = 'margin: 1% 0';\n    h1.style =  'margin-left: 10%;' + \n                'display: inline;';\n    ul.style =  'list-style-type: none;' +\n                'margin: 0;' +\n                'padding: 0;' +\n                'margin-right: 14%;' +\n                'margin-top: 0.6%;' +\n                'float: right;' + \n                'clear: left;';\n    menuBar.appendChild(h1);\n    menuBar.appendChild(ul);\n    content.appendChild(menuBar);\n    content.appendChild(center);\n}\n\nfunction loadHomePage() {\n    const center = document.querySelector('#center');\n    const div = document.createElement('div');\n    const p = document.createElement('p');\n    const img = document.createElement('img');\n    p.textContent = 'Come and indulge yourself with our delicious food!';\n    img.setAttribute('src','../restaurant-hero.jpg/');\n    img.setAttribute('alt','a nice dish on the table');\n    div.style = 'width: 80%;' +\n                'margin: auto;' +\n                'background-color: #1f1f1f;' +\n                'color: white;' +\n                'text-align: center;' +\n                'border: none;';\n    p.style =   'width: 45%;' +\n                'padding: 3% 0;' +\n                'margin: auto;' +\n                'font-size: large;';\n    img.style = 'display: block;' +\n                'width: 80%;' +\n                'margin: 10% auto;' +\n                'margin-top: 0;';\n    center.innerHTML = '';\n    div.appendChild(p);\n    center.appendChild(div);\n    center.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack:///./src/loadHomePage.js?");

/***/ })

/******/ });