import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction } from '../../commons/pages';

$((e) => {
    initLoginAction();
    initJianHuMenu();
    initContent();
});

var initJianHuMenu = () => {
    var menuBtns = $('.content .tab .tab-page.jianhu .menu .item a'),
        articles = $('.content .tab .tab-page.jianhu .main > article'),
        contentEle = $('body > .content'),
        currentIndex = 1;

    menuBtns.click((e) => {
        var index = menuBtns.index(e.currentTarget);
        if (index === currentIndex) {
            return;
        }

        var checkArticles = $(articles[index]),
            mainEle = checkArticles.parent(),
            tabContEle = mainEle.parent();

        $(articles[currentIndex]).removeClass('checked');
        $(checkArticles).addClass('checked');
        $(menuBtns[currentIndex]).parent().removeClass('checked');
        $(menuBtns[index]).parent().addClass('checked');
        currentIndex = index;

        var height = comm.getBoxSize$(mainEle, 'height') + comm.getBoxSize(tabContEle, 'height');
        contentEle.height(height);
    })
}

var initContent = () => {
    var contentEle = $('body > .content'),
        mainEle = $('.content .tab .tab-page.jianhu .main > article.checked').parent(),
        tabContEle = mainEle.parent(),
        height = comm.getBoxSize$(mainEle, 'height') + comm.getBoxSize(tabContEle, 'height');

    contentEle.height(height);
}
