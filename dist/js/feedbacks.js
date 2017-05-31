webpackJsonp([8],{

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(21);

var _common = __webpack_require__(1);

var comm = _interopRequireWildcard(_common);

var _pages = __webpack_require__(3);

var _login = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(function (e) {
    (0, _pages.initNav)('feedbacls');
    (0, _pages.initNavAction)();
    loadLogin();
    (0, _pages.initLoginAction)();
    onQuesListItemChecked();
    (0, _login.initLoginUserAction)();
});

var loadLogin = function loadLogin() {
    (0, _login.loadLoginInfo)(function (res) {});
};

var onQuesListItemChecked = function onQuesListItemChecked() {
    var itemTitleBtns = $('#ques_list .item .title-btn'),
        currentBtn = $('#ques_list .item.checked .title-btn'),
        currentCont = $('#ques_list .item.checked .cont');

    itemTitleBtns.click(function (e) {
        var itemCont = $(e.currentTarget).siblings('.cont'),
            parentItem = itemCont.parent(),
            isFinish1 = false,
            isFinish2 = false;

        if (parentItem.prop('class').indexOf('checked') !== -1) {
            return;
        }

        parentItem.addClass('checked');
        itemCont.animate({ opacity: 1, height: '300px' }, 240, 'swing', function () {
            isFinish1 = true;
            if (isFinish2) {
                currentCont = itemCont;
            }
        });

        currentCont.animate({ opacity: 0, height: 0 }, 240, 'swing', function () {
            isFinish2 = true;
            currentCont.parent().removeClass('checked');
            if (isFinish1) {
                currentCont = itemCont;
            }
        });
    });
};

var onSubmit = function onSubmit() {
    $('#form_feedback').submit(function (e) {
        e.preventDefault();
        var data = $(e.currentTarget).serialize();
        comm.dd.Post('/News/AddFeedback', data + '&ftype=1', function (res) {
            if (res.status !== 'success') {
                alert(res.message);
            }
        }, function (err) {
            alert(err);
        });
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[41]);