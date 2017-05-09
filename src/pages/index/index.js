import './index.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import '../../commons/common';
import carousel from '../../commons/carousel';

$((e) => {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        tmpl = imgs.map((el) => {
            return $ `<img src="../../assets/imgs/${el}">`;
        });

    $('#nav-img-box').append(tmpl);

    var imgEles = $('#nav-img-box img'),
        btnEles = $('.btn-wrapper .btn');
    carousel(imgEles, btnEles, 3000, null);
});
