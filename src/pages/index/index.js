import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import carousel from '../../commons/carousel';
// import move from '../../commons/move';
import goodImgs from '../../assets/games/gamesImgs.json';

var packGoodsImgs = () => {
    var imgs = JSON.parse(goodImgs);
    imgs.forEach((el) => {
        require('../../assets/games/' + el);
    });
}

$((e) => {
    renderBarnerImage();
    renderNews();
    renderGoodsImages();
});

var renderBarnerImage = () => {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        imgUrl = '',
        hashcode = comm.randomChar(8),
        tmpl = imgs.map((el) => {
            imgUrl = require(`../../assets/imgs/${el}`)
            return `<img src="${imgUrl}?${hashcode}">`;
        }).join('');

    $('#nav-img-box').append(tmpl);

    var imgEles = $('#nav-img-box img'),
        btnEles = $('.nav .btn-wrapper .btn-circle');
    carousel(imgEles, btnEles, 5000);
}

var renderNews = () => {
    var newsFilter = (arr, classId) => {
        var arr2 = arr.filter((el, i) => {
            return el.ClassID == classId;
        });
        return arr2.filter((el, i) => {
            return i < 4;
        });
    }
    var renderNews = (id, news) => {
        var tmpl = news.map((el) => {
            return `<p>${el.Subject}</p>`;
        }).join('');

        $('#' + id).append(tmpl);

    }

    comm.dd.Get('/News/HotNewList', null,
        (res) => {
            var news = newsFilter(res.message, 2),
                notices = newsFilter(res.message, 3);
            // activities = newsFilter(res.message, 1);

            renderNews('noticesBox', notices);
            renderNews('newsBox', news);
            // renderNews('activitiesBox', activities);
        });
}

var renderGoodsImages = () => {
    comm.dd.Get('/GameGameItem/HotGameList', null,
        (res) => {
            var goodArr1 = res.message.filter((el) => {
                    return !!el.ImgUrl;
                }),
                goodArr2 = goodArr1.filter((el, i) => {
                    return i < 16;
                }),
                tmpl = goodArr2.map(el => {
                    return '<li class="img-item"><img src="' + el.ImgUrl + '" alt="游戏图片"></li>';
                });

            $('#goodsImgBox').append(tmpl);
            initMoveCarousel();
        });
}

var initMoveCarousel = () => {
    var btns = $('.goods-wraper .btn-circle'),
        currentIndex = 0;

    btns.click((e) => {
        var i = btns.index(e.currentTarget);
        if (currentIndex === i) {
            return;
        }
        $(btns[currentIndex]).removeClass('checked');
        $(e.currentTarget).addClass('checked');


        var lr = (i > currentIndex),
            imgWrapEle = $('#goodsImgBox'),
            diffIndex = Math.abs(i - currentIndex),
            itarget = parseFloat($('.goods-wraper .img-box').width()) * diffIndex,
            marginLeft = parseFloat(imgWrapEle.css('marginLeft')),
            option = lr ? { marginLeft: marginLeft - itarget } : { marginLeft: marginLeft + itarget },
            speed = diffIndex * 300;

        console.log(option, speed);
        imgWrapEle.animate(option, speed, 'swing', () => {

        });

        currentIndex = i;
    });
}
