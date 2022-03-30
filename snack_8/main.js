let numeroQuattroCifre = prompt("Inserisci un numero a quattro cifre")
console.log(numeroQuattroCifre.length)
if (numeroQuattroCifre.length == 4 ){
    let n1 = parseInt(numeroQuattroCifre[0])
    console.log(n1)
    let n2 = parseInt(numeroQuattroCifre[1])
    console.log(n2) 
    let n3 = parseInt(numeroQuattroCifre[2])
    console.log(n3)
    let n4 = parseInt(numeroQuattroCifre[3])
    console.log(n4)
    let somma = (n1 + n2 + n3 + n4)
    console.log(somma)
}

else {
    alert("inserisci un numero a 4 cifre!")
}