import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import '../../commons/common';
import * as comm from '../../commons/common';
import move from '../../commons/move';
import { initLoginAction, initNav, initNavAction } from '../../commons/pages';
import { loadLoginInfo,initLoginUserAction } from '../../commons/login';

$((e) => {
    initNav('games');
    initNavAction();
    loadLogin();
    initLoginAction();
    loadTheGame();
    initLoginUserAction();
});


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

const PageSize = 5;

var HotGamesState = {
    totalPage: 0,
    data: []
}

var loadTheGame = () => {
    var id = comm.getQueryString()['id'];
    comm.dd.Get('/GameGameItem/HotGameList', 'gameId=' + id,
        function(res) {
            renderGame(res.message[0]);

            loadHotGames();
        });
}

var renderGame = (g) => {
    $('#game_intro_box').append(g.GameDes || "");
    $('#game_img_box').append(`<img  src="${g.ImgUrl}" alt="游戏大图">`);
}

var setHotGamesState = (data) => {
    var d = data.filter(el => !!el.ImgUrl);

    HotGamesState.data = d;
    HotGamesState.totalPage = Math.ceil(d.length / PageSize);
}

var loadHotGames = () => {
    comm.dd.Get('/GameGameItem/HotGameList', null,
        function(res) {
            setHotGamesState(res.message);
            renderImgGroup();
        });
}

var renderImgGroup = () => {
        var d = HotGamesState.data,
            p = HotGamesState.totalPage,
            da = [];
        for (; p-- > 0;) {
            var td = d.slice(p * PageSize, (p + 1) * PageSize);
            da.push(td);
        }

        var tmpl = da.map((el, i) => `
    <ul class="img-group clearfix${i===0?' checked':''}">
        ${el.map(el2=>`
        <li class="item"><img src="${el2.ImgUrl}" alt="图片"></li>
        `).join('')}
    </ul>`).join('');
        $('#hot_img_box').append(tmpl);
        initHotGamesAction();
}


var currentImgGroupIndex=0;
var initHotGamesAction=()=>{
    var itarget=$('#hot_img_box').width(),
        moveBoxs=$('#hot_img_box .img-group'),
        pagerBtns=$('.hot-goods .img-container .pager .btn-pager');

    pagerBtns.click((e)=>{
        var target =$(e.currentTarget),
            claProp=target.prop('class');

        if(claProp.indexOf('btn-pre')!==-1){
            prePage(moveBoxs,itarget);
        }
        else{
            nextPage(moveBoxs,itarget);
        }
    });
}

var prePage=(moveBoxs,itarget)=>{
    if(currentImgGroupIndex===0){
        return;
    }
    var i=currentImgGroupIndex-1;
    moveBox(0,moveBoxs,itarget,i);
}

var nextPage=(moveBoxs,itarget)=>{
    if(currentImgGroupIndex===moveBoxs.length-1){
        return;
    }
    var i=currentImgGroupIndex+1;
    moveBox(1,moveBoxs,itarget,i);
}
var moveBox=(type,moveBoxs,itarget,i)=>{
    move(type,moveBoxs,itarget,i,currentImgGroupIndex,()=>{
        $(moveBoxs[currentImgGroupIndex]).removeClass('checked');
        $(moveBoxs[i]).addClass('checked');

        currentImgGroupIndex=i;            
    });
}
