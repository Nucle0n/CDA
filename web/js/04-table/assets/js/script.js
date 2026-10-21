const title = document.getElementById("title");

const pplList = document.createElement("ul");
pplList.id = "ppl-list";

const pplTable = document.getElementById("ppl-table");

let cpt     = 0;
let liCpt   = 0;

function addPeople() {

    const people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];

    for (let i = 0; i < people.length; i++) {

        const myli = document.createElement("li");
        myli.id = liCpt++;
        myli.textContent = people[i];
        pplList.appendChild(myli);

        addRow(people[i]);
    }
}

// ToDo - Pour fonction de remplissage du tbaleau partie : Nom et Prénom
// Parcourir tableau people;
// Extraire la chaine pour chaque index vers une variable temporaire;
// Reprendre la variable et la split sur les " " (espaces)
// La variables est désormais un tableau à deux indices
// Remettre le contenu de ce nouveau tableau dans deux variables distinctes :  nom et prénom
// insertRow
// insertCell et le contenum de nom / prenom / +fonction mailGen

function addRow(element) {

    const myTab = String(element).split(" ");
    const firstname = myTab[0];
    const lastname = myTab[1];

    const newRow = pplTable.insertRow(-1);
    newRow.id = lastname+(cpt++);
    

    const nameCell = newRow.insertCell();
    nameCell.textContent = lastname;

    const firstnameCell = newRow.insertCell();
    firstnameCell.textContent = firstname;

    const mailCell = newRow.insertCell();
    mailCell.textContent = mailGen(lastname, firstname);

    const delCell = newRow.insertCell();

    delBtn(delCell, newRow.id);
}


// ToDo - Fonction pour générer les addresses Email
// Besoin de deux paramètres : nom et prenom
// Possibilité d'ajouter une constante "domain" contenant "@example.com" (mieux en dehors de la fonction ?)
// Retourner : nom + prenom + "." + domain en minuscule

function mailGen(lastname, firstname) {
    const domain = "@example.com";
    return (firstname + "." + lastname).toLowerCase() + domain;
}

// Todo - Fonction qui ajoute un bouton de suppression de ligne
// Il faut différencier les lignes, donc modifier le code précédent pour identifier les lignes à leur creation (ajouter un ID unique)
// Ajouter une cellule (insertCell) avec un bouton
// Créer la function remove sur la ligne complète quand on clique le bouton

function delBtn (cell, rowid, liid) {

    const delBtn = document.createElement("button")
    // delBtn.id = newRow.id+"-btn";
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("type", "button");
    delBtn.textContent = "X"
    delBtn.addEventListener("click", function() {
        document.getElementById(rowid).remove();
        // document.getElementById(liid).remove(); 
    })

    cell.appendChild(delBtn);
}

addPeople();

document.getElementById("title").after(pplList);

function formAddPPL() {

    const addForm = document.createElement("form");
    addForm.id = "addForm";

    const fNameLabel = document.createElement("label");
    fNameLabel.id = "firstname_Label"
    fNameLabel.setAttribute("for","prenom")

    const firstname = document.createElement("input") 

    const lNameLabel = document.createElement("label");
    lNameLabel.id = "lastname_Label"
    lNameLabel.setAttribute("for", "nom");

    document.getElementById("title").after(addForm);

}