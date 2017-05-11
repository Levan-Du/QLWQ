var props = {
    user: {
        posts: [{
            title: 'Foo',
            comments: ['Good one', 'interesting']
        }, {
            title: 'Bar',
            comments: ['OK']
        }]
    }
}

var get = (arr, props) => {
    var o = props;
    arr.forEach(el => {
        if (o[el]) {
            o = o[el];
        }
    });
    return o;
}
var o1 = get(['user', 'posts', 0, 'title'], props);
var o2 = get(['user', 'post', 1, 'title'], props);
console.log(o1, o2);
