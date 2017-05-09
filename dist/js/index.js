webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var carousel = function carousel(imgEles, btnEles, long, callback) {
    var i = 0,
        imgEle = $(imgEles[i]),
        btnEle = $(btnEles[i]);

    imgEle.fadeIn();
    btnEle.addClass('checked');

    var switchImg = function switchImg(i) {
        imgEle.hide();
        btnEle.removeClass('checked');
        imgEle = $(imgEles[i]);
        btnEle = $(btnEles[i]);
        imgEle.fadeIn();
        btnEle.addClass('checked');
    },
        start = function start() {
        return setInterval(function () {
            i++;
            if (i === 3) {
                i = 0;
            }

            switchImg(i);
        }, long || 3000);
    },
        interval = start(),
        stop = function stop() {
        clearInterval(interval);
    };

    btnEles.mouseenter(function (e) {
        stop();
        i = btnEles.index(e.currentTarget);
        switchImg(i);
    });
    btnEles.mouseleave(function (e) {
        interval = start();
    });
};

exports.default = carousel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./acti-01.png": 16,
	"./acti-02.png": 17,
	"./barner-01.png": 18,
	"./barner-02.png": 19,
	"./barner-03.png": 20,
	"./barner-04.png": 21
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 10;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(6);

__webpack_require__(3);

var _carousel = __webpack_require__(4);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function (e) {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        imgUrl = '',
        tmpl = imgs.map(function (el) {
        imgUrl = __webpack_require__(10)("./" + el);
        return '<img src="' + imgUrl + '">';
    }).join('');

    $('#nav-img-box').append(tmpl);

    var imgEles = $('#nav-img-box img'),
        btnEles = $('.btn-wrapper .btn-circle');
    (0, _carousel2.default)(imgEles, btnEles, 5000, null);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1e681eab.acti-01.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/42abb44b.acti-02.png";

/***/ })
],[12]);