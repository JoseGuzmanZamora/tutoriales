//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http'),
    async = require('async');

async.each([process.argv[2], process.argv[3]],
    function(valor,callback){
        http.get(valor, function(res){
            res.on('error', function(error){
                callback(error);
            })
        })
    },
    function(err){
        console.log(err);
    }
    )

