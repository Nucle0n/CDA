const mybtnSubmit= document.getElementById("valider");
const txtName=document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
 const chaine2= document.querySelector("#myPassword2");

mybtnSubmit.addEventListener("click",
    function(event){
        event.preventDefault();

        const myForm=document.querySelector("form");

        if (validateName(txtName.value)==true && validatePassword(chaine1.value,chaine2.value)==true ) {
       
            myForm.submit();   
        }else{

            alert("saisie du nom incorrect! ou mot de passe différents");
        }

    }
)
/**
 * 
 * @param {*} chaine 
 */

function validateName(chaine)
{ 
    let regexName=/^[A-Z][a-z]{3,}$/;
    
    return regexName.test(chaine);
}

function validatePassword(chaine1,chaine2)
{
if (chaine1===chaine2) {
    
    return true;
}
return false;
}


function regexPassword(password) {
    let regexPwd=/^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{9}$/;
    return regexPwd.test(password);
}


const birthday = document.getElementById("birthday")
