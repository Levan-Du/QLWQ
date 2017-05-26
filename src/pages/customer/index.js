import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction, initNav,initNavAction } from '../../commons/pages';
import { loadLoginInfo,initLoginUserAction } from '../../commons/login';

$((e) => {
    initNav('customer');
    initNavAction();
    loadLogin();
    initLoginAction();
    initLoginUserAction();
})


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}
