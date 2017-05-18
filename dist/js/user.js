webpackJsonp([4],{

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(21);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initLoginAction)();
    initLoginAction2();
});

var loginModal = null;
var initLoginAction2 = function initLoginAction2() {
    $('.main .mid .btn-link').click(function (e) {
        loginModal = $.showLoginModal();
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[44]);