webpackJsonp([10],{

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(6);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(14);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(3);

var _login = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('custody');
    (0, _pages.initNavAction)();
    loadLogin();
    (0, _pages.initLoginAction)();
    initJianHuMenu();
    initContent();
    (0, _login.initLoginUserAction)();
});

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};

var initJianHuMenu = function initJianHuMenu() {
    var menuBtns = $('.content .tab .tab-page.jianhu .menu .item a'),
        articles = $('.content .tab .tab-page.jianhu .main > article'),
        contentEle = $('body > .content'),
        currentIndex = 1;

    menuBtns.click(function (e) {
        var index = menuBtns.index(e.currentTarget);
        if (index === currentIndex) {
            return;
        }

        var checkArticles = $(articles[index]),
            mainEle = checkArticles.parent(),
            tabContEle = mainEle.parent();

        $(articles[currentIndex]).removeClass('checked');
        $(checkArticles).addClass('checked');
        $(menuBtns[currentIndex]).parent().removeClass('checked');
        $(menuBtns[index]).parent().addClass('checked');
        currentIndex = index;

        var height = comm.getBoxSize$(mainEle, 'height') + comm.getBoxSize$(tabContEle, 'height');
        contentEle.height(height);
    });
};

var initContent = function initContent() {
    var contentEle = $('body > .content'),
        mainEle = $('.content .tab .tab-page.jianhu .main'),
        tabContEle = $('.content .tab .tab-page.jianhu .tab-content'),
        height = comm.getBoxSize$(mainEle, 'height') + comm.getBoxSize$(tabContEle, 'height');

    contentEle.height(height);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[37]);