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
    // var url = 'http://localhost:55555/api';
    var url = 'http://192.168.1.250/api';
    // var url = 'http://117.78.46.33:8057/api';
    function doAjax(uri, method, data, succFunc, errFunc) {
        var option = {
            url: url + (uri.substring(0, 1) === '/' ? uri : '/' + uri),
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

$.extend({
    showLoginModal: (option) => {
        if ($('.lev-modal-login').length > 0) {
            return;
        }

        var code = randomChar(4),
            modal_id = 'modal_' + code,
            $modal_id = '#' + modal_id,
            valiImg_id = 'valiImg' + code,
            $valiImg_id = '#' + valiImg_id,
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
            <form>
                <p class="row">
                    <label class="label" for="txt_account">
                        <span class="iconfont icon-ren"></span>
                        <input id="txt_account" type="text" name="account" placeholder="账号">
                    </label>
                </p>
                <p class="row">
                    <label class="label" for="txt_pwd">
                        <span class="iconfont icon-lock-fill"></span>
                        <input id="txt_pwd" type="text" name="pwd" placeholder="密码">
                    </label>
                </p>
                <p class="row vali clearfix">
                    <label class="label" for="txt_valicode">
                        <input id="txt_valicode" type="text" name="valicode" placeholder="验证码">
                    </label>
                    <a id="btn_valiImg">
                        <img id="${valiImg_id}" src="" alt="验证码图片">
                    </a>
                </p>
                <p for="login_submit" class="label label-submit">
                    <input id="login_submit" type="submit" name="logon" value="登录">
                </p>
                <p class="row textright">
                    <a href="register.html">立即注册</a>
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

        var loadValidateImg = () => {
            dd.Get('/Login/ValidateImage', null,
                (res) => {
                    $($valiImg_id).prop('src', res);
                },
                (err) => {
                    console.log(err);
                });
        }
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

        return {
            close: () => {
                $($modal_id).remove();
            }
        }
    }
})
