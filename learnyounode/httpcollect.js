//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var http = require('http');

http.get(process.argv[2], function(response){
    var total= [];
    response.setEncoding('utf8');
    response.on("data", function(data){
        total.push(data);
    });
    response.on("end", function(){
        console.log(total.join('').length);
        console.log(total.join(''));
    });

})