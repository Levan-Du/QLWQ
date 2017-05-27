import { dd, getCookie, clearCookie } from './common';

export var loadLoginInfo = (cb) => {
    var account = getCookie('account'),
        qs = 'account=' + account;

    if (!account) {
        return;
    }

    $('#login_user').show();
    $('#login_action').hide();

    dd.Get('/Login/AccountInfo', qs,
        (res) => {
            if (res.status === 'success') {
                var u = res.message[0];
                $('#show_user').text(u.NickName);
                $('#login_mobile').text(u.Accounts);
                cb(u);
            }
        }, (err) => {
            alert(err);
        }
    );
}


export var initLoginUserAction = () => {
    var userEle = $('#login_user'),
        exitEle = $('#login_user_setting_exit');

    userEle.mouseenter((e) => {
        userEle.addClass('hover');
        userEle.find('#login_user_setting').addClass('visible');
    });
    userEle.mouseleave((e) => {
        userEle.removeClass('hover');
        userEle.find('#login_user_setting').removeClass('visible');
    });
    exitEle.click((e) => {
        clearCookie('account');
        window.location.reload();
    });
}
