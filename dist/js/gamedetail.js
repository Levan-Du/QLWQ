webpackJsonp([7],{

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(22);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _move = __webpack_require__(7);

var _move2 = _interopRequireDefault(_move);

var _pages = __webpack_require__(3);

var _login = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('games');
    (0, _pages.initNavAction)();
    loadLogin();
    (0, _pages.initLoginAction)();
    loadTheGame();
    (0, _login.initLoginUserAction)();
});

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};

var PageSize = 5;

var HotGamesState = {
    totalPage: 0,
    data: []
};

var loadTheGame = function loadTheGame() {
    var id = comm.getQueryString()['id'];
    comm.dd.Get('/GameGameItem/HotGameList', 'gameId=' + id, function (res) {
        renderGame(res.message[0]);

        loadHotGames();
    });
};

var renderGame = function renderGame(g) {
    $('#game_intro_box').append(g.GameDes || "");
    $('#game_img_box').append('<img  src="' + g.ImgUrl + '" alt="\u6E38\u620F\u5927\u56FE">');
};

var setHotGamesState = function setHotGamesState(data) {
    var d = data.filter(function (el) {
        return !!el.ImgUrl;
    });

    HotGamesState.data = d;
    HotGamesState.totalPage = Math.ceil(d.length / PageSize);
};

var loadHotGames = function loadHotGames() {
    comm.dd.Get('/GameGameItem/HotGameList', null, function (res) {
        setHotGamesState(res.message);
        renderImgGroup();
    });
};

var renderImgGroup = function renderImgGroup() {
    var d = HotGamesState.data,
        p = HotGamesState.totalPage,
        da = [];
    for (; p-- > 0;) {
        var td = d.slice(p * PageSize, (p + 1) * PageSize);
        da.push(td);
    }

    var tmpl = da.map(function (el, i) {
        return '\n    <ul class="img-group clearfix' + (i === 0 ? ' checked' : '') + '">\n        ' + el.map(function (el2) {
            return '\n        <li class="item"><img src="' + el2.ImgUrl + '" alt="\u56FE\u7247"></li>\n        ';
        }).join('') + '\n    </ul>';
    }).join('');
    $('#hot_img_box').append(tmpl);
    initHotGamesAction();
};

var currentImgGroupIndex = 0;
var initHotGamesAction = function initHotGamesAction() {
    var itarget = $('#hot_img_box').width(),
        moveBoxs = $('#hot_img_box .img-group'),
        pagerBtns = $('.hot-goods .img-container .pager .btn-pager');

    pagerBtns.click(function (e) {
        var target = $(e.currentTarget),
            claProp = target.prop('class');

        if (claProp.indexOf('btn-pre') !== -1) {
            prePage(moveBoxs, itarget);
        } else {
            nextPage(moveBoxs, itarget);
        }
    });
};

var prePage = function prePage(moveBoxs, itarget) {
    if (currentImgGroupIndex === 0) {
        return;
    }
    var i = currentImgGroupIndex - 1;
    moveBox(0, moveBoxs, itarget, i);
};

var nextPage = function nextPage(moveBoxs, itarget) {
    if (currentImgGroupIndex === moveBoxs.length - 1) {
        return;
    }
    var i = currentImgGroupIndex + 1;
    moveBox(1, moveBoxs, itarget, i);
};
var moveBox = function moveBox(type, moveBoxs, itarget, i) {
    (0, _move2.default)(type, moveBoxs, itarget, i, currentImgGroupIndex, function () {
        $(moveBoxs[currentImgGroupIndex]).removeClass('checked');
        $(moveBoxs[i]).addClass('checked');

        currentImgGroupIndex = i;
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[42]);