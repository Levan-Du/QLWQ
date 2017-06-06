import { GetCodeUrl } from './WxHelper';

// var API_URL = 'http://localhost:9244/api';
// var API_URL = 'http://192.168.1.250/api';
// var API_URL = 'http://117.78.46.33:8057/api';
var API_URL = 'http://139.159.216.193:8030/api';

Date.prototype.Format = function(fmt) { //author: meizz 
    var o = {
        'M+': this.getMonth() + 1, //月份 
        'd+': this.getDate(), //日 
        'H+': this.getHours(), //小时 
        'm+': this.getMinutes(), //分 
        's+': this.getSeconds(), //秒 
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度 
        'S': this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}
String.prototype.ltrim = function() {
    return this.replace(/(^\s*)/g, '');
}
String.prototype.rtrim = function() {
    return this.replace(/(\s*$)/g, '');
}


if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback) {
        var arr = this;
        for (var i in arr) {
            callback(arr[i], parseInt(i));
        }
    }
}

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var arr = [];
        this.forEach(function(el, i) {
            if (callback(el, i)) {
                arr.push(el);
            }
        });
        return arr;
    }
}

export var getQueryString = () => {
    var result = location.search.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'));
    if (!result) return {};
    for (var i = 0; i < result.length; i++) {
        result[i] = result[i].substring(1);
    }
    var oo = {};
    for (var i in result) {
        var ss = result[i].split('=');
        oo[ss[0]] = ss[1];
    }
    return oo;
}

export var getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

