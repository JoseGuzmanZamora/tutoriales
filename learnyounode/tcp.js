//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var net = require('net');

var server = net.createServer(function listener(socket){
    var date = new Date();
    if((date.getMonth() + 1).toString().length == 1){
        var mes = "0" + (date.getMonth() + 1).toString();
    }else{
        var mes = (date.getMonth() + 1).toString();
    }
    if(date.getHours().toString().length == 1){
        var hora = "0" + date.getHours().toString();
    }else{
        var hora = date.getHours().toString();
    }if(date.getDate().toString().length == 1){
        var day = "0" + date.getDate().toString();
    }else{
        var day = date.getDate().toString();
    }if(date.getMinutes().toString().length == 1){
        var minute = "0" + date.getMinutes().toString();
    }else{
        var minute = date.getMinutes().toString();
    }
    infor = date.getFullYear().toString() + '-' + mes + '-' + day + ' ' + hora + ':' + minute + '\n';
    socket.end(infor);
})
server.listen(process.argv[2]);