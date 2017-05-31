webpackJsonp([1],{

/***/ 10:
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var news = exports.news = JSON.parse('[{"checked":false,"selected":false,"NewsID":"2022","Subject":"棋游棋牌比赛规则","IsHot":"0","ClassID":"2","IssueDate":"2017-05-17 09:53:55.110"},{"checked":false,"selected":false,"NewsID":"2019","Subject":"棋游游戏将于下个月正式上线","IsHot":"0","ClassID":"2","IssueDate":"2017-05-06 10:44:10.923"},{"checked":false,"selected":false,"NewsID":"15","Subject":"黑土黑土我是白云","IsHot":"1","ClassID":"2","IssueDate":"2017-02-18 15:49:27.050"},{"checked":false,"selected":false,"NewsID":"14","Subject":"嘿嘿嘿","IsHot":"0","ClassID":"2","IssueDate":"2017-02-18 15:48:36.437"}]');
var goods = exports.goods = JSON.parse('[{"checked":false,"selected":false,"GameID":"3004","GameName":"真摇钱树","GameDes":"666","ImgUrl":"/images/3004.png"},{"checked":false,"selected":false,"GameID":"1007","GameName":"炸金花","GameDes":"yyyy","ImgUrl":"/images/1007.png"},{"checked":false,"selected":false,"GameID":"2001","GameName":"血战麻将","GameDes":"666666666666666666666666666666","ImgUrl":"/images/2001.png"},{"checked":false,"selected":false,"GameID":"1001","GameName":"新百家乐","GameDes":"hhhhhhsafsafasdfasfasfds77771111122","ImgUrl":"/images/1001.png"},{"checked":false,"selected":false,"GameID":"3001","GameName":"西游降魔","GameDes":"000000000000000000000","ImgUrl":"/images/3001.png"},{"checked":false,"selected":false,"GameID":"4001","GameName":"五星宏辉","GameDes":"","ImgUrl":"/images/4001.png"},{"checked":false,"selected":false,"GameID":"4003","GameName":"水浒传","GameDes":"666","ImgUrl":"/images/4003.png"},{"checked":false,"selected":false,"GameID":"3005","GameName":"神秘漩涡","GameDes":"","ImgUrl":"/images/3005.png"},{"checked":false,"selected":false,"GameID":"3002","GameName":"千炮金蟾捕鱼","GameDes":"","ImgUrl":"/images/3002.png"},{"checked":false,"selected":false,"GameID":"1008","GameName":"跑得快","GameDes":"","ImgUrl":"/images/1008.png"},{"checked":false,"selected":false,"GameID":"1006","GameName":"癞子斗地主","GameDes":"666","ImgUrl":"/images/1006.png"},{"checked":false,"selected":false,"GameID":"3003","GameName":"金蟾捕鱼","GameDes":"","ImgUrl":"/images/3003.png"},{"checked":false,"selected":false,"GameID":"1004","GameName":"欢乐斗地主","GameDes":"333333","ImgUrl":"/images/1004.png"},{"checked":false,"selected":false,"GameID":"2002","GameName":"滑水麻将","GameDes":"555555555555555555555555555","ImgUrl":"/images/2002.png"},{"checked":false,"selected":false,"GameID":"2004","GameName":"贵阳捉鸡麻将","GameDes":"aaaaaaaaaa","ImgUrl":"/images/2004.png"},{"checked":false,"selected":false,"GameID":"2003","GameName":"广东麻将","GameDes":"aaaaa4","ImgUrl":"/images/2003.png"}]');

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aaa.png": 73,
	"./acti-01.png": 74,
	"./acti-02.png": 75,
	"./acti-03.png": 76,
	"./barner-01.png": 77,
	"./barner-02.png": 78,
	"./barner-03.png": 79,
	"./barner-04.png": 80,
	"./down_code.png": 8,
	"./index_act_01.png": 81,
	"./index_act_02.png": 82,
	"./logo.png": 83,
	"./logoicon.png": 9,
	"./mall-barner-01.png": 84,
	"./mall-barner-02.png": 85,
	"./mall-barner-03.png": 86,
	"./sprite.png": 89
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
webpackContext.id = 35;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(24);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _move = __webpack_require__(7);

var _move2 = _interopRequireDefault(_move);

var _pages = __webpack_require__(3);

var _carousel = __webpack_require__(10);

var _carousel2 = _interopRequireDefault(_carousel);

var _login = __webpack_require__(2);

var _mock = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('index');
    (0, _pages.initNavAction)();
    loadLogin();
    (0, _pages.initLoginAction)();
    (0, _pages.initTab)();
    renderBarnerImage();
    renderNews();
    renderGoodsImages();
    (0, _login.initLoginUserAction)();
});

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};

