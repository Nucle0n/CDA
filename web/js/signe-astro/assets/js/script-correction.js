const txtBirthday = document.getElementById("birthday");
const btnCalculate = document.querySelector("#calculate");
// const tabResult= document.querySelectorAll("p");

// tabResult.forEach((el)=>{el.textContent="traitement formulaire"});
const validation = document.querySelector(".result");
const vignette = document.querySelector(".vignette");
// validation.textContent += " traitement";

function calculateAge() {
    let chaineBirthday = txtBirthday.value;
    let delay = Date.parse(chaineBirthday); // durée en milliseconde depuis 1er janvier 1970 à minuit
    const birthDate = new Date(delay); //creation de l'objet date
    const today = new Date(); // creation de l'objet date du jour
    const validationSummarize = document.createElement("p"); //creation d'un paragraphe HTML
    const genSign = document.createElement("p");
    validationSummarize.id = "test"; //ajout d'un id pour utile pour JS
    validationSummarize.className = "summarize"; // ajout d'une classe pour mise en forme
    const mySection = document.querySelector("section"); // on va chercher la section dans la page
    mySection.appendChild(validationSummarize);

    if (birthDate > today) {
        // on rajoute le paragraphe dans la section
        validationSummarize.textContent =
            "Erreur la date doit être dans le passé !"; // on rajoute du texte dans le paragraphe
        /*alert("Erreur la date doit être dans le passé");
            Affichage d'une fenêtre modale dans le navigateur avec bouton ok   
           */
        /* console.error("Erreur la date doit être dans le passé"); 
            Affichage de l'erreur dans la console du navigateur F12*/
    } else {
        let userDate = birthDate.toLocaleDateString("fr-FR");
        let userTime = birthDate.toLocaleTimeString();
        validationSummarize.innerHTML = `Vous êtes né le<span class="bleu"> ${userDate}</span> à <span class="bleu"> ${userTime} </span>`;

        let dateDiff = today - birthDate;
        //v1
        let nbyear = today.getFullYear() - birthDate.getFullYear();
        //v2
        let nbYearV2 = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25);
        validationSummarize.innerHTML += ` <br> Il s'est écoulé <span class="bleu"> ${nbyear}</span> années depuis votre naissance.`;
    }
    console.log(txtBirthday.value);
    console.log(birthDate.getMonth() + 1);
    console.log(birthDate.getDate());

    const zodiaque="Bélier,Taureau,Gémeaux,Cancer,Lion,Vierge,Balance,Scorpion,Sagittaire,Capricorne,Verseau,Poissons";
    let tabZodiaque=zodiaque.split(',');
    const listeZodiaque= document.createElement("ul");
    listeZodiaque.id="signes"
    // listeZodiaque.className="zodiaque";
    listeZodiaque.classList.add('zodiaque');

    mySection=


btnCalculate.addEventListener("click", function () {
    calculateAge();
});