export var setCookie = (name, value) => {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

export var clearCookie = (name) => {
    setCookie(name, "", -1);
}

export var htmlEncode = (str) => {
    var ele = document.createElement('span');
    ele.appendChild(document.createTextNode(str));
    return ele.innerHTML;
}

export var htmlDecode = (str) => {
    var ele = document.createElement('span');
    ele.innerHTML = str;
    return ele.textContent;
}


export var getBoxSize = (box, sizeType) => {
    var size = 0,
        $box = $(box);
    if (sizeType == 'height') {
        size = parseFloat($box.height()) +
            parseFloat($box.css('paddingTop')) +
            parseFloat($box.css('paddingBottom')) +
            parseFloat($box.css('marginTop')) +
            parseFloat($box.css('marginBottom')) +
            parseFloat($box.css('borderTop')) +
            parseFloat($box.css('borderBottom'));
    } else if (sizeType == 'width') {
        size = parseFloat($box.width()) +
            parseFloat($box.css('paddingTop')) +
            parseFloat($box.css('paddingBottom')) +
            parseFloat($box.css('borderTop')) +
            parseFloat($box.css('borderBottom')) +
            parseFloat($box.css('marginLeft')) +
            parseFloat($box.css('marginRight'));
    } else {
        size = 0;
    }
    return size;
}


export var getBoxSize$ = ($box, sizeType) => {
    var size = 0;
    if (sizeType == 'height') {
        size = parseFloat($box.outerHeight()) +
            parseFloat($box.css('marginTop')) +
            parseFloat($box.css('marginBottom'));
    } else if (sizeType == 'width') {
        size = parseFloat($box.outerWidth()) +
            parseFloat($box.css('marginLeft')) +
            parseFloat($box.css('marginRight'));
    } else {
        size = 0;
    }
    return size;
}

export var randomChar = (l) => {
    var x = '0123456789qwertyuioplkjhgfdsazxcvbnm',
        tmp = '',
        timestamp = new Date().getTime();

    for (var i = 0; i < 2; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }

    var code = timestamp + tmp;
    return code.substring(code.length - l, code.length);
}

export var dd = (function($) {
    function doAjax(uri, method, data, succFunc, errFunc) {
        var option = {
            url: API_URL + (uri.substring(0, 1) === '/' ? uri : '/' + uri),
            method: method,
            dataType: 'jsonp',
            jsonp: 'jsonpcb',
            success: succFunc,
            error: errFunc
        }
        if (data) {
            option['data'] = data;
        }
        $.ajax(option);
    }
    return {
        Get: function(uri, data, succFunc, errFunc) {
            doAjax(uri, 'GET', data, succFunc, errFunc);
        },
        Post: function(uri, data, succFunc, errFunc) {
            doAjax(uri, 'POST', data, succFunc, errFunc);
        }
    }
})($);

export var jsonToParams = (jsonObj) => {
    var parms = '';
    for (var i in jsonObj) {
        parms += '&' + i + '=' + jsonObj[i];
    }
    return parms.substring(1, parms.length);
}

export var paramsToJson = (params) => {
    var o = {},
        r = params.split('&');

    r.forEach(el => {
        var ss = el.split('=');
        o[ss[0]] = ss.length > 1 ? ss[1] : null;
    });
    return o;
}


$.extend({
    showLoginModal: (option) => {
        if ($('.lev-modal-login').length > 0) {
            return;
        }

        var code = randomChar(4),
            modal_id = 'modal_' + code,
            $modal_id = '#' + modal_id,

            form_id = 'form_' + code,
            $form_id = '#' + form_id,

            account_id = 'txt_account_' + code,
            $account_id = '#' + account_id,

            pwd_id = 'txt_pwd' + code,
            $pwd_id = '#' + pwd_id,

            valiImg_id = 'valiImg' + code,
            $valiImg_id = '#' + valiImg_id,

            valicode_id = 'txt_valicode_' + code,
            $valicode_id = '#' + valicode_id,

            submit_id = 'login_submit' + code,
            $submit_id = '#' + submit_id,

            btn_wx_id = 'btn_wx_' + code,
            $btn_wx_id = '#' + btn_wx_id,

            ifrme_wx_id = 'ifrme_wx_' + code,
            $ifrme_wx_id = '#' + ifrme_wx_id,

            logoiconUrl = require('../assets/imgs/logoicon.png'),
            tmpl = `        
<div id="${modal_id}" class="modal lev-modal-login">
    <div class="modal-mask"></div>
    <div class="modal-content modal-login">
        <article class="container">
        <h3>
            <img src="${logoiconUrl}">
            <span>登录棋游账号</span> 
            <a class="btn-close" href=""><span class="iconfont icon-cha"></span></a>
        </h3>
        <section class="login">
            <form id="${form_id}">            
                <p class="error">
                错误
                </p>
                <p class="row first">
                    <label class="label" for="${account_id}">
                        <span class="iconfont icon-ren"></span>
                        <input id="${account_id}" type="text" name="account" placeholder="账号/手机号">
                    </label>
                </p>
                <p class="row">
                    <label class="label" for="${pwd_id}">
                        <span class="iconfont icon-lock-fill"></span>
                        <input id="${pwd_id}" type="password" name="pwd" placeholder="密码">
                    </label>
                </p>
                <p class="row vali clearfix">
                    <label class="label" for="${valicode_id}">
                        <input id="${valicode_id}" type="text" name="valicode" placeholder="验证码" autocomplete="off">
                    </label>
                    <a id="btn_valiImg">
                        <img id="${valiImg_id}" src="" alt="验证码">
                    </a>
                </p>
                <p id="${submit_id}" class="label label-submit">
                    <input id="${submit_id}" type="submit" name="logon" value="登录">
                </p>
                <p class="row register">
                    <a href="register.html">注册</a>
                </p>
            </form>
        </section>
        <section class="login-other">
            <p>使用以下方式登录</p>
            <p>
                <a class="wx" id="${btn_wx_id}"><span class="iconfont icon-weixin"></span></a>
            </p>
        </section>
        </article>
    </div>
    <div class="modal-wx">
        <article class="container">
            <p class="close-bar"><a id="modal_wx_btnclose_${code}" class="btn btn-close"><span class="iconfont icon-cha"></span></a></p>
            <iframe id=${ifrme_wx_id}>

            </iframe>
        </article>
    </div>
</div>`;
        $('body').append(tmpl);

        $($account_id).focus();

        var loadValidateImg = () => {
                dd.Get('/Login/ValidateImage', null,
                    (res) => {
                        $($valiImg_id).prop('src', res);
                    },
                    (err) => {
                        showError(err);
                    });
            },
            showError = (msg) => {
                var errorBox = $($form_id).find('.error');
                errorBox.text(msg);
                errorBox.prop('title', msg);
                // errorBox.removeClass('visible');
                errorBox.hide();
                errorBox.addClass('visible');
                errorBox.fadeIn('normal', () => {});
            },
            hideError = () => {
                var errorBox = $($form_id).find('.error');
                errorBox.text('');
                errorBox.prop('title', msg);
                errorBox.removeClass('visible');
                errorBox.fadeOut();
            },
            validCodeCheck = (code, callback) => {
                dd.Post('/Login/CheckValidaeImage', 'valicode=' + code, (res) => {
                    if (res.status === 'success') {
                        callback && callback();
                    } else {
                        showError('验证码输入不正确！');
                        $($valicode_id).focus();
                    }
                }, (err) => {
                    $($valicode_id).focus();
                });
            };

        loadValidateImg();

        $($modal_id + '.modal h3 .btn-close').click((e) => {
            e.preventDefault();
            $($modal_id).remove();
        });

        $($modal_id + '.modal input').focus((e) => {
            $(e.currentTarget).parent('label').addClass('focus');
        });

        $($modal_id + '.modal input').blur((e) => {
            $(e.currentTarget).parent('label').removeClass('focus');
        });

        $($modal_id + '.modal #btn_valiImg').click((e) => {
            loadValidateImg();
        });

        $($form_id).submit((e) => {
            e.preventDefault();
            var target = $(e.currentTarget),
                data = target.serialize(),
                o = paramsToJson(data);

            if (!o.account) {
                showError('请输入用户名！');
                $($account_id).focus();
                return;
            }
            if (!o.pwd) {
                showError('请输入密码！');
                $($pwd_id).focus();
                return;
            }

            validCodeCheck($($valicode_id).val(), () => {
                var url = '/Login/AccountLogon',
                    submitBtn = $($submit_id);

                if (/1\d{10}/.test(o.account)) {
                    url = '/Login/AccountLogonByMobile';
                }
                submitBtn.val('正在登录...');
                submitBtn.prop('disabled', 'disabled');

                dd.Post(url, data, (res) => {
                    if (res.status !== 'success') {
                        submitBtn.val('登录');
                        submitBtn.removeAttr('disabled');
                        submitBtn.removeProp('disabled');
                        showError(res.message);

                        loadValidateImg();
                    } else {
                        setCookie('account', res.message.m_accounts);
                        window.location.reload();
                    }

                }, (err) => {
                    submitBtn.val('登录');
                    submitBtn.removeAttr('disabled');
                    submitBtn.removeProp('disabled');
                    showError(err);

                    loadValidateImg();
                });
            });
        });

        $($btn_wx_id).click((e) => {
            $($modal_id + ' .modal-wx').addClass('visible');
            var url = GetCodeUrl();
            $($ifrme_wx_id).prop('src', url);
        });

        $('#modal_wx_btnclose_' + code).click((e) => {
            $($modal_id + ' .modal-wx').removeClass('visible');
        })

        return {
            close: () => {
                $($modal_id).remove();
            }
        }
    }
});
