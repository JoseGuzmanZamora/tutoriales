//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var fs = require('fs');

function listfiles(name,extension,callback){
    info = fs.readdir(name, function(err, list){
        if(err){
            return callback(err);
        }
        filtered = list.filter(function extensiosn(elemento){
            return elemento.includes(("." + extension) || extension);
        })
        callback(null, filtered);
    });
}

module.exports = listfiles;