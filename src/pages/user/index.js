import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';

$((e) => {
    initModalLogin();
});

var initModalLogin = () => {
    $('.main .mid .btn-link').click((e) => {
        $('.modal').show();
    });

    $('.modal h3 .btn-close').click((e) => {
        e.preventDefault();
        $('.modal').hide();
    });

    $('input').focus((e) => {
        $(e.currentTarget).parent('label').addClass('focus');
    });
    $('input').blur((e) => {
        $(e.currentTarget).parent('label').removeClass('focus');
    });
}
