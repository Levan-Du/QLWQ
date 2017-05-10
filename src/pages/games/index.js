import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';

$((e) => {
    renderGrid();
    initMenuAction();
})

var renderGrid = () => {
    var arr = [{ cla: 'ios', icon: require('../../assets/images/games/u1873.svg') },
        { cla: 'android', icon: require('../../assets/images/games/u1871.svg') },
        { cla: 'ipad', icon: require('../../assets/images/games/u1867.svg') },
        { cla: 'pc', icon: require('../../assets/images/games/u1869.svg') }
    ];

    arr.forEach((pf) => {
        var data = [1, 2, 3, 4].map((el) => {
            return { ImgUrl: pf.icon }
        });
        renderGridBy(pf, data);
    });
}

var renderGridBy = (pf, data) => {
        var tmpl = `
<ul class="grid clearfix">
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
    </li>`).join('')
    }
</ul>
<section class="grid-more">
    <p class="grid-more-wrapper clearfix">
        <span>------------------------------------------------------------------------------------------------------------------------------------</span>
        <a id="btn_more"><img src="${require('../../assets/images/games/u1997.svg')}"></a>
        <span>------------------------------------------------------------------------------------------------------------------------------------</span>
    </p>
</section>
`
    $('.grid-box-' + pf.cla).append(tmpl);
}

var initMenuAction=()=>{
	var menuBtns=$('.menu .menu-item-btn'),
		currMenuBtnIndex=0;

	menuBtns.click((e)=>{
		var i= menuBtns.index(e.currentTarget);
		if(i===currMenuBtnIndex){
			return;
		}
		$(menuBtns[currMenuBtnIndex]).removeClass('checked');
		$(e.currentTarget).addClass('checked');
		move(i,Math.abs(currMenuBtnIndex-i));		
		currMenuBtnIndex=i;
	});
}

var move = (i,speed) => {
	var times=(3-i),
		multiple = -times*100+'%';
	$('#grid_wrapper').animate({marginLeft:multiple},300*speed,'swing',()=>{

	});
}
