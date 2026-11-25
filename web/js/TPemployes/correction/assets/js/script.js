function creerCelluleTitre(accroche, contenu) {
    let cellule = document.createElement("th");
    cellule.textContent = contenu;
    accroche.appendChild(cellule);
}

function creerTableau(_data) {
    let crochet = document.getElementById("employes");
    let entete = crochet.createTHead();
    let lignetitre = entete.insertRow();
    tabTitre = [
        "EID",
        "full name",
        "email",
        "montly salary",
        "years of birth",
        "actions",
    ];
    for (let i = 0; i < tabTitre.length; i++) {
        creerCelluleTitre(lignetitre, tabTitre[i]);
    }

    let corpstableau = crochet.createTBody();
    corpstableau.setAttribute("id", "mytable");
    for (let i = 0; i < _data.length; i++) {
        let row = corpstableau.insertRow();
        monObjet = _data[i];
        for (const key in monObjet) {
            if (key == "id" || key == "employee_name") {
                let cell = row.insertCell();
                cell.textContent = monObjet[key];
            }
        }
        let cellEmail = row.insertCell();

        let tabEmployeeName = monObjet["employee_name"].split(" ");

        let chaineMail =
            monObjet["employee_name"].substr(0, 1) +
            "." +
            tabEmployeeName[1] +
            "@email.com";
        cellEmail.textContent = chaineMail.toLowerCase();
        let cellSalary = row.insertCell();
        let salaryMonth = Math.round((monObjet.employee_salary / 12) * 100) / 100;
        cellSalary.textContent = (monObjet.employee_salary / 12).toFixed(2) + "€";

        let cellYear = row.insertCell();
        let todayDate = new Date();
        let yearNow = todayDate.getFullYear();
        insertAge = yearNow - monObjet.employee_age;
        cellYear.textContent = insertAge;
    }
    const sum = _data.reduce(
        (accumulator, currentValue) => {
            return accumulator + Math.round((currentValue.employee_salary / 12) * 100) / 100
        },0)

    let row = corpstableau.insertRow();
    let cellnbEmployes = row.insertCell();
    cellnbEmployes.textContent = _data.length;
    row.insertCell();
    row.insertCell();
    let celltotalSalaire = row.insertCell();
    celltotalSalaire.textContent = sum.toFixed(2) + "€";
    row.insertCell();
}

const zoneSearch = document.getElementById("mySearch");
const btnSearch = document.querySelector("#btnSearch");

fetch("./assets/employes.json")
    .then(response => { return response.json() })
    .then((response) => {

        tabledata = response.data;
        creerTableau(tabledata);
        console.log(tabledata);

        btnSearch.addEventListener("click", function () {
            // let myEmployee = tabledata.find((obj) => (obj.employee_name).toLowerCase() == (zoneSearch.value).toLowerCase().trim());
            // console.log(myEmployee);
        
            let tabSenior= tabledata.filter((employe)=> parseInt(employe.employee_age)> parseInt(zoneSearch.value));
            console.log(tabSenior);
            // for (let i = 0; i < tabSenior.length; i++) {];
                
            // }
        })
    })



// async function loadEmployee() {
//     try {
//         const response = await fetch("./assets/employes.json");
//         if (response.status != 200) {
//             throw new Error(`erreur http : ${response.status}`);
//         }
//         const mydata = await response.json();
//         tabledata = [];
//         tabledata = mydata.data;
//         creerTableau(tabledata);
//         console.log(mydata);
//     } catch (error) {
//         console.error("impossible de charger les objets", error);
//     }
// }

// loadEmployee();