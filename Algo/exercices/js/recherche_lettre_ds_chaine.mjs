// EXERCICE 3.4 : RECHERCHER UNE LETTRE DANS UNE CHAINE DE CARACTERES
// Soit une chaîne de caractères terminée par le caractère « . ».
// Donnez l'algorithme d'un programme qui compte le nombre d'occurrences d'une lettre donnée (« a » par exemple) dans cette
// chaîne.
// Si la chaîne de caractères est vide ou n'est composée que du caractère « . », le message « LA CHAINE EST VIDE » sera affiché.
// Proposez un jeu d'essai prévoyant les 3 cas suivants :
// ▪ La phrase est vide
// ▪ La lettre n'est pas présente
// ▪ La lettre est présente une ou plusieurs fois

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { validateHeaderName } from 'node:http';

async function main() {
    const sc= new createInterface({input,output});
    // let point_verif = true

    let phrase = '';
    let tabPhrase = phrase.split('');
    let last = tabPhrase[tabPhrase.length -1];

    while (true){   
        try {

            phrase = await sc.question('Entrez une phrase, terminez par un point : ');
            // phrase = phrase.replaceAll(' ','');
            phrase = phrase .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/[^a-zA-Z0-9.]/g, "")
                            .toLowerCase();
            tabPhrase = phrase.split('');
            last = phrase.at(-1);

            if (phrase === '' || phrase ==='.'){
                throw new Error('La phrase est vide');
            }

            if (last != '.'){
            throw new Error('La phrase ne se termine pas par un point.');
            }

            break;

        }
        catch (erreur){
            console.log('Erreur : ', erreur.message);
            console.log('Veuillez réessayer.\n');

        }
    }

    console.log(tabPhrase);
    console.log(last);
    
    let userChar = (await sc.question('Entrez une lettre: ')).toLowerCase();
    let count = 0;
    let position = [];

    // console.log(userChar);

    for (let i= 0; i < tabPhrase.length - 1; i++){
        if (tabPhrase[i] === userChar){
            count++;
            position.push(i+1);
        }
    }

    if (count <= 0){
        console.log('La lettre n\'est pas présente dans la phrase !');
    } else {
        console.log(`La lettre est présente ${count} fois dans la phrase au(x) position(s) : ${position}`);
    }


sc.close();
}

await main();