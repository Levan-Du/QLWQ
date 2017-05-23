import { dd, getCookie } from './common';

export var loadLoginInfo = (cb) => {
    var account = getCookie('account'),
        qs = 'account=' + account;

    if (!account) {
        return;
    }

    var userShow = $('#login_user a.login-name');
    userShow.text(account);
    $('#login_user').show();
    $('#login_action').hide();
    
    dd.Get('/Login/AccountInfo', qs,
        (res) => {
            if (res.status === 'success') {
                var u = res.message[0];
                cb(u);
            }
        }, (err) => {
            alert(err);
        }
    );
}
