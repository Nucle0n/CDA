// objet initial //
    const myEmployee = {
        nom: "Doe",
        prenom: "John",
        dateNaissance: "1981-11-12",
        salaire: 2150
    };
// ---------------//

const myTable = document.getElementById("tabObj");
const myThead = myTable.createTHead();
const myTitleRow = myThead.insertRow();

for (const key in myEmployee) {
    const myTitleCell = document.createElement("th");
    myTitleRow.appendChild(myTitleCell);
    myTitleCell.textContent = key;
}

const myTbody = myTable.createTBody();
const myRow = myTbody.insertRow();

for (const key in myEmployee) {
    const myCell = myRow.insertCell();

    if (key == "salaire") {
        myCell.textContent = myEmployee[key] + " €";
    }
    else if (key == "dateNaissance") {
        const tabDate = myEmployee[key].split("-");
        myCell.textContent = tabDate[2] + "-" + tabDate[1] + "-" + tabDate[0];
    }
    else {
        myCell.textContent = myEmployee[key];
    }
}

// Ajout colonne Email 
    const email = genMail(myEmployee['prenom'], myEmployee['nom']);
    // myEmployee.email = email;

    const emailThead = document.createElement("th");
    emailThead.textContent = "Email";
    myTitleRow.insertBefore(emailThead, myTitleRow.children[3]);

    const emailCell = myRow.insertCell(3);
    emailCell.textContent = email;

    function genMail(prenom, nom) {
        return (prenom+"."+nom+"@example.com").toLowerCase();
    }
// ----------------------------//

// construction de la base du formulaire //
    const editProfil = document.getElementById("editProfil");
    
    const myForm = document.createElement("form");
    editProfil.after(myForm);

    const tabFor = ["Prenom", "Nom", "Birthday", "Salaire"];

    for (const e of tabFor) {
        
        const myLabel = document.createElement("label");
        myLabel.htmlFor = e.toLowerCase();
        myLabel.textContent = (e == "Birthday") ? "Date de naissance:" : e+":";
        // Si "e" est "Birthday", Alors On remplace "Birthday" par "Date de naissance", sinon on conserve "e" tel quel;
        myForm.appendChild(myLabel);
        
        const myInput = document.createElement("input");
        myLabel.appendChild(myInput);
        myInput.type = (e == "Birthday") ? 'date' : "text";
        myInput.id = e.toLowerCase();
    }

    // Ajout bouton "Enregistrer"//
    const myBtn = document.createElement("input")
    myBtn.type = "submit"
    myBtn.value = "Enregistrer";
    myBtn.id = "btnValidate";
    // myBtn.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     if ()
    // })
    myForm.appendChild(myBtn);

    // function verifModif(){
    //     if (myInput.value!=myEmployee.nom){
    //         myEmployee.nom = myInput.value;
    //     }
    // }

//----------------------------------------//

// Une boucle parcours l'objet et récupère les values des différents attributs


