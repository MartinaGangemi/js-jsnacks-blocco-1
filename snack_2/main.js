let primaParola = prompt("Scrivi una parola")
let secondaParola = prompt("Scrivi una seconda parola")

console.log(primaParola.length)
console.log(secondaParola.length)

if (primaParola.length > secondaParola.length){
    console.log(primaParola)
    console.log(secondaParola)
} else if (primaParola.length < secondaParola.length){
    console.log(secondaParola)
    console.log(primaParola)
} else{
    console.log("hanno la stessa lunghezza")
}