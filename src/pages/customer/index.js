import '../../commons/common.css';
import '../../commons/pages.css';
import './index.css';
import * as comm from '../../commons/common';
import { initLoginAction, initNav } from '../../commons/pages';
import { loadLoginInfo } from '../../commons/login';

$((e) => {
    initNav('customer');
    loadLogin();
    initLoginAction();
})


var loadLogin = () => {
    loadLoginInfo((res) => {

    });
}
