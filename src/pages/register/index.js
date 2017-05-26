import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction, initNav,initNavAction } from '../../commons/pages';
import { loadLoginInfo,initLoginUserAction } from '../../commons/login';

$((e) => {
    initNav('register');
    initNavAction();
    loadLogin();
    initLoginAction();
    initLoginAction2();
    initNavAction();
    initLoginUserAction();
});


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

var loginModal = null;
var initLoginAction2 = () => {
    $('.main .mid .btn-link').click((e) => {
        loginModal = $.showLoginModal();
    });
}

