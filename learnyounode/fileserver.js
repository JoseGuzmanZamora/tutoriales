//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    info = fs.ReadStream(process.argv[3]);
    info.pipe(res);
})
server.listen(process.argv[2]);