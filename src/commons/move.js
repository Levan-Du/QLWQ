export default (type, moveBoxs, index, currIndex, cb) => {
    var currGrid = $(moveBoxs[currIndex]),
        nGrid = $(moveBoxs[index]),
        nLeft = '-100%',
        currLeft = '100%';

    if (type === 1) {
        nLeft = '100%';
        currLeft = '-100%';
    }

    nGrid.css({ left: nLeft, display: 'block', opacity: .5 });
    nGrid.animate({ left: '0', opacity: 1 }, 300, 'swing', () => {
        cb && cb();
    });
    currGrid.animate({ left: currLeft, opacity: .5 }, 300, 'swing', () => {
        cb && cb();
    });
}
