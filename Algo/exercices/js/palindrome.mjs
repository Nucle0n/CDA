// Exercice 3.5 : Palindrome Un palindrome est une chaîne de caractères que l'on peut lire identiquement de droite à gauche,
// et gauche à droite. Par exemple: AA. 38783. LAVAL. LAVAL A ETE A LAVAL. ET LA MARINE VA VENIR A MALTE.
// Soit une chaîne de caractères terminée par un point. Ecrivez l'algorithme d'un programme permettant d'affirmer
// si cette phrase est ou non un palindrome. Si la chaîne de caractères n'est composée que du caractère '.',
// le message 'LA CHAINE EST VIDE' sera affiché. Proposez un jeu d'essai prévoyant les 3 cas suivants :
// ▪ la phrase est vide 
// ▪ la chaîne de caractères n'est pas un palindrome 
// ▪ la chaîne de caractères est un palindrome

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main(){
    const sc= new createInterface({input,output});
    let answer;

    do {
        answer = await sc.question('Entrez une phrase, ou un mot, terminez par un "." : ')
        if (answer.substring(answer.length -1) != '.'){
            console.log('Err : Terminez par un "."');
        } else if (answer.length <= 1){
            console.log('Err : La chaine de caractère est vide !')
        }
    } while (answer.substring(answer.length -1) != '.' || answer.length <= 1);

    answer = answer .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/[^a-zA-Z]/g, "")
                    .toLowerCase();
    
    console.log(answer);

    for (let i= 0; i <= Math.floor((answer.length)/2); i++){
        
        let indiceX = answer[i];
        let indiceY = answer[(answer.length-1)-i];
        // console.log(`${indiceX} , ${indiceY}`);

        if (indiceX != indiceY){
        // if (answer[i] != answer[(answer.length-1)-i]){
            console.log(`"${answer}"\nN'est pas un palindrome !`);
            break;

        } else if (indiceX === indiceY && i === Math.floor(answer.length/2)){
            console.log(`"${answer}"\nEst un palindrome !`);
            break;
        }
    }

    sc.close();
}

await main();