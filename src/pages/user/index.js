import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction } from '../../commons/pages';
import { loadLoginInfo, initLoginUserAction } from '../../commons/login';
import { getGenderDes, initNav, initNavAction } from '../../commons/pages';


$((e) => {
    initNav('user');
    loadLogin();
    initLoginAction();
    initLoginAction2();
    initNavAction();
    initLoginUserAction();
    ifShowLoginModal();
});

var loginModal = null;

var showLoginModal = () => {
    loginModal = $.showLoginModal();
}

var ifShowLoginModal = () => {
    if (comm.getQueryString()['showLoginDialog']) {
        showLoginModal();
    }
}

var initLoginAction2 = () => {
    $('.main #btn_login_main').click((e) => {
        showLoginModal();
    });
}


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

var loadLogin = () => {
    loadLoginInfo((u) => {
        $('#main_username').text(u.Accounts);
        $('#main_call').text(getGenderDes(u.Gender))
        $('#lbl_btn_login_main').removeClass('visible');
        $('#btn_login_main').removeClass('visible');
        $('#main_username').addClass('visible');
        $('#main_call').addClass('visible');
        $('#main_grade').text(u.MemberOrder);
        $('#main_score').text(u.Score);
        $('#main_diamond').text(u.Diamond);
        $('#main_rcard').text(u.RCard);
        $('#main_points').text(u.Point);
        $('#btn_login_main').hide();
    });
}
