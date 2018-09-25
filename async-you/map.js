//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http'),
    async = require('async');

async.map([process.argv[2], process.argv[3]],
    function(valor,callback){
        var body = '';
        http.get(valor, function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            })
            res.on('end', function(){
                callback(null, body);
            })
        })
    },
    function(err, results){
        console.log(results);
    }
    )