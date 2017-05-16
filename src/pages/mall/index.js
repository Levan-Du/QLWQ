import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';

$((e) => {
    initAction();
    loadGoods();
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var loadGoods = () => {

    var data = arr.map(el => {
        var istr = '00' + el;
        return {
            ImgUrl: require('../../assets/goods/good-' + istr.substring(istr.length - 2, istr.length) + '.jpg'),
            Price: 15
        }
    });

    renderExchangeByDiamondGrid(data);
}

var renderExchangeByDiamondGrid = (data) => {
    var tmpl = data.map(el => `
        <li class="grid-item">
            <div class="panel">
                <img src="${el.ImgUrl}">
                <span><span>${el.Price}</span>钻石</span>
            </div>
        </li>
    `).join('');

    $('#grid_good_exchange_diamond').html(tmpl);
}
