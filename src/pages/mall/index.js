import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';

$((e) => {
    initAction();
});


var initAction = () => {
    $('#btn_agree_tiaoli').click((e) => {
        var iconfont = $(e.currentTarget).find('.iconfont'),
            claProp = iconfont.prop('class'),
            errorEle = $('#error_tiaoli');
        console.log(claProp);
        if (claProp.indexOf('icon-weigouxuan') !== -1) {
            iconfont.removeClass('icon-weigouxuan');
            iconfont.addClass('icon-icon162');
            errorEle.hide();
        } else {
            iconfont.removeClass('icon-icon162');
            iconfont.addClass('icon-weigouxuan');
            errorEle.show();
        }
    });
}
