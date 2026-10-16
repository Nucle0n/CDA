
const mybtnSubmit = document.getElementById("valider");
const txtName = document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
const chaine2 = document.querySelector("#myPassword2");
const txtPhone = document.querySelector("#myPhone");

mybtnSubmit.addEventListener("click",
    function (event) {
        event.preventDefault();

        const myForm = document.querySelector("form");

        if (validateName(txtName.value) == true && validatePhoneNumber(txtPhone.value) == true) {
            alert("formulaire OK");
            // myForm.submit();   
        } else {

            alert("saisie du nom incorrect! numero faux ");
        }

    }
)
/**
 * 
 * @param {*} chaine 
 */

function validateName(chaine) {
    let regexName = /^[A-Z][a-z]{3,}$/;

    return regexName.test(chaine);
}
/**
 * Valider que les 2 mots de passe sont identiques 
 * ET
 * longueur de 12 caractères minimum
 * au moins 1 majuscule 
 * au moins 1 minuscule 
 * au moins 1 chiffre 
 * @param {*} chaine1  
 * @param {*} chaine2 
 * @returns 
 */
function validatePassword(chaine1, chaine2) {
    if (chaine1 === chaine2) {

        return true;
    }
    return false;
}
/**
 * validation conformité du numero de téléphone * Remplacer les points et les espaces par une chaine vide.
 * 0607080910
 * +33607080910
 * 01 / 02 / 03 / 04 / 05 / 06 / 07 / 09
 * @param {} inputchaine 
 * @returns
 */
function validatePhoneNumber(_inputchaine) {
    let chaine = "" + _inputchaine;
    const regexDotSpace = /\.|\s/g;
    chaine = chaine.replaceAll(regexDotSpace, "");
    const regexPhone = /^0[1-79][0-9]{8}$/g;

    console.log("test");
    if (regexPhone.test(chaine)) {
        console.log(chaine);

        return true;
    }
    return false;
}

function regexPassword(password) {
    let regexPwd = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{9}$/;
    return regexPwd.test(password);
}



