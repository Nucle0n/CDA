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


async function main(){
    const sc= new createInterface({input,output});

    let tabAge = [];
    let choix_remplissage = await sc.question('Remplissage manuel du tableau ? (o/n) : ');
    choix_remplissage = choix_remplissage.toLowerCase();

    console.log(choix_remplissage);

        if (choix_remplissage === 'o'){
            
            for (let i=0; i < 20; i++){
                
                let age;
                let valide = false;

                while (!valide){

                    age = parseInt(Math.abs(await sc.question(`Entrez un nombre entier positif [${i+1}] : `)));

                    if (!isNaN(age) && age >= 1 && age <=130 ){
                        valide = true;
                    } else {
                        console.log("Erreur : veuillez saisir un entier compris entre 1 et 130.");
                    }
                }

                tabAge[i] = age;
            }

        } else {
            tabFiller(tabAge,20);
        }

        tabAge.sort((a,b) => a - b);
        console.log(tabAge);

        let jeune = 0;
        let adultes = 0;
        
        for (let i = 0; i<20; i++){
            if (tabAge[i] < 20){
            jeune++;
            } else if (tabAge[i] > 20){
            adultes++;
            }
        }
    
        if (jeune == 0) {
        console.log('Toutes les personnes ont plus de 20 ans.');
        } else if (jeune == 20){
            console.log('Toutes les personnes ont moins de 20 ans.');
        } else {
        console.log(`Il y a ${jeune} personne(s) ayant moins de 20ans\nIl y a ${adultes} personne(s) ayant plus de 20 ans\nIl y a ${20 - adultes - jeune} personnes ayant 20 ans.`);
        }

        sc.close();
}

await main();


function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;    
}

function tabFiller(tableau,size){

    for (let i = 0; i<size; i++){
        tableau.push(randomGenerator(1,100));
    }
}