var renderBarnerImage = function renderBarnerImage() {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        imgUrl = '',
        hashcode = comm.randomChar(8),
        tmpl = imgs.map(function (el) {
        imgUrl = __webpack_require__(35)("./" + el);
        return '<img src="' + imgUrl + '?' + hashcode + '">';
    }).join('');

    $('#header_barner_imgbox').append(tmpl);

    var imgEles = $('#header_barner_imgbox img'),
        btnEles = $('.barner .btn-wrapper .btn-circle');
    (0, _carousel2.default)(imgEles, btnEles, 5000);
};

var getNews = function getNews(cb) {
    cb(_mock.news);
    // var newsFilter = (arr, classId) => {
    //     var arr2 = arr.filter((el, i) => {
    //         return el.ClassID == classId;
    //     });
    //     return arr2.filter((el, i) => {
    //         return i < 4;
    //     });
    // }
    // comm.dd.Get('/News/HotNewList', null,
    //     (res) => {
    //         var news = newsFilter(res.message, 2);
    //         cb(news);
    //     });
};

var renderNews = function renderNews() {
    var renderNewsItem = function renderNewsItem(data) {
        var tmpl = data.map(function (el) {
            return '<li class="item">\n                        <p>' + el.Subject + '</p>\n                        <p class="time">[' + new Date(el.IssueDate).Format('MM/dd') + ']</p>\n                    </li>';
        }).join('');

        $('#news_list').html(tmpl);
    };
    getNews(function (data) {
        renderNewsItem(data);
    });
};

var getGoods = function getGoods(cb) {
    cb(_mock.goods);
    // comm.dd.Get('/GameGameItem/HotGameList', null,
    //     (res) => {
    //         var t = res.message.filter((el) => {
    //                 return !!el.ImgUrl;
    //             }),
    //             data = t.filter((el, i) => {
    //                 return i < 16;
    //             });
    //         console.log(JSON.stringify(data));
    //         cb(data);
    //     });
};

var renderGoodsImages = function renderGoodsImages() {
    getGoods(function (data) {
        var tmplArr = [],
            item = '';

        data.forEach(function (el, i) {
            item += '<li class="img-item"><a href="gamedetail.html?id=' + el.GameID + '"><img src="' + el.ImgUrl + '" alt="\u6E38\u620F\u56FE\u7247"></a></li>';
            if ((i + 1) % 4 === 0) {
                tmplArr.push('\n                    <ul class="img-wrapper clearfix' + (i === 3 ? ' checked' : '') + '">\n                        ' + item + '                        \n                    </ul>\n                    ');
                item = '';
            }
        });
        var tmpl = tmplArr.join('');
        $('#goodsImgBox').append(tmpl);
        initMoveCarousel();
    });
};

var preImgGroupIndex = 0;
var btns = [],
    moveBoxs = [],
    iTarget = 0;
