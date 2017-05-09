webpackJsonp([0],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _templateObject = _taggedTemplateLiteral(['<img src="../../assets/imgs/', '">'], ['<img src="../../assets/imgs/', '">']);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(6);

__webpack_require__(3);

var _carousel = __webpack_require__(4);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

$(function (e) {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        tmpl = imgs.map(function (el) {
        return $(_templateObject, el);
    });

    $('#nav-img-box').append(tmpl);

    var imgEles = $('#nav-img-box img'),
        btnEles = $('.btn-wrapper .btn');
    (0, _carousel2.default)(imgEles, btnEles, 3000, null);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var carousel = function carousel(imgEles, btnEles, long, callback) {
    var i = 0,
        imgEle = imgEles[i],
        btnEle = btnEles[i];

    imgEle.fadeIn();
    btnEle.addClass('checked');

    var start = function start() {
        return setInterval(function () {
            i++;

            imgEle.fadeOut();
            btnEle.removeClass('checked');
            imgEle = imgEles[i];
            imgEle = imgEles[i];
            imgEle.fadeIn();
            btnEle.addClass('checked');

            if (i === 3) {
                i = 0;
            }
        }, long || 3000);
    },
        interval = start(),
        stop = function stop() {
        clearInterval(interval);
    };

    btnEles.mouseenter(function (e) {
        stop();
    });
    btnEles.mouseleave(function (e) {
        interval = start();
    });
};

exports.default = carousel;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[11]);