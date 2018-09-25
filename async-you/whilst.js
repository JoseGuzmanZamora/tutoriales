//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http'),
    async = require('async');

var contador = 0,
    prueba = false;

async.whilst(function(){
    if(prueba){
        return false;
    }else{
        return true;
    }
}, function(callback){
    contador ++;
    http.get(process.argv[2], function(res){
        var body = '';
        res.on('data', function(chunk){
            body += chunk.toString();
        })
        res.on('end', function(){
            if(body.toString().trim() == 'meerkat'){
                prueba = true
            }
            callback();
        })
    })
}, function callback(err, result){
    if(err){
        throw err;
    }
    console.log(contador);
})
