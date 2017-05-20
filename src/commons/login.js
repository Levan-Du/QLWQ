import { dd, getCookie } from './common';
export var loadLoginInfo = (cb) => {
    var account = getCookie('account'),
        qs = 'account=' + account;

    console.log(account);
    dd.Get('/Login/AccountInfo', qs,
        (res) => {
            if (res.status === 'success') {
                var u = res.message;
                var userShow = $('#login_user a.login-name');
                userShow.text(account);
                $('#login_user').show();
                $('#login_action').hide();
            }
            cb(res);
        }, (err) => {
            alert(err);
        }
    );
}
