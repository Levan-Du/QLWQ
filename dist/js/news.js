webpackJsonp([3],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var news = JSON.parse('[{"checked":false,"selected":false,"NewsID":"2022","Subject":"棋游棋牌比赛规则","IsHot":"0","ClassID":"2","IssueDate":"2017-05-17 09:53:55.110"},{"checked":false,"selected":false,"NewsID":"2021","Subject":"新闻板块有bug","IsHot":"0","ClassID":"1","IssueDate":"2017-05-06 10:47:06.147"},{"checked":false,"selected":false,"NewsID":"2020","Subject":"ggggggggggggggg","IsHot":"0","ClassID":"3","IssueDate":"2017-05-06 10:46:47.870"},{"checked":false,"selected":false,"NewsID":"2019","Subject":"棋游游戏将于下个月正式上线","IsHot":"0","ClassID":"2","IssueDate":"2017-05-06 10:44:10.923"},{"checked":false,"selected":false,"NewsID":"2018","Subject":"腾讯杯百万奖金赛","IsHot":"0","ClassID":"1","IssueDate":"2017-05-06 10:41:36.433"},{"checked":false,"selected":false,"NewsID":"1018","Subject":"1","IsHot":"0","ClassID":"3","IssueDate":"2017-04-10 10:11:23.127"},{"checked":false,"selected":false,"NewsID":"15","Subject":"黑土黑土我是白云","IsHot":"1","ClassID":"2","IssueDate":"2017-02-18 15:49:27.050"},{"checked":false,"selected":false,"NewsID":"14","Subject":"嘿嘿嘿","IsHot":"0","ClassID":"2","IssueDate":"2017-02-18 15:48:36.437"},{"checked":false,"selected":false,"NewsID":"13","Subject":"嘻嘻嘻","IsHot":"0","ClassID":"1","IssueDate":"2017-02-18 15:48:25.447"},{"checked":false,"selected":false,"NewsID":"12","Subject":"呵呵呵呵","IsHot":"0","ClassID":"3","IssueDate":"2017-02-18 15:48:16.897"},{"checked":false,"selected":false,"NewsID":"11","Subject":"从前有坐山","IsHot":"0","ClassID":"1","IssueDate":"2017-02-18 15:47:59.457"},{"checked":false,"selected":false,"NewsID":"10","Subject":"sdgdsgdfgdf","IsHot":"0","ClassID":"2","IssueDate":"2017-02-18 15:45:59.953"},{"checked":false,"selected":false,"NewsID":"9","Subject":"fsdfgdsf","IsHot":"0","ClassID":"3","IssueDate":"2017-02-18 15:44:58.767"},{"checked":false,"selected":false,"NewsID":"8","Subject":"666666","IsHot":"1","ClassID":"2","IssueDate":"2017-01-17 16:58:53.237"},{"checked":false,"selected":false,"NewsID":"7","Subject":"22222","IsHot":"0","ClassID":"1","IssueDate":"2017-01-17 16:58:39.400"},{"checked":false,"selected":false,"NewsID":"6","Subject":"123333333333","IsHot":"0","ClassID":"2","IssueDate":"2017-01-17 16:58:24.943"},{"checked":false,"selected":false,"NewsID":"4","Subject":"1","IsHot":"0","ClassID":"1","IssueDate":"2016-12-08 12:15:18.053"},{"checked":false,"selected":false,"NewsID":"2","Subject":"哈哈哈","IsHot":"0","ClassID":"1","IssueDate":"2016-12-06 10:56:21.250"}]');
exports.default = news;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(26);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(3);

var _login = __webpack_require__(2);

var _mock = __webpack_require__(15);

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('news');
    (0, _pages.initNavAction)();
    loadLogin();
    (0, _pages.initLoginAction)();
    renderNewsTab();
    renderNews();
    (0, _login.initLoginUserAction)();
});

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};

var pageSize = 6;
var newsFilter = function newsFilter(arr, classId) {
    return arr.filter(function (el, i) {
        return el.ClassID == classId;
    });
};

var renderItem = function renderItem(id, o) {
    var pdata = byPager(o.data, o.pageIndex),
        tmpl = o.data.length === 0 ? '<p class="news-item news-item-no">\u6CA1\u6709\u6570\u636E</p>' : pdata.map(function (el) {
        return '<ul  class="news-item clearfix"><li style="float:right;"><span>' + new Date(el.IssueDate).Format('yyyy/MM/dd') + '</span></li><li style="overflow:hidden;"><a href="#">' + el.Subject + '</a><li></ul>';
    }).join('');;

    // if (id === 'newsBox') {
    //     tmpl = pdata.map((el) => {
    //         return `<ul  class="news-item clearfix"><li style="float:right;"><span>${new Date(el.IssueDate).Format('yyyy/MM/dd')}</span></li><li style="overflow:hidden;"><a href="#">${el.Subject}</a><li></ul>`;
    //     }).join('');
    // } else {
    //     tmpl = pdata.map((el) => {
    //         return `<p class="news-item"><a href="#">${el.Subject}</a></p>`;
    //     }).join('');
    // }
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

var newsState = { pageIndex: 1 },
    noticesState = { pageIndex: 1 },
    actsState = { pageIndex: 1 };

var renderNewsTab = function renderNewsTab() {
    var getFirstLastBy = function getFirstLastBy(length, i) {
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
        return '\n        <li class="tab-page">\n            <input id="tab-page-' + (i + 1) + '" class="tab-title-check" type="radio" name="tab" ' + (i === 0 ? 'checked' : '') + '>\n            <label class="tab-title" for="tab-page-' + (i + 1) + '">' + el.title + '</label>\n            <div class="tab-content clearfix">\n                <div class="news-list">\n                    <div id="' + el.id + 'Box" class="news-item-wrapper">\n                    </div>\n                    <div class="pager clearfix">\n                        <a data-for="news" data-mark="pre" class="btn">\u4E0A\u4E00\u9875</a>\n                        <a data-for="news" data-mark="next" class="btn">\u4E0B\u4E00\u9875</a>\n                    </div>\n                </div>\n            </div>\n        </li>\n    ';
    }).join('');
    $('#tab_news').html(tmpl);
    (0, _pages.initTab)();
};

var getNews = function getNews(cb) {
    cb(_mock2.default);
    // comm.dd.Get('/News/HotNewList', null,
    //     (res) => {
    //         console.log(JSON.stringify(res.message));
    //         cb(res.message);
    //     });
};

var renderNews = function renderNews() {
    getNews(function (data) {
        // actsState =Object.assign(actsState, newsFilter(data, 1));      
        newsState.data = newsFilter(data, 2);
        newsState.totalPage = Math.ceil(newsState.data.length / pageSize);
        noticesState.data = newsFilter(data, 1);
        noticesState.totalPage = Math.ceil(noticesState.data.length / pageSize);
        actsState.data = newsFilter(data, 3);
        actsState.totalPage = Math.ceil(actsState.data.length / pageSize);

        renderItem('noticesBox', noticesState);
        renderItem('newsBox', newsState);
        renderItem('activitiesBox', actsState);

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
                go(datamark, 'newsBox', newsState);
                break;
            case 'notices':
                go(datamark, 'noticesBox', noticesState);
                break;
            case 'acti':
                go(datamark, 'activiesBox', actsState);
                break;
            default:
                break;
        }
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[46]);