
let km = document.getElementById(`km`).value
let eta = document.getElementById(`eta`).value
let prezzo;
let messaggio;
let cliente = document.getElementById(`nome`).value + " " + document.getElementById(`cognome`).value 
const button = document.getElementById(`btn-action`);
console.log(km);
console.log(eta)
console.log(cliente) 

button.addEventListener(`click`, function(){

if(eta <= 18){
   prezzo = (km * 0.21 * 0.8).toFixed(2);
   console.log(prezzo);
   messaggio = `Complimenti! ${cliente} lei rientra nella fascia under 18 e quindi ha diritto ad uno scontro del 20%, il suo biglietto costa: ${prezzo}`
    console.log(messaggio)
    document.getElementById(`messaggio`).innerHTML = messaggio

}else if (eta >= 65){
    prezzo = (km * 0.21 * 0.6).toFixed(2);
    console.log(prezzo);
    messaggio = `Complimenti! ${cliente} lei rientra nella fascia over 65 e quindi ha diritto ad uno scontro del 40%, il suo biglietto costa: ${prezzo}`
    document.getElementById(`messaggio`).innerHTML = messaggio
}else{
    prezzo = km * 0.21
    console.log(prezzo)
    messaggio = `Salve ${cliente}  il suo biglietto costa: ${prezzo}`
    document.getElementById(`messaggio`).innerHTML = messaggio
}
})


   
