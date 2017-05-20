import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction } from '../../commons/pages';

$((e) => {
    initLoginAction();
    onQuesListItemChecked();
});


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