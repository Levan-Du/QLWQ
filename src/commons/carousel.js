var carousel = (imgEles, btnEles, long, callback) => {
    var i = 0,
        imgEle = $(imgEles[i]),
        btnEle = $(btnEles[i]);

    imgEle.fadeIn();
    btnEle.addClass('checked');

    var switchImg = (i) => {
            imgEle.hide();
            btnEle.removeClass('checked');
            imgEle = $(imgEles[i]);
            btnEle = $(btnEles[i]);
            imgEle.fadeIn();
            btnEle.addClass('checked');
        },
        start = () => {
            return setInterval(() => {
                i++;
                if (i === 3) {
                    i = 0;
                }

                switchImg(i);
            }, long || 3000);
        },
        interval = start(),
        stop = () => {
            clearInterval(interval);
        };

    btnEles.mouseenter((e) => {
        stop();
        i = btnEles.index(e.currentTarget);
        switchImg(i);
    });
    btnEles.mouseleave((e) => {
        interval = start();
    });
}

export default carousel;
