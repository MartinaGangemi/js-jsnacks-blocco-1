const emptyArray = []

for (let i = 0; i < 6; i++){
let askNumber = parseInt(prompt("Inserisci un numero"))

if (askNumber % 2 !=0){
    emptyArray.push(askNumber)
}

}

console.log(emptyArray)



