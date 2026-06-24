// Exercice 3.3 : Dénombrer les lettres de l'alphabet dans un tableau Lire un texte d'au moins 120 caractères (à contrôler).
// Compter et afficher le nombre d'occurrences (d'apparitions) de chacune des lettres de l'alphabet.

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main(){
    const sc= new createInterface({input,output});

    let alphabetMin=[];

    for (let i = 0; i < 26; i++){
        alphabetMin.push(String.fromCharCode(97+i));
    }

    console.log(alphabetMin);

    let frequencelettre = [];
    for (let i = 0; i < 26; i++){
        frequencelettre.push(0);
    }

    console.log(frequencelettre);

    let valide = false;
    let text = '';

    while (!valide){
        text = await sc.question(`Entrez un texte d'au moins 120 caractères : `);

        if (text.length < 120){
            console.log(`Texte trop court (seulement ${text.length} caractères) !`);
        } else {
            valide = true
        }
    }

    console.log(text);

    text = text.toLowerCase();
    text = text.replaceAll(' ','');
    text = text.replaceAll('é', 'e');
    text = text.replaceAll('è', 'e');
    text = text.replaceAll('ê', 'e');
    text = text.replaceAll('à', 'a');

    console.log(text);

    for (let i = 0 ; i < alphabetMin.length ; i++){
        let lettre = alphabetMin[i];
        for (let j = 0 ;j < text.length; j++ ){
            if (text[j] === lettre){
                frequencelettre[i]++;

            }
        }
    }

    for (let i = 0; i < frequencelettre.length ; i++){
        if (frequencelettre[i] != 0){
            console.log(`La lettre ${alphabetMin[i]} est présente : ${frequencelettre[i]} fois`);
        }
    }

    sc.close();
}

await main();