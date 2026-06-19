// Exercice 3.3 : Dénombrer les lettres de l'alphabet dans un tableau Lire un texte d'au moins 120 caractères (à contrôler).
// Compter et afficher le nombre d'occurrences (d'apparitions) de chacune des lettres de l'alphabet.

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main(){
    const sc= new createInterface({input,output});

    let charCount = 0;
    let phrase;

    //Vérification de : Saisie = Au moins 120 caractères
    while (true) {
        try {
            phrase = await sc.question('Entrez une phrase d\'au moins 120 caractères :\n');
            charCount = phrase.length;
        
            if (phrase.length < 120){
                throw new Error(`La phrase que vous avez entré ne contient que \x1b[38;2;255;255;0m${charCount}\x1b[0m caractères !`);
            }
            break;
        }
        catch (erreur){
            console.log('\x1b[38;2;255;0;0mErreur :\x1b[;0m ' + erreur.message);
            charCount = 0;
        }
    }

    //Formatage dee la phrase pour ne garder que les lettres (retrait des accents, ponctuation, symboles)
    let totalChar = phrase.length;
    phrase = phrase .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/[^a-zA-Z]/g, "")
                            .toLowerCase();

    charCount = phrase.length;              
    let tabPhrase = phrase.split('');
    console.log(`La phrase contient \x1b[38;2;255;255;0m${charCount}\x1b[0m lettres, parmi un total de \x1b[38;2;255;255;0m${totalChar}\x1b[0m carctères`);
    
    const tab=[];
    for (let i=0; i < 26; i++){
    tab.push([String.fromCharCode(97 + i),0]);
    }

    for (let i= 0; i < phrase.length; i++){
        for (const element of tab){
            if (phrase[i] === element[0]){
                element[1]++;
            }
        }
    }

    console.table(tab);


    sc.close();
}

await main();