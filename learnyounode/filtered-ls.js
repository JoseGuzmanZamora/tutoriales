//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var fs = require('fs');

var info = fs.readdir(process.argv[2], function callback(err, list){
    if(err){
        throw err;
    }
    filtered = list.filter(function extension(elemento){
        return elemento.includes("." + process.argv[3]);
    })
    
    for(var i = 0; i < filtered.length; i++){
        console.log(filtered[i]);
    }
})