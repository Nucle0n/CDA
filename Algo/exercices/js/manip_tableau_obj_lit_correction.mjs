// Exercice + sur la manipulation de tableaux d'"objets littérals" avec utilisation de fonctions pour certaines paires CLE :VALEUR

// Pour cet exercice, vous devez créer une application web affichant la liste des employés d’une société. Les informations proviennent
// d’une API fictive et sont rendues disponibles dans le fichier JSON employees.json.
// Les employés doivent être listés dans un tableau (sous forme d'objet littéral), avec les informations suivantes :

// ID (fourni par API) 
// Full name (Prenom Nom)
// Email : (à calculer) Exemple pour John Doe => “j.doe@email.com”
// Salaire mensuel : (à calculer)
// Year of birth : (à calculer) 

// Il faut créer un tableau d'objet littéraux qu'on pourra afficher avec console.table() ou une fonction d'affichage à faire; 
// par exemple le premier objet 

// { id:1, 
// full_name:"Tiger Wood", 
// email : "t.wood@gmail.com", 
// income_monthly:7180 , 
// year_of_birth:1965 
// }

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {readFile} from 'node:fs/promises';

async function main(){
    const textBrut = await readFile('./employees.json', 'utf-8');

    // 2. On transforme ce texte en un véritable tableau d'objets littéraux JS
    const mesdata = JSON.parse(textBrut);

    //3. Utilisation du tableau    
    let tabEmployes = mesdata.data;
    // console.table(mesdata.data);
    // console.log(tabEmployes);

    for (let i = 0; i < tabEmployes.length; i++){
        let objetTemp = tabEmployes[i];
        objetTemp["mail"] = creerMail(tabEmployes[i]);
        objetTemp["employee_salary"] = Math.round(tabEmployes[i].employee_salary/12);
        objetTemp["Birth Year"] = new Date().getFullYear()-tabEmployes[i].employee_age;
        console.log(objetTemp);
    }

    console.table(tabEmployes);

    // const sc = new createInterface({input,output});
    // sc.close;

}

function creerMail(obj){
    let chaineMail = '';
    let chaineNom = obj.employee_name;
    let tabNom = chaineNom.split(' ');
    chaineMail += tabNom[0].substring(0,1) + '.' + tabNom[1] + '@gmail.com';
    return chaineMail.toLowerCase();
}

await main();