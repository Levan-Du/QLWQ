import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import pay from '../../commons/pay';
import { loadLoginInfo } from '../../commons/login';
import { initLoginAction } from '../../commons/pages';

$((e) => {
    loadLogin();
    initLoginAction();
    initAction();
    loadGoods();
    onTabGridSelect();
    sumPaymoney();
    paySubmit();
    getUserInfo();
});

var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    PageSize = 4;

var getGoodTypeByGridIndex = (gridIndex) => {
    switch (gridIndex) {
        case 1:
            return 0;
        case 2:
            return 1;
        case 3:
            return 2;
        default:
            return 0;
    }
}

var goods = [],
    GridState = {
        grid1: {
            gridIndex: 1,
            pageIndex: 1,
            goodType: getGoodTypeByGridIndex(1),
            totalPage: 0,
            data: []
        },
        grid2: {
            gridIndex: 2,
            pageIndex: 1,
            goodType: getGoodTypeByGridIndex(2),
            totalPage: 0,
            data: []
        },
        grid3: {
            gridIndex: 3,
            pageIndex: 1,
            goodType: getGoodTypeByGridIndex(3),
            totalPage: 0,
            data: []
        }
    };


var initAction = () => {
    $('#btn_agree_tiaoli').click((e) => {
        var iconfont = $(e.currentTarget).find('.iconfont'),
            claProp = iconfont.prop('class'),
            errorEle = $('#error_tiaoli');
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

var selectedTabGrid = null;
var onTabGridSelect = () => {
    var tabCheckBtns = $('#tab_exchange_point_grid .tab-title-check'),
        tabcheckedBtn = tabCheckBtns.filter(':checked');

    selectedTabGrid = tabcheckedBtn.siblings('.tab-content');

    tabCheckBtns.change((e) => {
        var target = $(e.currentTarget),
            nSelectedTabGrid = target.siblings('.tab-content');

        if (selectedTabGrid == nSelectedTabGrid) {
            return;
        }

        selectedTabGrid.hide();
        nSelectedTabGrid.fadeIn();
        selectedTabGrid = nSelectedTabGrid;
    });
}

var loadGoods = () => {
    goods = arr.map((el, i) => {
        var istr = '00' + el;
        return {
            ImgUrl: require('../../assets/goods/good-' + istr.substring(istr.length - 2, istr.length) + '.jpg'),
            Price: 15,
            type: i % 2 + 1,
            Unit: '积分'
        }
    });

    renderExchangeByDiamondGrid(goods);

    var data = goods.slice();
    GridState['grid1'].data = data;
    GridState['grid1'].totalPage = Math.ceil(data.length / PageSize);
    renderExchangeByPointGrid('grid1');

    GridState['grid2'].data = getDataByGoodType(goods, 1);
    GridState['grid2'].totalPage = Math.ceil(GridState['grid2'].data.length / PageSize);
    renderExchangeByPointGrid('grid2');

    GridState['grid3'].data = getDataByGoodType(goods, 2);
    GridState['grid3'].totalPage = Math.ceil(GridState['grid3'].data.length / PageSize);
    renderExchangeByPointGrid('grid3');
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

var renderExchangeByPointGrid = (grid) => {
    var gridState = GridState[grid],
        { data, pageIndex, gridIndex } = gridState;

    renderExchangeByPointGridPager(grid);
    var newData = getDataByPager(data, pageIndex);
    renderExchangeByPointGridBy(newData, gridIndex);
}

var renderExchangeByPointGridPager = (grid) => {
    var gridState = GridState[grid],
        { pageIndex, gridIndex, totalPage } = gridState;

    var tmpl2 = '';
    for (var i = totalPage; i--;) {
        tmpl2 += `<a class="btn btn-num" data-pageindex="${i+1}">${i+1}</a>`;
    }

    var tmpl = `
        <a class="btn btn-enum btn-next">下一页</a>        
        ${tmpl2}
        <a class="btn btn-enum btn-pre">上一页</a>
    `;

    var gridEle = $('#pager_tab_exchange_point_' + gridIndex);
    gridEle.html(tmpl);

    gridEle.find('.btn.btn-num').click((e) => {
        var pageIndex = parseInt($(e.currentTarget).attr('data-pageindex'));
        gridState.pageIndex = pageIndex;
        gotoPage(grid);
    });

    gridEle.find('.btn.btn-enum').click((e) => {
        var cla = $(e.currentTarget).prop('class');
        if (cla.indexOf('btn-pre') !== -1) {
            prePage(grid);
        } else {
            nextPage(grid);
        }
    });
}

var getDataByPager = (data, pageIndex) => {
    var newData = data.filter((el, i) => {
        return i >= (pageIndex - 1) * PageSize && i < pageIndex * PageSize;
    });
    return newData;
}

var getDataByGoodType = (data, goodType) => {
    var data1 = null;
    if (goodType === 0) {
        data1 = data.slice();
    } else {
        data1 = data.filter(el => (el.type === goodType));
    }
    return data1;
}

var renderExchangeByPointGridBy = (data, gridIndex) => {
    var tmpl = data.map(el => `
    <li class="grid-item">
        <div class="panel clearfix">
            <img src="${el.ImgUrl}">
            <div class="info">
                <p>物品名称</p>
                <p class="price">${el.Price}</p>
            </div>
        </div>
    </li>
    `).join('');

    $('#grid_tab_exchange_point_' + gridIndex).html(tmpl);
}

var gotoPage = (grid) => {
    renderExchangeByPointGrid(grid);
}

var prePage = (grid) => {
    var gridState = GridState[grid];
    if (gridState.pageIndex > 1) {
        gridState.pageIndex--;
        gotoPage(grid);
    }
}

var nextPage = (grid) => {
    var gridState = GridState[grid];
    if (gridState.pageIndex < gridState.totalPage) {
        gridState.pageIndex++;
        gotoPage(grid);
    }
}

var sumPaymoney = () => {
    var numRadios = $('#form_recharge section.input .num input[type="radio"]'),
        numCheckedRadio = numRadios.filter(':checked'),
        paymoney = numCheckedRadio.val();

    changePaymoney(paymoney);

    $('#form_recharge section.input .num input[type="radio"]').change((e) => {
        var paymoney = $(e.currentTarget).val();
        changePaymoney(paymoney);
    });
}

var changePaymoney = (paymoney) => {
    $('#show_paymoney_recharge').text(paymoney);
    $('#txt_paymoney_recharge').val(paymoney);
}

var paySubmit = () => {
    var errorP = $('#error_recharge');

    $('#form_recharge').submit((e) => {
        e.preventDefault();
        errorP.hide();

        var data = $(e.currentTarget).serialize(),
            o = comm.paramsToJson(data);

        if (!o.account) {
            errorP.text('请输入充值ID！');
            errorP.show();
            return;
        }
        pay(o);
    })
}

var getUserInfo = () => {
    $('#txt_gameid').change((e) => {
        comm.dd.Get('/Login/AccountInfo2', 'gameid=' + $(e.currentTarget).val(),
            (res) => {
                var u = res.message[0];
                $('#show_nick').text(u.NickName);
            }, (err) => {

            }
        );
    });
}
