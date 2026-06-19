// Exercice 3.6 : Jeu du pendu
// L'algorithme lit un mot proposé par un premier joueur.
// Ce mot a une longueur minimum de 5 caractères (à contrôler).
// L'algorithme affiche ensuite le mot où toutes les lettres sauf la première et la dernière sont remplacées par un tiret.
// Un deuxième joueur propose des lettres une à une.
// Chaque fois que la lettre se trouve dans le mot, l'algorithme remplace les tirets qui remplaçaient cette lettre et
// réaffiche le mot. Le second joueur a droit à un maximum de 6 essais pour retrouver toutes les lettres

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { transferableAbortController } from 'node:util';

async function main(){
    const sc= new createInterface({input,output});

    let answer;

    do {
        answer = await sc.question(`Entrez un mot d'au moins 5 lettres : `);
        if (answer.length < 5) console.log('Pas assez de caractères !');
    } while (answer.length < 5); 

    
    console.clear();


    let devineTab= [];
    devineTab[0]= answer[0];
    // console.log(devineTab);
    
    for (let i= 1; i < answer.length-1; i++){
        devineTab[i]='_';
    }

    devineTab[answer.length-1] = answer[answer.length-1];

    // console.log(devineTab[devineTab.length]);

    for (let i = 0; i < devineTab.length; i++){
        output.write(devineTab[i]);
    }
    console.log('');

    do {
    let lettre = await sc.question('Proposez un caractère : ');
    lettre = lettre.toLowerCase();
    }

    for (let i = 0; i < devineTab.length; i++){
        if (answer[answer.length - (answer.length - i)] === lettre){
            console.log('oui');
        } else {
            console.log(`non`);
        }
    }

    sc.close();
}

await main();