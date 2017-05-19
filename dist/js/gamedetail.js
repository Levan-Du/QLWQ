webpackJsonp([7],{

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(17);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initLoginAction)();
    renderNewsTab();
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

var renderNewsTab = function renderNewsTab() {
    var downItemImg = __webpack_require__(6),
        actiImg1 = __webpack_require__(7),
        actiImg2 = __webpack_require__(8),
        getFirstLastBy = function getFirstLastBy(length, i) {
        switch (i) {
            case 0:
                return ' first';
            case length - 1:
                return ' last';
            default:
                return '';
        }
    },
        tmpl = [{ id: 'news', title: '新闻' }, { id: 'notices', title: '公告' }, { id: 'activities', title: '活动' }].map(function (el, i, arr) {
        return '\n        <li class="tab-page">\n            <input id="tab-page-' + (i + 1) + '" class="tab-title-check" type="radio" name="tab" ' + (i === 0 ? 'checked' : '') + '>\n            <label class="tab-title' + getFirstLastBy(arr.length, i) + '" for="tab-page-' + (i + 1) + '">' + el.title + '</label>\n            <div class="tab-content clearfix">\n                <div class="news-list">\n                    <div id="' + el.id + 'Box" class="news-item-wrapper">\n                    </div>\n                    <div class="pager clearfix">\n                        <a data-for="news" data-mark="pre" class="btn">\u4E0A\u4E00\u9875</a>\n                        <a data-for="news" data-mark="next" class="btn">\u4E0B\u4E00\u9875</a>\n                    </div>\n                </div>\n                <div class="news-show">\n                    <ul class="down clearfix">\n                        <li class=down-item>\n                            <img src="' + downItemImg + '">\n                            <span>Android\u4E0B\u8F7D</span>\n                        </li>\n                        <li class=down-item>\n                            <img src="' + downItemImg + '">\n                            <span>Android\u4E0B\u8F7D</span>\n                        </li>\n                    </ul>\n                    <ul class="acti">\n                        <li><img src="' + actiImg1 + '"></li>\n                        <li><img src="' + actiImg2 + '"></li>\n                    </ul>\n                </div>\n            </div>\n        </li>\n    ';
    }).join('');
    $('#tab_news').html(tmpl);
};

var renderNews = function renderNews() {
    comm.dd.Get('/News/HotNewList', null, function (res) {
        // acts =Object.assign(acts, newsFilter(res.message, 1));      
        news.data = newsFilter(res.message, 2);
        news.totalPage = Math.ceil(news.data.length / pageSize);
        notices.data = newsFilter(res.message, 1);
        notices.totalPage = Math.ceil(notices.data.length / pageSize);

        renderItem('noticesBox', notices);
        renderItem('newsBox', news);

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

},[41]);