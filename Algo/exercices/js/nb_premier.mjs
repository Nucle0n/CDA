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
    let estpremier;

    if (nb < 2){
        estpremier = false;
    }

    let div = 0;

    for (let i = 2; i <= Math.sqrt(nb); i++){
        
        if ( nb %i == 0){
            estpremier = false;
            div = i;         
        }
    }

    if (!estpremier){
        console.log(`${nb} n'est pas un nombre premier.`);
    } else {
        console.log(`${nb} est un nombre premier.`);
    }

    sc.close();
}

await main();