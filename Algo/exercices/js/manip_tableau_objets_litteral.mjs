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
import fs from 'node:fs/promises';


async function main(){
    const sc= new createInterface({input,output});
    const contenu = await fs.readFile('./CDA/Algo/exercices/js/employees.json', 'utf-8');

    const json = JSON.parse(contenu);

    // console.log(contenu);
    console.log(typeof contenu);
    console.log(contenu.length);
    console.log(json.data[0]);
    console.table(json.data);
    
    

    sc.close();
}

await main();