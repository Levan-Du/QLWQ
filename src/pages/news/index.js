import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import '../../commons/common';
import * as comm from '../../commons/common';
import { initLoginAction, initTab, initNav, initNavAction } from '../../commons/pages';
import { loadLoginInfo, initLoginUserAction } from '../../commons/login';
import news from './mock';

$((e) => {
    initNav('news');
    initNavAction();
    loadLogin();
    initLoginAction();
    renderNewsTab()
    renderNews();
    initLoginUserAction();
});


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

const pageSize = 6;
var newsFilter = (arr, classId) => {
    return arr.filter((el, i) => {
        return el.ClassID == classId;
    });
}

var renderItem = (id, o) => {
    var pdata = byPager(o.data, o.pageIndex),
        tmpl = o.data.length === 0 ?
        `<p class="news-item news-item-no">没有数据</p>` : pdata.map((el) => {
            return `<ul  class="news-item clearfix"><li style="float:right;"><span>${new Date(el.IssueDate).Format('yyyy/MM/dd')}</span></li><li style="overflow:hidden;"><a href="#">${el.Subject}</a><li></ul>`;
        }).join('');;

    // if (id === 'newsBox') {
    //     tmpl = pdata.map((el) => {
    //         return `<ul  class="news-item clearfix"><li style="float:right;"><span>${new Date(el.IssueDate).Format('yyyy/MM/dd')}</span></li><li style="overflow:hidden;"><a href="#">${el.Subject}</a><li></ul>`;
    //     }).join('');
    // } else {
    //     tmpl = pdata.map((el) => {
    //         return `<p class="news-item"><a href="#">${el.Subject}</a></p>`;
    //     }).join('');
    // }
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

var newsState = { pageIndex: 1 },
    noticesState = { pageIndex: 1 },
    actsState = { pageIndex: 1 };

var renderNewsTab = () => {
    var getFirstLastBy = (length, i) => {
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
            </div>
        </li>
    `).join('');
    $('#tab_news').html(tmpl);
    initTab();
}

var getNews = (cb) => {
    cb(news);
    // comm.dd.Get('/News/HotNewList', null,
    //     (res) => {
    //         console.log(JSON.stringify(res.message));
    //         cb(res.message);
    //     });
}

var renderNews = () => {
    getNews((data) => {
        // actsState =Object.assign(actsState, newsFilter(data, 1));      
        newsState.data = newsFilter(data, 2);
        newsState.totalPage = Math.ceil(newsState.data.length / pageSize);
        noticesState.data = newsFilter(data, 1);
        noticesState.totalPage = Math.ceil(noticesState.data.length / pageSize);
        actsState.data = newsFilter(data, 3);
        actsState.totalPage = Math.ceil(actsState.data.length / pageSize);

        renderItem('noticesBox', noticesState);
        renderItem('newsBox', newsState);
        renderItem('activitiesBox', actsState);

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
                go(datamark, 'newsBox', newsState);
                break;
            case 'notices':
                go(datamark, 'noticesBox', noticesState);
                break;
            case 'acti':
                go(datamark, 'activiesBox', actsState);
                break;
            default:
                break;
        }
    });
}
