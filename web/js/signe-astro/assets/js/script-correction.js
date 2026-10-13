const txtBirthday = document.getElementById("birthday");
const btnCalculate = document.querySelector("#calculate");
const mySection = document.querySelector("section"); // on va chercher la section dans la page


const validation = document.querySelector(".result");
validation.textContent += " traitement";

//listeZodiaque.className="zodiaque";

const mySection2 = document.querySelector("#signe");
const zodiaque =
    "Bélier,Taureau,Gémeaux,Cancer,Lion,Vierge,Balance,Scorpion,Sagittaire,Capricorne,Verseau,Poissons";
let tabzodiaque = zodiaque.split(",");
const listeZodiaque = document.createElement("ul");
listeZodiaque.id = "signes";
listeZodiaque.classList.add("zodiaque");
mySection2.appendChild(listeZodiaque);
// for (let i = 0; i < tabzodiaque.length; i++) {

//   const myli=document.createElement("li");
//   myli.textContent=tabzodiaque[i];
//   listeZodiaque.appendChild(myli);

// }

//const enfant = document.getElementsByTagName("li");
function calculateAge() {
    let chaineBirthday = txtBirthday.value;
    console.log(chaineBirthday);
    let delay = Date.parse(chaineBirthday); // durée en milliseconde depuis 1er janvier 1970 à minuit
    const birthDate = new Date(delay); //creation de l'objet date
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    console.log("mois : " + birthMonth + " jour" + birthDay);

    function createLi(_signeAstro) {
        let myliSigne = document.createElement("li");
        myliSigne.className = "zodiaque";
        myliSigne.textContent = _signeAstro;
        listeZodiaque.appendChild(myliSigne);
    }

    function createImg(_urlimg, _nameImg, _hook) {
        const myImg = document.createElement("img");
        // myImg.src=_urlimg;
        myImg.setAttribute("src", _urlimg);
        myImg.id = _nameImg;
        myImg.setAttribute("alt", _nameImg);
        myImg.setAttribute("style", "width:200px;height:auto");
        _hook.appendChild(myImg);
    }

    switch (birthMonth) {
        case 1:
            listeZodiaque.childNodes.forEach((el) => {
                el.remove();
            });
            //listeZodiaque.remove();
            if (birthDay > 19) {
                //verseau

                console.log("verseau");


                //  myliSigne.textContent=tabzodiaque[10];
                createLi(tabzodiaque[10]);
                createImg("./assets/img/verseau.jpg", "Verseau", mySection);



                //
            } else {
                //capricone
                listeZodiaque.childNodes.forEach((el) => {
                    el.remove();
                });
                console.log("capricorne");
                createLi(tabzodiaque[9]);
                createImg("./assets/img/capricorne.jpg", "capricorne", mySection);
                // myliSigne.textContent=tabzodiaque[9];
            }
            break;

        case 2:
            //poisson

            //   listeZodiaque.remove();
            if (birthDay > 18) {
                console.log("poisson");

                createLi(tabzodiaque[11]);
                //  myliSigne.textContent=tabzodiaque[11];
            } else {
                //verseau
                console.log("verseau");

                createLi(tabzodiaque[10]);

                //     myliSigne.textContent=tabzodiaque[10];
            }

            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;

        default:
            console.error("error sur la valeur du mois");
            break;
    }

    const today = new Date(); // creation de l'objet date du jour
    const validationSummarize = document.createElement("p"); //creation d'un paragraphe HTML
    validationSummarize.id = "test"; //ajout d'un id pour utile pour JS
    validationSummarize.className = "summarize"; // ajout d'une classe pour mise en forme


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
}

btnCalculate.addEventListener("click", function () {
    mySection.childNodes.forEach((el) => {
        el.remove();
    });
    calculateAge();
});