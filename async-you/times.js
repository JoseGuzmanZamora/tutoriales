//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http'),
    async = require('async');


async.times(5,
    function(cambio,callback){
        var datos = JSON.stringify({'user_id':(cambio + 1)});
        var options = {
            hostname: process.argv[2],
            port : process.argv[3],
            path: '/users/create',
            method: 'POST',
            headers:{
                'Content-Length': datos.length
            }
        };
        var request = http.request(options,function(res){
            res.on('end', function(){
            });
            });
        request.write(datos);
        request.end();
        callback(null,datos);

        }
        , function callback(err,results){
            if(err){
                throw err;
            }
            //console.log(results);
        });

async.series({
    function(callback){
        var url = 'http://' + process.argv[2] + ':' + process.argv[3] + '/users';
        http.get(url,function(res){
            var body = '';
            res.on('data', function(chunk){
                body += chunk;
            })
            res.on('end', function(){
                callback(null,body);
            })
        })
    }
}, function(err, results){
    if(err){
        throw err;
    }
    console.log(results['function']);
    });