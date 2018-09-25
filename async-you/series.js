//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http'),
    async = require('async');


async.series({
    requestOne: function(callback){
        var body = '';
        http.get(process.argv[2], function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            })
            res.on('end', function(){
                callback(null,body);
            })
        });
    },
    requestTwo: function(callback){
        var body = '';
        http.get(process.argv[3], function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            })
            res.on('end', function(){
                callback(null,body);
            })
        });
    }
}, function(err, results){
    if(err){
        throw err;
    }
    console.log(results);
    });