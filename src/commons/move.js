export default (type, moveBoxs, iTarget, currIndex, preIndex, cb) => {
    var preGrid = $(moveBoxs[preIndex]),
        currGrid = $(moveBoxs[currIndex]),
        currLeft = -iTarget + 'px',
        preLeft = iTarget + 'px',
        aniComplete1 = false,
        aniComplete2 = false;

    if (type === 1) {
        currLeft = iTarget + 'px';
        preLeft = -iTarget + 'px';
    }

    currGrid.css({ left: currLeft, display: 'block' });
    currGrid.animate({ left: 0, }, 300, 'swing', () => {
        aniComplete1 = true;
        if (aniComplete2) {
            cb && cb();
        }
    });
    preGrid.animate({ left: preLeft}, 300, 'swing', () => {
        preGrid.css('display', 'none');
        aniComplete2 = true;
        if (aniComplete1) {
            cb && cb();
        }
    });
}
