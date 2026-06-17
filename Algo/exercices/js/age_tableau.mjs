// Exercice 2.7.1 : Calculer le nombre de jeunes
// Il s'agit de dénombrer toutes les personnes d'âge inférieur strictement à 20 ans parmi un échantillon de 20
// personnes. L’utilisateur est invité à saisir les 20 valeurs.
// Décrivez l'algorithme qui affiche le nombre de jeunes et codez la solution.
// Exercice 2.7.2 : Afficher le nombre de personnes de chaque catégorie
// Compléter l'algorithme précédent pour répondre à la demande suivante:
// Si toutes les personnes ont moins de 20 ans, affichez « TOUTES LES PERSONNES ONT MOINS DE 20 ANS ».
// Si aucune personne n'a moins de 20 ans, affichez « TOUTES LES PERSONNES ONT PLUS DE 20 ANS ».
// Sinon, affichez le nombre de personnes pour chaque catégorie (« - de 20, + de 20, = à 20).

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function choix_depart(sc){
    
    let tabAge = [];
    let choix_remplissage = await sc.question('Remplissage automatique du tableau ? (o/n) : ');
    
    console.log(choix_remplissage);

        if (choix_remplissage === 'o'){
            console.log('ok');
        } else {
            tabFiller(tabAge,20);
        }
    
        console.log(tabAge);
}


function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;    
}

function tabFiller(tableau,size){
    for (let i = 0; i<size; i++){
        tableau.push(randomGenerator(1,20));        
    }

}

async function main() {
    const sc= new createInterface({input,output});

        await choix_depart(sc);

        sc.close();
}

await main();