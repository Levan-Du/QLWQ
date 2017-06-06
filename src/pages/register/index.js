import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction, initNav, initNavAction } from '../../commons/pages';
import { loadLoginInfo, initLoginUserAction } from '../../commons/login';

$((e) => {
    initNav('register');
    initNavAction();
    loadLogin();
    initLoginAction();
    initLoginAction2();
    initNavAction();
    initLoginUserAction();
    onSubmit();
    initFormAction();
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

var onSubmit = () => {
    $('#reg_form').submit((e) => {
        e.preventDefault();
        var data = $(e.currentTarget).serialize(),
            o = comm.paramsToJson(data);
        console.log(o);
        if (!o.account) {
            showError('txt_account', 'account_error', '请输入用户名！');
            return;
        }

        if (!o.password) {
            showError('txt_pwd', 'pwd_error', '请输入密码！');
            return;
        }

        if (o.password2 !== o.password) {
            showError('txt_pwd2', 'pwd2_error', '确认密码输入不正确！');
            return;
        }

        if (!o.agree) {
            showError('chk_agree', 'agree_error', '必须接受协议才能注册！');
            return;
        }


        comm.dd.Post('/Login/AccountRegister', data,
            (res) => {
                if (res.status === 'success') {
                    onSubmitSucced(o);
                    comm.setCookie('account', o.account);
                } else {
                    alert(res.message);
                }
            },
            (err) => {
                alert(err.message);
            }
        );
    });
}

var showError = (txtId, errId, msg) => {
    var errEle = $('#' + errId);
    errEle.text(msg);
    errEle.show();
    $('#' + txtId).focus();
}
var hideError = (errId) => {
    var errEle = $('#' + errId);
    errEle.hide();
}

var onSubmitSucced = (o) => {
    $('#success_box').show();
    $('#form_box').hide();

    $('#success_account').text(o.account);

    var seconds = 10;
    $('#success_account').text(seconds);
    var interval = setInterval(() => {
        seconds--;
        $('#success_account').text(seconds);
        if (!seconds) {
            clearInterval(interval);
            window.location.href = "user.html";
        }
    }, 1000);
}

var initFormAction = () => {
    var onChange = (txtId, errId, checkFunc) => {
            $('#' + txtId).change((e) => {
                var target = $(e.currentTarget),
                    txt = target.val().trim();
                checkFunc(txtId, errId, txt);
            });
        },
        checkLength = (minLenth, maxLength, msg) => {
            return (txtId, errId, txt) => {
                if (txt.length < minLenth) {
                    showError(txtId, errId, msg);
                } else {
                    hideError(errId);
                }
            }
        }
    onChange('txt_account', 'account_error', checkLength(6, 12, '用户名长度不能少于6，不能超过12'));
    onChange('txt_account', 'account_error', (txtId, errId, txt) => {
        if (/\s/.test(txt)) {
            showError(txtId, errId, '用户名不能包含空格！');
        } else {
            hideError(errId);
        }
    });

    onChange('txt_pwd', 'pwd_error', checkLength(6, 12, '用户名长度不能少于8，不能超过20'));
    onChange('txt_pwd', 'pwd_error', (txtId, errId, txt) => {
        if (/\W/.test(txt)) {
            showError(txtId, errId, '密码只能包含字母数字下划线，不能包含其他字符');
        } else {
            hideError(errId);
        }
    });

}
