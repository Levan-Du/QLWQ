import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';

$((e) => {
    gridWrap = $('#grid_wrapper');
    renderMenu();
    initMenuAction();
    loadData();
})

const PageSize = 4,
    MAX_INDEX = 3,
    PlatForms = [{ cla: 'ios', title: 'iPhone', icon: require('../../assets/images/games/u1873.svg'), pageIndex: 1 },
        { cla: 'android', title: 'Android', icon: require('../../assets/images/games/u1871.svg'), pageIndex: 1 },
        { cla: 'ipad', title: 'iPad', icon: require('../../assets/images/games/u1867.svg'), pageIndex: 1 },
        { cla: 'pc', title: 'PC', icon: require('../../assets/images/games/u1869.svg'), pageIndex: 1 }
    ];

var games = { totalPage: 0 },
    currentPlatformIndex = 0,
    gridItemHeight = 0,
    gridWrap = null;


var renderMenu = () => {
    var tmpl = PlatForms.map((el, i) => `
<li class="menu-item">
    <a class="menu-item-btn ${i===0?'checked':''}">
        <img class="img-icon" src="${el.icon}">
        <span>${el.title}</span>
        <img class="img-roundright" src="${require('../../assets/images/problems/u1137.svg')}">
    </a>
</li>`).join('');
    tmpl += `
<li class="menu-item empty">
</li>
`;
    $('#menu_wrapper').append(tmpl);
}


var loadData = () => {
    comm.dd.Get('/GameGameItem/HotGameList', null,
        function(res) {
            games.data = res.message.filter((el) => {
                return !!el.ImgUrl;
            });
            games.totalPage = Math.ceil(games.data.length / PageSize);
            init();
            gridItemHeight = parseFloat($('#grid_wrapper .grid-item').outerHeight());
            initGridAction();
        });
}

var init = () => {
    var data = games.data.filter((el, i) => {
        return i < PageSize;
    });

    PlatForms.forEach((pf) => {
        renderGrid(pf, data);
    });
    setGridWrapperHeight();
}

var prePage = (pf) => {
    if (pf.pageIndex > 1) {
        pf.pageIndex--;
    }
    renderGridItemByPager(pf);
    setGridWrapperHeight();
}

var nextPage = (pf) => {
    if (pf.pageIndex < games.totalPage) {
        pf.pageIndex++;
    }
    renderGridItemByPager(pf);
    setGridWrapperHeight();
    changeScrollTop(gridItemHeight * 2 + 30, 80);
}

var setGridWrapperHeight = () => {
    var grid = gridWrap.find('.grid-box.checked .grid'),
        gridMore = gridWrap.find('.grid-more'),
        gridHeight = comm.getBoxSize$(grid, 'height'),
        gridMoreHeight = comm.getBoxSize$(gridMore, 'height');

    gridWrap.height(gridHeight + gridMoreHeight);
}

var changeScrollTop = (itarget, speed) => {
    var speedsum = 0,
        interval = setInterval(() => {
            speedsum += speed;
            if (speedsum + speed > itarget) {
                speed = itarget - speedsum;
                clearInterval(interval);
            }
            document.body.scrollTop += speed;
        }, 30);
}

var renderGridItemByPager = (pf) => {
    var data = games.data.filter((el, i) => {
        return i > (pf.pageIndex - 1) * PageSize && i <= pf.pageIndex * PageSize
    });
    var griditem = renderGridItem(pf, data);
    $('#grid_wrapper .grid-box-' + pf.cla + ' .grid').append(griditem);
}

var initGridAction = () => {
    $('#grid_wrapper .grid-more .btn-more').click((e) => {
        var btnMore = $(e.currentTarget),
            cla = btnMore.attr('data-cla'),
            pf = PlatForms.find((p) => {
                return p.cla === cla
            });

        nextPage(pf);
        if (pf.pageIndex === games.totalPage) {
            btnMore.closest('.grid-more-wrapper').hide();
            btnMore.closest('.grid-more-wrapper').siblings('.grid-more-message').show();
        }
    });
}

var renderGrid = (pf, data) => {
    var tmpl = `
	<ul class="grid clearfix">
		${renderGridItem(pf,data)}
	</ul>
	${renderGridPager(pf)}
`
    $('#grid_wrapper .grid-box-' + pf.cla).append(tmpl);
}

var renderGridItem = (pf, data) => {
        return `
${data.map(el=>`
	<li class="grid-item">
	    <article class="panel">
	        <p>其乐无穷游戏中心</p>
	        <img class="img-game" src="${el.ImgUrl}">
	        <p class="down">
	            <img src="${pf.icon}">
	            <a href="#">下载游戏</a>
	            <img class="hline" src="${require('../../assets/images/games/u1893.png')}">
	            <img src="${require('../../assets/images/games/u1897.png')}">
	            <a href="#">二维码下载</a>
	        </p>
	    </article>
	</li>
`).join('')}
	`;
}

var renderGridPager=(pf)=>{
	return `
<section class="grid-more">
    <p class="grid-more-wrapper clearfix">
        <span>------------------------------------------------------------------------------------------------------------------------------------</span>
        <a id="btn_more_${pf.cla}" class="btn-more" data-cla="${pf.cla}"><img src="${require('../../assets/images/games/u1997.svg')}"></a>
        <span>------------------------------------------------------------------------------------------------------------------------------------</span>
    </p>
    <p class="grid-more-message">没有更多数据了</p>
</section>
`;
}

var initMenuAction=()=>{
	var menuBtns=$('.menu .menu-item-btn'),
		gridsBoxs=gridWrap.find('.grid-box');	

	menuBtns.click((e)=>{
		var i= menuBtns.index(e.currentTarget);
		if(i===currentPlatformIndex){
			return;
		}
		$(menuBtns[currentPlatformIndex]).removeClass('checked');
		$(e.currentTarget).addClass('checked');

		move(gridsBoxs,i,currentPlatformIndex,()=>{
			$(gridsBoxs[currentPlatformIndex]).removeClass('checked');
			$(gridsBoxs[i]).addClass('checked');

			currentPlatformIndex=i;
    		
    		setGridWrapperHeight();
		})
	});
}

var move = (gridsBoxs,index,currIndex,cb) => {
	var currGrid=$(gridsBoxs[currIndex]),
		nGrid=$(gridsBoxs[index]);

	nGrid.css({left:'-100%',display:'block',opacity:.5});
	nGrid.animate({left:'0',opacity:1},300,'swing',()=>{
		cb && cb();
	});
	currGrid.animate({left:'100%',opacity:.5},300,'swing',()=>{
		cb && cb();
	});
}

// var move = (i,speed,cb) => {
// 	var times=(MAX_INDEX-i),
// 		multiple = -times*100+'%';

// 	$('#grid_wrapper').animate({marginLeft:multiple},300*(speed>2?2:speed),'swing',()=>{
// 		cb && cb();
// 	});
// }
