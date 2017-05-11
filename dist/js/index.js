webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = [
	"1001.png",
	"1002.png",
	"1003.png",
	"1004.png",
	"1005.png",
	"1006.png",
	"1007.png",
	"1008.png",
	"2001.png",
	"2002.png",
	"2003.png",
	"2004.png",
	"3001.png",
	"3002.png",
	"3003.png",
	"3004.png",
	"3005.png",
	"4001.png",
	"4003.png",
	"body_bg.jpg",
	"game1.png",
	"gamesImgs.json",
	"game_not.png"
];

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var carousel = function carousel(imgEles, btnEles, long) {
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
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1001.png": 25,
	"./1002.png": 26,
	"./1003.png": 27,
	"./1004.png": 28,
	"./1005.png": 29,
	"./1006.png": 30,
	"./1007.png": 31,
	"./1008.png": 32,
	"./2001.png": 33,
	"./2002.png": 34,
	"./2003.png": 35,
	"./2004.png": 36,
	"./3001.png": 37,
	"./3002.png": 38,
	"./3003.png": 39,
	"./3004.png": 40,
	"./3005.png": 41,
	"./4001.png": 42,
	"./4003.png": 43,
	"./body_bg.jpg": 44,
	"./game1.png": 45,
	"./game_not.png": 46,
	"./gamesImgs": 3,
	"./gamesImgs.json": 3
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
webpackContext.id = 18;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./acti-01.png": 47,
	"./acti-02.png": 48,
	"./barner-01.png": 49,
	"./barner-02.png": 50,
	"./barner-03.png": 51,
	"./barner-04.png": 52
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
webpackContext.id = 19;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(7);

var _common = __webpack_require__(4);

var comm = _interopRequireWildcard(_common);

var _carousel = __webpack_require__(5);

var _carousel2 = _interopRequireDefault(_carousel);

var _gamesImgs = __webpack_require__(3);

var _gamesImgs2 = _interopRequireDefault(_gamesImgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var packGoodsImgs = function packGoodsImgs() {
    var imgs = JSON.parse(_gamesImgs2.default);
    imgs.forEach(function (el) {
        __webpack_require__(18)("./" + el);
    });
};
// import move from '../../commons/move';


$(function (e) {
    renderBarnerImage();
    renderNews();
    renderGoodsImages();
});

var renderBarnerImage = function renderBarnerImage() {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        imgUrl = '',
        hashcode = comm.randomChar(8),
        tmpl = imgs.map(function (el) {
        imgUrl = __webpack_require__(19)("./" + el);
        return '<img src="' + imgUrl + '?' + hashcode + '">';
    }).join('');

    $('#nav-img-box').append(tmpl);

    var imgEles = $('#nav-img-box img'),
        btnEles = $('.nav .btn-wrapper .btn-circle');
    (0, _carousel2.default)(imgEles, btnEles, 5000);
};

var renderNews = function renderNews() {
    var newsFilter = function newsFilter(arr, classId) {
        var arr2 = arr.filter(function (el, i) {
            return el.ClassID == classId;
        });
        return arr2.filter(function (el, i) {
            return i < 4;
        });
    };
    var renderNews = function renderNews(id, news) {
        var tmpl = news.map(function (el) {
            return '<p>' + el.Subject + '</p>';
        }).join('');

        $('#' + id).append(tmpl);
    };

    comm.dd.Get('/News/HotNewList', null, function (res) {
        var news = newsFilter(res.message, 2),
            notices = newsFilter(res.message, 3);
        // activities = newsFilter(res.message, 1);

        renderNews('noticesBox', notices);
        renderNews('newsBox', news);
        // renderNews('activitiesBox', activities);
    });
};

var renderGoodsImages = function renderGoodsImages() {
    comm.dd.Get('/GameGameItem/HotGameList', null, function (res) {
        var goodArr1 = res.message.filter(function (el) {
            return !!el.ImgUrl;
        }),
            goodArr2 = goodArr1.filter(function (el, i) {
            return i < 16;
        }),
            tmpl = goodArr2.map(function (el) {
            return '<li class="img-item"><img src="' + el.ImgUrl + '" alt="游戏图片"></li>';
        });

        $('#goodsImgBox').append(tmpl);
        initMoveCarousel();
    });
};

var initMoveCarousel = function initMoveCarousel() {
    var btns = $('.goods-wraper .btn-circle'),
        currentIndex = 0;

    btns.click(function (e) {
        var i = btns.index(e.currentTarget);
        if (currentIndex === i) {
            return;
        }
        $(btns[currentIndex]).removeClass('checked');
        $(e.currentTarget).addClass('checked');

        var lr = i > currentIndex,
            imgWrapEle = $('#goodsImgBox'),
            diffIndex = Math.abs(i - currentIndex),
            itarget = parseFloat($('.goods-wraper .img-box').width()) * diffIndex,
            marginLeft = parseFloat(imgWrapEle.css('marginLeft')),
            option = lr ? { marginLeft: marginLeft - itarget } : { marginLeft: marginLeft + itarget },
            speed = diffIndex * 300;

        console.log(option, speed);
        imgWrapEle.animate(option, speed, 'swing', function () {});

        currentIndex = i;
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1001.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1002.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1003.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1004.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1005.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1006.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1007.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1008.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/2001.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/2002.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/2003.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/2004.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/3001.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/3002.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/3003.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/3004.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/3005.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/4001.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/4003.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/body_bg.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/game1.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/game_not.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1e681eab.acti-01.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/42abb44b.acti-02.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/29078f37.barner-01.png";

/***/ })
],[21]);