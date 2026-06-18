// Exercice 3.3 : Dénombrer les lettres de l'alphabet dans un tableau Lire un texte d'au moins 120 caractères (à contrôler).
// Compter et afficher le nombre d'occurrences (d'apparitions) de chacune des lettres de l'alphabet.

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

function tabAlphabet(tableau){

    for (let i = 0; i < 26; i++){
        tableau[i] = String.fromCharCode(97 + i);
    }
}

async function main(){
    const sc= new createInterface({input,output});
    let alphabet = [];
    let charCount = 0;
    let phrase;
    tabAlphabet(alphabet);

    console.log(alphabet);   
    while (true) {
        try {
            phrase = await sc.question('Entrez une phrase d\'au moins 120 caractères :\n');
            charCount = phrase.length;
        
            if (phrase.length < 120){
                throw new Error(`La phrase que vous avez entrez ne contient que \x1b[38;2;255;255;0m${charCount}\x1b[0m caractères !`);
            }
            break;
        }
        catch (erreur){
            console.log('\x1b[38;2;255;0;0mErreur :\x1b[;0m ' + erreur.message);
            charCount = 0;
        }
    }
        phrase = phrase .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")
                                .replace(/[^a-zA-Z0-9.]/g, "")
                                .toLowerCase();

        for (let i= 0; i < phrase.length; i++){
            charCount++;
        }
           

    console.log(phrase);
                            
    let tabPhrase = phrase.split('');

    console.log(tabPhrase);
    console.log(`La phrase contient \x1b[38;2;255;255;0m${charCount}\x1b[0m lettres`);


    sc.close();
}

await main();