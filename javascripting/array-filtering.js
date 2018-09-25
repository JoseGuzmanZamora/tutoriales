//DESARROLLADO POR JOSÉ ALEJANDRO GUZMÁN ZAMORA!!!!!! ;)

var numbers = [100, 65, 67, 77, 77, 65, 456, 899, 9, 87, 544];

var filtered = numbers.filter(function evenNumbers(number){
    return number % 2 === 0;
})

console.log(filtered);