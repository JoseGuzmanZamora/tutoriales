//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    if(req.method == 'GET'){
        var info = url.parse(req.url, true);
        var query = info.query['iso'];
        var fecha = new Date(query);
        var hora = new Date(query).getHours();
        var minutos = new Date(query).getMinutes();
        var segundos = new Date(query).getSeconds();
        var respuesta = {
            "hour": hora,
            "minute":minutos,
            "second":segundos
        }
        var respuesta2 = {
            "unixtime" : fecha.getTime(),
        }
        if(req.url.toString().includes('/api/parsetime')){
            res.write(JSON.stringify(respuesta));
            console.log(JSON.stringify(respuesta));
            res.end();
        }else if(req.url.toString().includes('/api/unixtime')){
            res.write(JSON.stringify(respuesta2));
            console.log(JSON.stringify(respuesta2));
            res.end();
        }
    }
})

server.listen(process.argv[2]);
