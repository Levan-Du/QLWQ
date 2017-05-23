import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction, initNav } from '../../commons/pages';
import { loadLoginInfo } from '../../commons/login';

$((e) => {
    initNav('ask');
    loadLogin();
    initLoginAction();
    onQuesListItemChecked();
    onSubmit();
});

var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}

var onQuesListItemChecked = () => {
    var itemTitleBtns = $('#ques_list .item .title-btn'),
        currentBtn = $('#ques_list .item.checked .title-btn'),
        currentCont = $('#ques_list .item.checked .cont');

    itemTitleBtns.click((e) => {
        var itemCont = $(e.currentTarget).siblings('.cont'),
            parentItem = itemCont.parent(),
            isFinish1 = false,
            isFinish2 = false;

        if (parentItem.prop('class').indexOf('checked') !== -1) {
            return;
        }

        parentItem.addClass('checked');
        itemCont.animate({ opacity: 1, height: '300px' }, 240, 'swing', () => {
            isFinish1 = true;
            if (isFinish2) {
                currentCont = itemCont;
            }
        });

        currentCont.animate({ opacity: 0, height: 0 }, 240, 'swing', () => {
            isFinish2 = true;
            currentCont.parent().removeClass('checked');
            if (isFinish1) {
                currentCont = itemCont;
            }
        });


    });
}

var onSubmit = () => {
    $('#form_ask').submit((e) => {
        e.preventDefault();
        var data = $(e.currentTarget).serialize();
        comm.dd.Post('/News/AddGameIssue', data,
            (res) => {
                if (res.status !== 'success') {
                    alert(res.message);
                }
            }, (err) => {
                alert(err);
            }
        );
    })
}
