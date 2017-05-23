export var initLoginAction = () => {
    $('.header .login-btn').click((e) => {
        $.showLoginModal();
    });
}


export var getGenderDes = (gender) => {
    var g = parseInt(gender);
    switch (g) {
        case 0:
            return '保密';
        case 1:
            return '先生';
        case 2:
            return '女士';
        default:
            return '未知';
    }
}

export var initTab = () => {
    $('.tab-title').mouseenter((e) => {
        console.log('inittab');
        var target = $(e.currentTarget),
            tabTitleCheckEle = target.siblings('.tab-title-check');
        tabTitleCheckEle.prop('checked', true);
    });
}

export var initNav = (page) => {
        if (!page) {
            return;
        }

        var navItems = ['index', 'news', 'games', 'mall', 'user'],
            getHref = (item) => {
                if (navItems.indexOf(item) === -1) {
                    return 'user.html';
                } else if (item === page) {
                    return '#';
                } else {
                    return item + '.html';
                }
            },
            tmpl = navItems.map((el, i) => `
    <div class="nav-item${page==el?' checked':''}">
        <a class="nav-item-title" href="${getHref(el)}">${getPageTitle(el)}</a>
        ${el==='user'?`
                <ul class="submenu">
                    <!-- <li class="direct"><span></span></li> -->
                    <li class="submenu-item"><a href="customer.html">客服中心</a></li>
                    <li class="submenu-item"><a href="questions.html">常见问题</a></li>
                    <li class="submenu-item"><a href="feedbacks.html">游戏反馈</a></li>
                </ul>
            `:''}
    </div>`).join('');
    $('body > .header .nav').html(tmpl);
}

export var getPageTitle = (item) => {
    switch (item) {
        case 'index':
            return '首页';
        case 'news':
            return '资讯中心';
        case 'games':
            return '游戏中心';
        case 'mall':
            return '商城';
        case 'user':
            return '用户中心';
        default:
            return '首页';
    }
}
