webpackJsonp([3],{

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(10);

var _common = __webpack_require__(3);

var comm = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    renderNews();
});

var pageSize = 4;
var newsFilter = function newsFilter(arr, classId) {
    return arr.filter(function (el, i) {
        return el.ClassID == classId;
    });
};

var renderItem = function renderItem(id, o) {
    var pdata = byPager(o.data, o.pageIndex),
        tmpl = o.data.length === 0 ? '<p class="news-noitem">\u6CA1\u6709\u6570\u636E</p>' : pdata.map(function (el) {
        return '<p class="news-item">' + el.Subject + '</p>';
    }).join('');

    $('#' + id).html(tmpl);
};

var prePage = function prePage(id, o) {
    if (o.pageIndex > 1 && o.pageIndex <= o.totalPage) {
        o.pageIndex--;
    }

    renderItem(id, o);
};

var nextPage = function nextPage(id, o) {
    if (o.pageIndex >= 1 && o.pageIndex < o.totalPage) {
        o.pageIndex++;
    }

    renderItem(id, o);
};

var byPager = function byPager(arr, pageIndex) {
    return arr.filter(function (el, i) {
        return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize;
    });
};

var news = { pageIndex: 1 },
    notices = { pageIndex: 1 },
    acts = { pageIndex: 1 };

var renderNews = function renderNews() {
    comm.dd.Get('/News/HotNewList', null, function (res) {
        // acts =Object.assign(acts, newsFilter(res.message, 1));      
        news.data = newsFilter(res.message, 2);
        news.totalPage = Math.ceil(news.data.length / pageSize);
        notices.data = newsFilter(res.message, 3);
        notices.totalPage = Math.ceil(notices.data.length / pageSize);

        renderItem('noticesBox', notices);
        renderItem('newsBox', news);
        // renderNews('acts', acts);

        initNewsAction();
    });
};

var initNewsAction = function initNewsAction() {
    $('.tab-content .pager .btn').click(function (e) {
        var target = $(e.currentTarget),
            datafor = target.attr('data-for'),
            datamark = target.attr('data-mark'),
            go = function go(mark, box, o) {
            mark === 'pre' ? prePage(box, o) : nextPage(box, o);
        };

        switch (datafor) {
            case 'news':
                go(datamark, 'newsBox', news);
                break;
            case 'notices':
                go(datamark, 'noticesBox', notices);
                break;
            case 'acti':
                go(datamark, 'activiesBox', acts);
                break;
            default:
                break;
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[26]);