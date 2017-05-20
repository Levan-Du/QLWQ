import { dd } from './common';

const PAY_URL = 'http://localhost:9244/poleneer/webpay.aspx?'

export default (params) => {
    var qs = 'rtype=' + params.rtype;
    qs += '&paymoney=' + params.paymoney;
    qs += '&goodsname=' + params.goodsname;
    qs += '&account=' + params.account;
    qs += '&OrderID=' + params.account + new Date().Format('yyMMddHHmmss');

    console.log(params,qs);

    var w = window.open();
    dd.Get('/Mall/Sign', qs,
        (res) => {
            qs += '&sign=' + res.message;
            w.location = PAY_URL + qs;

            console.log(PAY_URL + qs);
        }
    );
}
