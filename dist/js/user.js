webpackJsonp([4],{

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(6);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(29);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(3);

var _login = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('user');
    loadLogin();
    (0, _pages.initLoginAction)();
    initLoginAction2();
    (0, _pages.initNavAction)();
    (0, _login.initLoginUserAction)();
});

var loginModal = null;
var initLoginAction2 = function initLoginAction2() {
    $('.main #btn_login_main').click(function (e) {
        loginModal = $.showLoginModal();
    });
};

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (u) {
        $('#main_username').text(u.Accounts);
        $('#main_call').text((0, _pages.getGenderDes)(u.Gender));
        $('#lbl_btn_login_main').removeClass('visible');
        $('#btn_login_main').removeClass('visible');
        $('#main_username').addClass('visible');
        $('#main_call').addClass('visible');
        $('#main_grade').text(u.MemberOrder);
        $('#main_score').text(u.Score);
        $('#main_diamond').text(u.Diamond);
        $('#main_rcard').text(u.RCard);
        $('#main_points').text(u.Point);
        $('#btn_login_main').hide();
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[49]);