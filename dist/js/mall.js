webpackJsonp([4],{

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(5);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(10);

$(function (e) {
    initAction();
});

var initAction = function initAction() {
    $('#btn_agree_tiaoli').click(function (e) {
        var iconfont = $(e.currentTarget).find('.iconfont'),
            claProp = iconfont.prop('class'),
            errorEle = $('#error_tiaoli');
        console.log(claProp);
        if (claProp.indexOf('icon-weigouxuan') !== -1) {
            iconfont.removeClass('icon-weigouxuan');
            iconfont.addClass('icon-icon162');
            errorEle.hide();
        } else {
            iconfont.removeClass('icon-icon162');
            iconfont.addClass('icon-weigouxuan');
            errorEle.show();
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[26]);