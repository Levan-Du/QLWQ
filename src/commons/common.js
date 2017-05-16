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

// export var getStyle = (element, css) => {
//     if (getComputedStyle) {
//         return getComputedStyle(element)[css];
//     } else {
//         return element.currentStyle[css];
//     }
// }

// export var addEvent = (element, type, eventHandler) => {
//     if (element.addEventListener) {
//         element.addEventListener(type, eventHandler);
//     } else if (element.attachEvent) {
//         element.attachEvent('on' + type, eventHandler);
//     } else {
//         element[on + type] = eventHandler;
//     }
// }

// JavaScript Document
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
    // function getXhr(option) {
    //     var xhr = null;
    //     if (window.XMLHttpRequest) {
    //         xhr = new XMLHttpRequest();
    //     } else {
    //         xhr = new ActiveXOjbect('Microsoft.XMLHTTP');
    //     }
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState == 4) {
    //             if (xhr.status == 200) {
    //                 option.success(xhr.responseText);
    //             } else {
    // option.error(xhr.)
    //             }
    //         }
    //     };
    //     xhr.open(option.method, option.url, true);
    //     xhr.send(option.data);
    // }

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
