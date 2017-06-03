// https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxe779be2d6f2dd4fd&secret=13170a92690e3f494f7880b3edbbb3ca&code=031PUOfZ0kCQtZ17ffjZ0RBxfZ0PUOfr&grant_type=authorization_code
// https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=wxe779be2d6f2dd4fd&grant_type=refresh_token&refresh_token=RJZKbAAfdAWWyYN5WiqNpTx8zd1WTOw-dYqADEmVzcbsU0BdS_FHKM-eYRlBimHULoXBiVxYB_cTjRjlI3sPlJCqavOQuuaJKHg778kYndw

var APP_ID = 'wxe779be2d6f2dd4fd';
var APP_SECRET = '13170a92690e3f494f7880b3edbbb3ca';
var REDIRECT_URI = 'http://www.gzqykj.com';
var REFRESH_TOKEN = '';
var wx_code_url = 'https://open.weixin.qq.com/connect/qrconnect?appid=#APPID#&redirect_uri=#REDIRECT_URI#&response_type=#RESPONSE_TYPE#&scope=#SCOPE#&state=#STATE#';
var wx_token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=#APPID#&secret=#SECRET#&code=#CODE#&grant_type=#GRANT_TYPE#';
var wx_refreshtoken_url = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=#APPID#&grant_type=#GRANT_TYPE#&refresh_token=#REFRESH_TOKEN#';
var wx_userinfo_url = 'https://api.weixin.qq.com/sns/userinfo?access_token=#ACCESS_TOKEN&openid=##&scope=#SCOPE#';

var Get = (url, succFunc) => {
    $.getJSON(url).done(function(res) {
        succFunc(res);
    }).fail(function(err) {
        alert(err.responseText);
    });
}

export var GetCodeUrl = () => {
    return wx_code_url.replace('#APPID#', APP_ID)
        .replace('#REDIRECT_URI#', encodeURIComponent(REDIRECT_URI))
        .replace('#RESPONSE_TYPE#', 'code')
        .replace('#SCOPE#', 'snsapi_login')
        .replace('#STATE#', 'qywl');
}

export var GetToken = (code, cb) => {
    var url = wx_token_url.replace('#APPID#', APP_ID)
        .replace('#SECRET#', APP_SECRET)
        .replace('#CODE#', code)
        .replace('#GRANT_TYPE#', 'authorization_code');
    Get(url, function(res) {});
}

export var LoadRefreshToken = () => {
    REFRESH_TOKEN = '';
}

export var RefreshToken = () => {
    var url = wx_refreshtoken_url.replace('#APPID#', APP_ID)
        .replace('#GRANT_TYPE#', 'refresh_token')
        .replace('#REFRESH_TOKEN#', REFRESH_TOKEN);
    Get(url, function(res) {});
}

export var GetWxUserInfo = (access_token) => {
    var url = wx_refreshtoken_url.replace('#ACCESS_TOKEN#', access_token)
        .replace('#SCOPE#', 'snsapi_base')
        .replace('#OPENID#', OPENID);
    Get(url, function(res) {});
}
