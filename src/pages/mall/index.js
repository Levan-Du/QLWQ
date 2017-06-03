import '../../assets/iconfont/iconfont.css';
import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import pay from '../../commons/pay';
import { loadLoginInfo, initLoginUserAction } from '../../commons/login';
import { initLoginAction, initNav, initNavAction } from '../../commons/pages';
import mockData from './mock';

$((e) => {
    initNav('mall');
    initNavAction();
    loadLogin();
    initLoginAction();
    initAction();
    loadGoods();
    onTabGridSelect();
    sumPaymoney();
    paySubmit();
    getUserInfo();
    initLoginUserAction();
});

var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

const PageSize = 4,
    PageSize0 = 9;

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
    DiamondGridState = {
        data: [],
        totalPage: 0,
        currGridIndex: 0
    },
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

var getGoods = (cb) => {
    // cb(mockData);
    comm.dd.Get('/Goods/Goods', null, (res) => {
        cb(res.message);
    });
}

var loadGoods = () => {
    getGoods((goods) => {
        DiamondGridState.data = goods;
        DiamondGridState.totalPage = Math.ceil(goods.length / PageSize0);
        renderExchangeByDiamondGrid(DiamondGridState);

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
    });
}

var renderExchangeByDiamondGrid = (state) => {
    var tmplArr = [],
        d = state.data,
        l = d.length,
        items = '',
        setVisible = (i, l) => {
            if (l <= PageSize0) {
                return ' visible';
            } else {
                if (i === PageSize0 - 1) {
                    return ' visible';
                }
                return '';
            }
        };

    d.forEach((el, i) => {
        items += `
        <li class="grid-item">
            <div class="panel">
                <a href="#"><img src="${el.ImgUrl}"><a/>
                <p>
                    <span>${el.Price}</span><span>钻石</span>
                    <a class="btn-ec" href="#">兑换</a>
                </p>
            </div>
        </li>`;
        if ((i + 1) % PageSize0 === 0 || i === l - 1) {
            tmplArr.push(`        
            <ul class="grid clearfix${setVisible(i,l)}">
                ${items}
            </ul>
            `);
            items = '';
        }
    });

    var tmpl = tmplArr.join(''),
        diamondGridBox = $('#tab_content_exchange_diamond');
    diamondGridBox.html(tmpl);

    var pagerbtns = '<a class="btn-pager btn-enum btn-next">下一页</a>';
    for (var p = state.totalPage; p--;) {
        pagerbtns += `<a class="btn-pager btn-num" data-pageindex="${p+1}">${p+1}</a>`;
    }
    pagerbtns += '<a class="btn-pager btn-enum btn-pre">上一页</a>';

    tmpl = `
    <div id="pager_tab_exchange_diamond_1" class="pager clearfix">
        ${pagerbtns}
    </div>
    `;
    diamondGridBox.append(tmpl);

    initDiamondGridPagerAction();
}

var initDiamondGridPagerAction = () => {
    var pager = $('#pager_tab_exchange_diamond_1'),
        btnNums = pager.find('.btn-num'),
        btnEnums = pager.find('.btn-enum'),
        diamondGrids = $('#tab_content_exchange_diamond').find('.grid'),
        gotoPage = (index) => {
            $(diamondGrids[DiamondGridState.currGridIndex]).removeClass('visible');
            $(diamondGrids[index]).addClass('visible');
            DiamondGridState.currGridIndex = index;
        };

    btnNums.click((e) => {
        var target = $(e.currentTarget),
            pageindex = parseInt(target.attr('data-pageindex')) - 1;
        if (pageindex === DiamondGridState.currGridIndex) {
            return;
        }

        gotoPage(pageindex);
    });
    btnEnums.click((e) => {
        var target = $(e.currentTarget),
            cla = target.prop('class'),
            tp = DiamondGridState.totalPage,
            index = DiamondGridState.currGridIndex;

        if (cla.indexOf('btn-pre') !== -1) {
            if (index <= 0) {
                return;
            }
            index--;
            gotoPage(index);
        } else {
            if (index >= tp - 1) {
                return;
            }
            index++;
            gotoPage(index);
        }
    });
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
            <a href="#"><img src="${el.ImgUrl}"></a>
            <div class="info">
                <p>${el.name}</p>
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
                if (!u) {
                    return;
                }
                $('#show_nick').text(u.NickName);
                $('#show_score').text(u.Score);
                $('#show_diamond').text(u.Diamond);

            }, (err) => {

            }
        );
    });
}
