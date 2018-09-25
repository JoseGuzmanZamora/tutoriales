//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var async = require('async')
    , http = require('http')
    ,     fs = require('fs');

async.waterfall([
    function(callback){
        var path = process.argv[2];
        fs.readFile(path, callback);
    },
    function(data,callback){
        http.get(data.toString(), function(res){
            res.on('data', function(chunk){
                console.log(chunk.toString());
            })
            res.on('end', function(){
                callback(null, data);
            })
        });
    }
], function(err, result){
    if(err){
        return console.err(err);
    }
});

