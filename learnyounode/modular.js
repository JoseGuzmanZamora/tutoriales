//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var fs = require('fs');
var ls = require('./function-filtering');

function filtrar_modular(name,extension){
    datos = ls(name,extension, function callback(err, data){
        if(err){
            throw err;
        }
        for(var i = 0; i < data.length; i++){
            console.log(data[i]);
        }
    });
}

filtrar_modular(process.argv[2], process.argv[3]);