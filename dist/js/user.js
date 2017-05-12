webpackJsonp([2],{

/***/ 12:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(6);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(12);

$(function (e) {
    initModalLogin();
});

var initModalLogin = function initModalLogin() {
    $('.main .mid .btn-link').click(function (e) {
        $('.modal').show();
    });

    $('.modal h3 .btn-close').click(function (e) {
        e.preventDefault();
        $('.modal').hide();
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[28]);