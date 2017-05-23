// var API_URL = 'http://localhost:9244/api';
var API_URL = 'http://192.168.1.250/api';
// var API_URL = 'http://117.78.46.33:8057/api';

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
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
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

            logoiconUrl = require('../assets/imgs/logoicon.png'),
            tmpl = `        
<div id="${modal_id}" class="modal lev-modal-login">
    <div class="modal-mask"></div>
    <article class="modal-content modal-login">
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
                    <label class="label" for="txt_account">
                        <span class="iconfont icon-ren"></span>
                        <input id="${account_id}" type="text" name="account" placeholder="账号">
                    </label>
                </p>
                <p class="row">
                    <label class="label" for="txt_pwd">
                        <span class="iconfont icon-lock-fill"></span>
                        <input id="${pwd_id}" type="text" name="pwd" placeholder="密码">
                    </label>
                </p>
                <p class="row vali clearfix">
                    <label class="label" for="txt_valicode">
                        <input id="${valicode_id}" type="text" name="valicode" placeholder="验证码">
                    </label>
                    <a id="btn_valiImg">
                        <img id="${valiImg_id}" src="" alt="验证码">
                    </a>
                </p>
                <p for="login_submit" class="label label-submit">
                    <input id="${submit_id}" type="submit" name="logon" value="登录">
                </p>
            </form>
        </section>
        <section class="login-other">
            <p>使用以下方式登录</p>
            <p>
                <a class="qq"><span class="iconfont icon-iconfontqq"></span></a>
                <a class="wx"><span class="iconfont icon-weixin"></span></a>
            </p>
        </section>
    </article>
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
            isValicodePass = false,
            showError = (msg) => {
                var errorBox = $($form_id).find('.error');
                errorBox.text(msg);
                errorBox.prop('title', msg);
                errorBox.addClass('visible');
            },
            hideError = () => {
                var errorBox = $($form_id).find('.error');
                errorBox.text('');
                errorBox.prop('title', msg);
                errorBox.removeClass('visible');
            },
            validCodeCheck = (code) => {
                dd.Post('/Login/CheckValidaeImage', 'valicode=' + code, (res) => {
                    if (res.status === 'success') {
                        isValicodePass = true;
                    } else {
                        isValicodePass = false;
                        showError('验证码输入不正确！');
                    }
                }, (err) => {
                    isValicodePass = false;
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

        $($valicode_id).change((e) => {
            var code = $(e.currentTarget).val();
            validCodeCheck(code);
        });

        $($valicode_id).blur((e) => {
            var code = $(e.currentTarget).val();
            validCodeCheck(code);
        });

        $($form_id).submit((e) => {
            e.preventDefault();
            var target = $(e.currentTarget);

            var data = target.serialize(),
                o = paramsToJson(data);

            if (!o.account) {
                showError('请输入用户名！');
                return;
            }
            if (!o.pwd) {
                showError('请输入密码！');
                return;
            }
            if (!isValicodePass) {
                showError('验证码输入不正确！');
                return;
            }

            loadValidateImg();

            var submitBtn = $($submit_id);
            submitBtn.val('正在登录...');
            submitBtn.prop('disabled', 'disabled');
            dd.Post('/Login/AccountLogon', data, (res) => {
                if (res.status !== 'success') {
                    showError(res.message);
                    submitBtn.val('登录');
                    submitBtn.removeAttr('disabled');
                    submitBtn.removeProp('disabled');
                    console.log(res.message);
                } else {
                    setCookie('account', o.account);
                    location.href = 'user.html';
                }
            }, (err) => {
                showError(err);
                submitBtn.val('登录');
                submitBtn.removeAttr('disabled');
                submitBtn.removeProp('disabled');
            });
        });

        return {
            close: () => {
                $($modal_id).remove();
            }
        }
    }
});
