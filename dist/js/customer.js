webpackJsonp([9],{

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(20);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(3);

var _login = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('customer');
    (0, _pages.initNavAction)();
    loadLogin();
    (0, _pages.initLoginAction)();
    (0, _login.initLoginUserAction)();
});

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[41]);