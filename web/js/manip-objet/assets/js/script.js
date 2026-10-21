const myEmployee = {
    nom: "Doe",
    prenom: "John",
    dateNaissance: "1981-11-12",
    salaire: 2150
};

const myTable = document.getElementById("tabObj");
const myThead = myTable.createTHead();
const myTitleRow = myThead.insertRow();

const email = genMail(myEmployee['prenom'], myEmployee['nom']);
// myEmployee.email = email;

const editProfil = document.getElementById("editProfil");
const myForm = document.createElement("form");
editProfil.after(myForm);

const tabFor = ["Prenom", "Nom", "Birthday", "Salaire"];

for (const e of tabFor) {
    
    const myLabel = document.createElement("label");
    myLabel.htmlFor = e.toLowerCase();
    myLabel.textContent = (e == "Birthday") ? "Date de naissance" : e;
    // Si "e" est "Birthday", Alors On remplace "Birthday" par "Date de naissance", sinon on conserve "e" tel quel;
    myForm.appendChild(myLabel);
    
    const myInput = document.createElement("input");
    myLabel.appendChild(myInput);
    myInput.type = (e == "Birthday") ? 'date' : "text";
    myInput.id = e.toLowerCase();
}

const myBtn = document.createElement("button")
myBtn.textContent = "Enregistrer";
myForm.appendChild(myBtn);

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

const emailThead = document.createElement("th");
emailThead.textContent = "Email";
myTitleRow.insertBefore(emailThead, myTitleRow.children[3]);

const emailCell = myRow.insertCell(3);
emailCell.textContent = email;

function genMail(prenom, nom) {
    return (prenom+"."+nom+"@example.com").toLowerCase();
}


