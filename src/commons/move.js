var move = (target, long, itarget, lr, cb) => {
    var sumspeed = 0,
        sumspeed = 0,
        timespan = 30,
        size = parseInt(long / 30),
        x = 1,
        finish = false,
        c = 100,
        a = calcA(itarget, size, c),
        b = calcB(size, a),
        changeLeft = lr ? (marginLeft, speed) => {
            target.style.marginLeft = marginLeft - speed + 'px';
        } : (marginLeft, speed) => {
            target.style.marginLeft = marginLeft + speed + 'px';
        },
        interval = setInterval(() => {
            var marginLeft = parseFloat(getStyle(target, 'marginLeft')),
                speed = parseFloat(calcSpeed(size, x, itarget, a, b, c));

            if (x === size) {
                speed = itarget - sumspeed;
                finish = true;
                clearInterval(interval);
            }
            sumspeed += speed;
            changeLeft(marginLeft, speed);

            x++;
            if (finish) {
                cb && cb();
            }
        }, timespan);
    console.log(a, b, c);
}

var calcSpeed = (size, x, itarget, a, b, c) => {
    return a * x * x + b * x + c;
}

var calcA = (itarget, x, c) => {
    var x2 = sumX2(x);
    var x1 = sumX1(x);
    return (itarget - x1 * c) / (-x * x1);
}
var calcB = (x, a) => {
    return -x * a;
}

var sumX2 = (s) => {
    var ss = 0;
    for (var i = 1; i <= s; i++) {
        ss += i * i;
    }
    return ss;
}

var sumX1 = (s) => {
    var ss = 0;
    for (var i = 1; i <= s; i++) {
        ss += i;
    }
    return ss;
}

var getStyle = (sel, style) => {
    if (getComputedStyle) {
        return getComputedStyle(sel)[style];
    } else {
        return sel.currentStyle[style];
    }
}

export default move;
