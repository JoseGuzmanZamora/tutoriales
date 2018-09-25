var total = 0;
//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

for(var i = 2; i < (process.argv).length; i++){
    total += Number(process.argv[i]);
}

console.log(total);