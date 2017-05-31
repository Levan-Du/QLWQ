const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var goods = arr.map((el, i) => {
    var istr = '00' + el;
    return {
        name: '物品名称' + i,
        ImgUrl: require('../../assets/goods/good-' + istr.substring(istr.length - 2, istr.length) + '.jpg'),
        Price: 15,
        type: i % 2 + 1,
        Unit: '积分'
    }
});

export default goods;
