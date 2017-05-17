import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import '../../commons/common';
import * as comm from '../../commons/common';
import { initLoginAction } from '../../commons/pages';

$((e) => {
    initLoginAction();
    renderNews();
});


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
            return `<p class="news-item">${el.Subject}</p>`;
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

var renderNews = () => {
    comm.dd.Get('/News/HotNewList', null,
        (res) => {
            // acts =Object.assign(acts, newsFilter(res.message, 1));      
            news.data = newsFilter(res.message, 2);
            news.totalPage = Math.ceil(news.data.length / pageSize);
            notices.data = newsFilter(res.message, 3);
            notices.totalPage = Math.ceil(notices.data.length / pageSize);

            renderItem('noticesBox', notices);
            renderItem('newsBox', news);
            // renderNews('acts', acts);

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
