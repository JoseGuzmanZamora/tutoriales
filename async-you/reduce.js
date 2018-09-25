//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http'),
    async = require('async'),
    url = require('url');

async.reduce(['one','two','three'], 0, function(memo,item,callback){
    http.get(process.argv[2] + '?number=' + item, function(res){
        body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            real = Number(body);
            callback(null, memo + real);
        })
    })
}, function callback(err,result){
    if(err){
        throw err;
    }
    console.log(result);
})