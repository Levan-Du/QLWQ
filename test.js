// var path = require('path'),
//     fs = require('fs');

// var imgs = fs.readdirSync(path.join(__dirname, 'src/assets/games'));
// fs.open(path.join(__dirname, 'src/assets/games/gamesImgs.json'), 'w', function(err, fd) {
//     var buf = new Buffer(JSON.stringify(imgs));
//     var c = fs.writeSync(fd, buf, 0, buf.length, 0);
//     console.log(c)
// })

// setTimeout(() => {
//     console.log(new Date())
// }, 1000);



var s1 = 0,
    s2 = 0;
for (let i = 0; i <= 10; i++) {
    s1 += i * i;
    s2 += i;
}

console.log(s1, s2);