var initMoveCarousel = function initMoveCarousel() {
    btns = $('.goods-wraper .btn-circle');
    moveBoxs = $('#goodsImgBox .img-wrapper');
    iTarget = moveBoxs.width();

    var interval = startMoveCarousel(iTarget);
    btns.mouseenter(function (e) {
        clearInterval(interval);
    });
    btns.mouseleave(function (e) {
        interval = startMoveCarousel(iTarget);
    });

    btns.click(function (e) {
        var currIndex = btns.index(e.currentTarget);
        if (preImgGroupIndex === currIndex) {
            return;
        }
        $(btns[preImgGroupIndex]).removeClass('checked');
        $(e.currentTarget).addClass('checked');

        if (currIndex > preImgGroupIndex) {
            moveBox(1, currIndex, iTarget);
        } else {
            moveBox(0, currIndex, iTarget);
        }

        preImgGroupIndex = currIndex;
    });
};

var startMoveCarousel = function startMoveCarousel(iTarget) {
    return setInterval(function () {
        var currIndex = preImgGroupIndex + 1;
        if (currIndex >= moveBoxs.length) {
            currIndex = 0;
        }
        $(btns[preImgGroupIndex]).removeClass('checked');
        $(btns[currIndex]).addClass('checked');
        moveBox(1, currIndex, iTarget);
    }, 5000);
};

var moveBox = function moveBox(type, currIndex, iTarget) {
    (0, _move2.default)(type, moveBoxs, iTarget, currIndex, preImgGroupIndex, function () {
        preImgGroupIndex = currIndex;
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/8ee4fed1.aaa.png";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/1e681eab.acti-01.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/42abb44b.acti-02.png";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/4449c972.acti-03.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/29078f37.barner-01.png";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/bff8413f.barner-03.png";

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/c048b7c3.index_act_01.png";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/bede78b9.index_act_02.png";

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAABNCAMAAACYNIEWAAAB6VBMVEUAAAD39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/cABXL39/fzmACEhrm1ttRCRpUQFXvn5+4OE3rHx93W1+VjZqchJYSlpsuUlsIwNI29vthSVp5zdrAECnXLzOALD3j19fYBBnPo6e8dIYIrL4l5fLONj74YHYAHDHaSlME4PJAzN44TGH1xdLBrbas8QJOcnsYmKoZoaqrv7/Pq6/DAwdmhosmIirt3erJ1eLFHSpmZm8Ty8vTh4evT1OTDxNuXmcOCg7dZXKLs7fH39O/l5e3e3urP0OL37d6wstGsrc9+gLZuca1dYKVMT5tFSJfa2+e7vNf0tEj0pyf226321qL1wGn0pB24udb0yH/zmwn25sv24r/zoBTb2+jX2Ob10ZP1zYn0ulf0sD30rTXY2ea0ssq7tcOvqLrQwLefmbLZwaTqzaIVvxASAAAAQHRSTlMAd0TTO7t+5k0qxAdfWkne0sY9N/YiEdWjcCbRyqGTbjGzgF1U+u+Zj+IZBap7ZxaLiB4NAurMyJ5j2/Owg3RYvA+/WgAADWVJREFUeNrs2elbEkEAx/EpiCANNcxSzCu10w677/mhJJpHuAIqKuItKR6Vt3Zo5ZHZ3dN9/KWxswMLsj5Sjy84/LyZ51Gedff7zA7rLPkfJ/RnLl0oupZyPXM/SVAZV9IgO1CQRxJOaW421ks5uo8kkPNqI5jRF0PuDsHStNAzDebC5Z0kIZTm8huh//F8B/UTzC3vwRiPFp4n8U1XkgrGM2C10VAO9/gsJGm3kki8Up9JAWOvqnH2NVMFvU6PP0TyORJ/9EcugGkcsFoopbbhJ11NSh3Gnt6zg8k+dZrEkaS9eyCZcT0T5LVg2Dthoet1W2lr3yse4mJmKYkP+kuQPChrd9BQtgnvsEBDtYgLRsedR6N8tSwkMS8jT2pg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"

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/23d4a777.mall-barner-01.png";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/eae1037f.mall-barner-02.png";

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/bede78b9.mall-barner-03.png";

/***/ })

},[44]);