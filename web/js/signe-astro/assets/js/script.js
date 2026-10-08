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

    switch (birthDate.getMonth() + 1) {
        case 1:
            if (birthDate.getDate() < 20) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/capricorne.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/verseau.jpg" alt="Signe astrologique">`;
            }
            break;
        case 2:
            if (birthDate.getDate() < 19) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/verseau.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/poissons.jpg" alt="Signe astrologique">`;
            }
            break;
        case 3:
            if (birthDate.getDate() < 21) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/poissons.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/belier.jpg" alt="Signe astrologique">`;
            } break;
        case 4:
            if (birthDate.getDate() < 20) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/belier.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/taureau.jpg" alt="Signe astrologique">`;
            } break;
        case 5:
            if (birthDate.getDate() < 21) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/taureau.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/gemeaux.jpg" alt="Signe astrologique">`;
            } break;
        case 6:
            if (birthDate.getDate() < 21) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/gemeaux.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/cancer.jpg" alt="Signe astrologique">`;
            } break;
        case 7:
            if (birthDate.getDate() < 23) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/cancer.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/lion.jpg" alt="Signe astrologique">`;
            } break;
        case 8:
            if (birthDate.getDate() < 23) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/lion.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/vierge.jpg" alt="Signe astrologique">`;
            } break;
        case 9:
            if (birthDate.getDate() < 23) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/vierge.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/balance.jpg" alt="Signe astrologique">`;
            } break;
        case 10:
            if (birthDate.getDate() < 23) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/balance.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/scorpion.jpg" alt="Signe astrologique">`;
            } break;
        case 11:
            if (birthDate.getDate() < 22) {
                validationSummarize.innerHTML.
                validationSummarize.innerHTML = `<br><img src="./assets/img/scorpion.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/sagittaire.jpg" alt="Signe astrologique">`;
            } break;
        case 12:
            if (birthDate.getDate() < 22) {
                validationSummarize.innerHTML = `<br><img src="./assets/img/sagittaire.jpg" alt="Signe astrologique">`;
            } else {
                validationSummarize.innerHTML = `<br><img src="./assets/img/capricone.jpg" alt="Signe astrologique">`;
            } break;


    }

}

btnCalculate.addEventListener("click", function () {
    calculateAge();
});




