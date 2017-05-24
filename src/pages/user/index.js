import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction } from '../../commons/pages';
import { loadLoginInfo } from '../../commons/login';
import { getGenderDes, initNav,initNavAction } from '../../commons/pages';


$((e) => {
    initNav('user');
    loadLogin();
    initLoginAction();
    initLoginAction2();
    initNavAction();
});

var loginModal = null;
var initLoginAction2 = () => {
    $('.main .mid .btn-link').click((e) => {
        loginModal = $.showLoginModal();
    });
}


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

var loadLogin = () => {
    loadLoginInfo((u) => {
        $('#main_username').text(u.Accounts + ' ' + getGenderDes(u.Gender));
        $('#main_row_username').css('visibility', 'visible');
        $('#main_grade').text(u.MemberOrder);
        $('#main_score').text(u.Score);
        $('#main_diamond').text(u.Diamond);
        $('#main_rcard').text(u.RCard);
        $('#main_points').text(u.Point);
        $('#btn_login_main').hide();
    });
}
