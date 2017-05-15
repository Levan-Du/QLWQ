import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';

$((e) => {
    initModalLogin();
});

var initModalLogin = () => {
    $('.main .mid .btn-link').click((e) => {
        $('.modal').show();
        loadValidateImg();
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

    $('#btn_valiImg').click((e) => {
        loadValidateImg();
    });
}


var loadValidateImg = () => {
    comm.dd.Get('/Login/ValidateImage', null,
        (res) => {
            $('#valiImg').prop('src', res);
        },
        (err) => {
            console.log(err);
        });
}
