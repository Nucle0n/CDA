import Article from './Article.js';

const form = document.querySelector("#formulaire");
const nomArt =  document.querySelector("#nom")
const prixHT = document.getElementById("prix");
const tauxTVA = document.getElementById("tva");

const btn = document.getElementById("valider");

btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(nomArt.value);
    console.log(prixHT.value);
    console.log(tauxTVA.value);
});

