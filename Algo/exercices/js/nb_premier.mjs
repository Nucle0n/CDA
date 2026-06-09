// Exercice 1.9 : Recherche des diviseurs d’un nombre 
// Lire un nombre entier et déterminer tous ses diviseurs autres que 1 et lui-même. 

// Début programme
//     AFFICHER "Entrez un nombre entier : "
//     LIRE <- nb 

//     SI nb... ALORS 
//     AFFICHER 'nb est un nombre premier'
//     SINON   
//     AFFICHER 'nb n\'est pas un nombre premier'
//     FIN SI

// Fin programme

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {

    const sc= new createInterface({input,output});
    let nb  = await sc.question(`Entrez un nombre entier : `);
    
    if (nb < 2){
        console.log(`${nb} n'a pas de diviseur autre 1 et lui-même !`);
    }

    let div = [];

    for (let i = 2; i <= Math.sqrt(nb); i++)
        if ( nb %i == 0){
            div.push(i);

            if ( nb / i != i){
            div.push(nb / i);
            }            
        }
    
    div.sort((a,b) => a - b);

    for (let element of div)
        console.log(element);

    sc.close();
}

await main();