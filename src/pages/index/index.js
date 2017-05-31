import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import move from '../../commons/move';
import { initLoginAction, initTab, initNav, initNavAction } from '../../commons/pages';
import carousel from '../../commons/carousel';
import { loadLoginInfo, initLoginUserAction } from '../../commons/login';
import { news, goods } from './mock';


$((e) => {
    initNav('index');
    initNavAction();
    loadLogin();
    initLoginAction();
    initTab();
    renderBarnerImage();
    renderNews();
    renderGoodsImages();
    initLoginUserAction();
});


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

var renderBarnerImage = () => {
    var imgs = ['barner-01.png', 'barner-02.png', 'barner-03.png'],
        imgUrl = '',
        hashcode = comm.randomChar(8),
        tmpl = imgs.map((el) => {
            imgUrl = require(`../../assets/imgs/${el}`)
            return `<img src="${imgUrl}?${hashcode}">`;
        }).join('');

    $('#header_barner_imgbox').append(tmpl);

    var imgEles = $('#header_barner_imgbox img'),
        btnEles = $('.barner .btn-wrapper .btn-circle');
    carousel(imgEles, btnEles, 5000);
}

var getNews = (cb) => {
    cb(news);
    // var newsFilter = (arr, classId) => {
    //     var arr2 = arr.filter((el, i) => {
    //         return el.ClassID == classId;
    //     });
    //     return arr2.filter((el, i) => {
    //         return i < 4;
    //     });
    // }
    // comm.dd.Get('/News/HotNewList', null,
    //     (res) => {
    //         var news = newsFilter(res.message, 2);
    //         cb(news);
    //     });
}

var renderNews = () => {
    var renderNewsItem = (data) => {
        var tmpl = data.map((el) => {
            return `<li class="item">
                        <p>${el.Subject}</p>
                        <p class="time">[${new Date(el.IssueDate).Format('MM/dd')}]</p>
                    </li>`;
        }).join('');

        $('#news_list').html(tmpl);
    }
    getNews((data) => {
        renderNewsItem(data);
    })
}

var getGoods = (cb) => {
    cb(goods);
    // comm.dd.Get('/GameGameItem/HotGameList', null,
    //     (res) => {
    //         var t = res.message.filter((el) => {
    //                 return !!el.ImgUrl;
    //             }),
    //             data = t.filter((el, i) => {
    //                 return i < 16;
    //             });
    //         console.log(JSON.stringify(data));
    //         cb(data);
    //     });
}

var renderGoodsImages = () => {
    getGoods((data) => {
        var tmplArr = [],
            item = '';

        data.forEach((el, i) => {
            item += `<li class="img-item"><a href="gamedetail.html?id=${el.GameID}"><img src="${el.ImgUrl}" alt="游戏图片"></a></li>`;
            if ((i + 1) % 4 === 0) {
                tmplArr.push(`
                    <ul class="img-wrapper clearfix${i===3?' checked':''}">
                        ${item}                        
                    </ul>
                    `);
                item = '';
            }
        });
        var tmpl = tmplArr.join('');
        $('#goodsImgBox').append(tmpl);
        initMoveCarousel();
    });
}


var preImgGroupIndex = 0;
var btns = [],
    moveBoxs = [],
    iTarget = 0;
var initMoveCarousel = () => {
    btns = $('.goods-wraper .btn-circle');
    moveBoxs = $('#goodsImgBox .img-wrapper');
    iTarget = moveBoxs.width();

    var interval = startMoveCarousel(iTarget);
    btns.mouseenter((e) => {
        clearInterval(interval);
    });
    btns.mouseleave((e) => {
        interval = startMoveCarousel(iTarget);
    });

    btns.click((e) => {
        var currIndex = btns.index(e.currentTarget);
        if (preImgGroupIndex === currIndex) {
            return;
        }
        $(btns[preImgGroupIndex]).removeClass('checked');
        $(e.currentTarget).addClass('checked');

        if (currIndex > preImgGroupIndex) {
            moveBox(1, currIndex, iTarget);
        } else {
            moveBox(0, currIndex, iTarget);
        }

        preImgGroupIndex = currIndex;
    });
}

var startMoveCarousel = (iTarget) => {
    return setInterval(() => {
        var currIndex = preImgGroupIndex + 1;
        if (currIndex >= moveBoxs.length) {
            currIndex = 0;
        }
        $(btns[preImgGroupIndex]).removeClass('checked');
        $(btns[currIndex]).addClass('checked');
        moveBox(1, currIndex, iTarget);
    }, 5000);
}

var moveBox = (type, currIndex, iTarget) => {
    move(type, moveBoxs, iTarget, currIndex, preImgGroupIndex, () => {
        preImgGroupIndex = currIndex;
    });
}
