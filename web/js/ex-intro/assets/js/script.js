// const zoneDate = document.getElementById("txtDate");
const zoneDate = document.querySelector("#txtDate");

function afficherDate() {
    let dateJour = new Date("2026/09/30");
    let jour = (dateJour.getDate()<10)?"0"+dateJour.getDate():dateJour.getDate();
    // let mois = dateJour.getMonth()+1;
    let mois = (dateJour.getMonth()+1<10)?"0"+(dateJour.getMonth()+1):(dateJour.getMonth()+1);
    let annee = dateJour.getFullYear();
    
    let chaineDate = annee + "-" + mois + "-" + jour;
    console.log(chaineDate);
    zoneDate.value=chaineDate;
}

const mybtnDate = document.getElementById("btnDate");
mybtnDate.addEventListener("click", function() {
afficherDate();
// console.log("test");
})

const zoneHour = document.querySelector("#txtHour");

function afficherHeure() {
    let heure = new Date();
    let hour = verifDec(heure.getHours());
    let min = verifDec(heure.getMinutes());
    let second = verifDec(heure.getSeconds());

    let chaineHour = hour + ":" + min + ":" + second;
    console.log(chaineHour);
    zoneHour.value=chaineHour;
}

const mybtnHour = document.getElementById("btnHour");
mybtnHour.addEventListener("click", 
afficherHeure);

function verifDec(nb) {
    if (nb<10) {
        nb = "0" + nb;
    }
    return nb;
}