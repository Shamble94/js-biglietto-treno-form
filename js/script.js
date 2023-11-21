
let km = document.getElementById(`km`).value
let eta = document.getElementById(`eta`).value
let prezzo;
const button = document.getElementById(`btn-action`);
console.log(km);
console.log(eta)

button.addEventListener(`click`, function(){

if(eta <= 18){
   prezzo = (km * 0.21 * 0.8).toFixed(2)
   console.log(prezzo)
}else if (eta >= 65){
    prezzo = (km * 0.21 * 0.6).toFixed(2)
    console.log(prezzo)
}else{
    prezzo = km * 0.21
    console.log(prezzo)
}
})


   
