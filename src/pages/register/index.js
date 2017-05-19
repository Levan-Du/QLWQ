import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction } from '../../commons/pages';

$((e) => {
    initLoginAction();
    initLoginAction2();
    initNavAction();
});

var loginModal = null;
var initLoginAction2 = () => {
    $('.main .mid .btn-link').click((e) => {
        loginModal = $.showLoginModal();
    });
}


var initNavAction = () => {
    var navItem = $('body > .nav .nav-item');

    navItem.mouseenter((e) => {
        var navItem = $(e.currentTarget),
            subMenu = navItem.parent().find('.submenu');

        subMenu.stop();
        subMenu.animate({ height: '600px' }, 500, 'swing', () => {

        });
    });

    navItem.mouseleave((e) => {
        var navItem = $(e.currentTarget),
            subMenu = navItem.parent().find('.submenu');

        subMenu.stop();
        subMenu.animate({ height: '0' }, 500, 'swing', () => {

        });
    });

}
