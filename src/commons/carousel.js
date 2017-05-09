var carousel = (imgEles, btnEles, long, callback) => {
    var i = 0,
        imgEle = imgEles[i],
        btnEle = btnEles[i];

    imgEle.fadeIn();
    btnEle.addClass('checked');

    var start = () => {
            return setInterval(() => {
                i++;

                imgEle.fadeOut();
                btnEle.removeClass('checked');
                imgEle = imgEles[i];
                imgEle = imgEles[i];
                imgEle.fadeIn();
                btnEle.addClass('checked');

                if (i === 3) {
                    i = 0;
                }
            }, long || 3000);
        },
        interval = start(),
        stop = () => {
            clearInterval(interval);
        };

    btnEles.mouseenter((e) => {
        stop();
    });
    btnEles.mouseleave((e) => {
        interval = start();
    });
}

export default carousel;
