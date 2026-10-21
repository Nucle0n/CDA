
// Notre objet contenant les informations de John Doe
const myEmployee = {
    nom: "Doe",
    prenom: "John",
    dateNaissance: "1981-11-12",
    salaire: 2150
};

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

