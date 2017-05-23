import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import '../../commons/common';
import * as comm from '../../commons/common';
import { initLoginAction, initTab, initNav } from '../../commons/pages';
import { loadLoginInfo } from '../../commons/login';

$((e) => {
    initNav('news');
    loadLogin();
    initLoginAction();
    renderNewsTab()
    renderNews();
});


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

const pageSize = 4;
var newsFilter = (arr, classId) => {
    return arr.filter((el, i) => {
        return el.ClassID == classId;
    });
}

var renderItem = (id, o) => {
    var pdata = byPager(o.data, o.pageIndex),
        tmpl = o.data.length === 0 ?
        `<p class="news-noitem">没有数据</p>` :
        pdata.map((el) => {
            return `<p class="news-item"><a href="#">${el.Subject}</a></p>`;
        }).join('');

    $('#' + id).html(tmpl);

}

var prePage = (id, o) => {
    if (o.pageIndex > 1 && o.pageIndex <= o.totalPage) {
        o.pageIndex--;
    }

    renderItem(id, o);
}

var nextPage = (id, o) => {
    if (o.pageIndex >= 1 && o.pageIndex < o.totalPage) {
        o.pageIndex++;
    }

    renderItem(id, o);
}

var byPager = (arr, pageIndex) => {
    return arr.filter((el, i) => {
        return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize;
    });
}

var news = { pageIndex: 1 },
    notices = { pageIndex: 1 },
    acts = { pageIndex: 1 };


var renderNewsTab = () => {
    var downItemImg = require('../../assets/images/index/u204.svg'),
        actiImg1 = require('../../assets/imgs/acti-01.png'),
        actiImg2 = require('../../assets/imgs/acti-02.png'),
        getFirstLastBy = (length, i) => {
            switch (i) {
                case 0:
                    return ' first';
                case length - 1:
                    return ' last';
                default:
                    return '';
            }
        },
        tmpl = [{ id: 'news', title: '新闻' },
            { id: 'notices', title: '公告' },
            { id: 'activities', title: '活动' }
        ].map((el, i, arr) => `
        <li class="tab-page">
            <input id="tab-page-${i+1}" class="tab-title-check" type="radio" name="tab" ${i===0?'checked':''}>
            <label class="tab-title" for="tab-page-${i+1}">${el.title}</label>
            <div class="tab-content clearfix">
                <div class="news-list">
                    <div id="${el.id}Box" class="news-item-wrapper">
                    </div>
                    <div class="pager clearfix">
                        <a data-for="news" data-mark="pre" class="btn">上一页</a>
                        <a data-for="news" data-mark="next" class="btn">下一页</a>
                    </div>
                </div>
                <div class="news-show">
                    <ul class="down clearfix">
                        <li class=down-item>
                            <img src="${downItemImg}">
                            <span>Android下载</span>
                        </li>
                        <li class=down-item>
                            <img src="${downItemImg}">
                            <span>Android下载</span>
                        </li>
                    </ul>
                    <ul class="acti">
                        <li><img src="${actiImg1}"></li>
                        <li><img src="${actiImg2}"></li>
                    </ul>
                </div>
            </div>
        </li>
    `).join('');
    $('#tab_news').html(tmpl);
    initTab();
}

var renderNews = () => {
    comm.dd.Get('/News/HotNewList', null,
        (res) => {
            // acts =Object.assign(acts, newsFilter(res.message, 1));      
            news.data = newsFilter(res.message, 2);
            news.totalPage = Math.ceil(news.data.length / pageSize);
            notices.data = newsFilter(res.message, 1);
            notices.totalPage = Math.ceil(notices.data.length / pageSize);
            acts.data = newsFilter(res.message, 3);
            acts.totalPage = Math.ceil(notices.data.length / pageSize);

            renderItem('noticesBox', notices);
            renderItem('newsBox', news);
            renderItem('activitiesBox', acts);

            initNewsAction();
        });
}

var initNewsAction = () => {
    $('.tab-content .pager .btn').click((e) => {
        var target = $(e.currentTarget),
            datafor = target.attr('data-for'),
            datamark = target.attr('data-mark'),
            go = (mark, box, o) => {
                mark === 'pre' ? prePage(box, o) : nextPage(box, o);
            };

        switch (datafor) {
            case 'news':
                go(datamark, 'newsBox', news);
                break;
            case 'notices':
                go(datamark, 'noticesBox', notices);
                break;
            case 'acti':
                go(datamark, 'activiesBox', acts);
                break;
            default:
                break;
        }
    });
}
