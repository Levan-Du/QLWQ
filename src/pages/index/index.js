import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import '../../commons/common';
import carousel from '../../commons/carousel';

$((e) => {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        imgUrl = '',
        tmpl = imgs.map((el) => {
            imgUrl = require(`../../assets/imgs/${el}`)
            return '<img src="' + imgUrl + '">';
        }).join('');

    $('#nav-img-box').append(tmpl);

    var imgEles = $('#nav-img-box img'),
        btnEles = $('.btn-wrapper .btn-circle');
    carousel(imgEles, btnEles, 5000, null);
});
