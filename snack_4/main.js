const listaInvitati = ["Marco", "Luca", "Marika", "Luciana", "Max"]
const askName = prompt("Come ti chiami?")
let vero_falso = false

for(let i = 0 ; i < listaInvitati.length; i++){
let invitato = listaInvitati[i]
    if (askName == invitato){
        console.log("Benvenuto alla festa!")
        vero_falso=true
    } 
}

if (vero_falso == false){
    console.log("Non sei nella lista!")
}