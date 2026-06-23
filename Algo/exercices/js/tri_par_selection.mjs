// exercice + du tri par sélection d'un tableau indicé
// Exercice 3.4 : Tri d'un tableau Nous désignerons par a1, a2, ..., 
// aN les éléments d'un tableau à trier par ordre croissant. On commence par chercher l'indice du plus petit des éléments,
// soit j cet indice. On permute alors les valeurs de a1 et aj . 
// On cherche ensuite l'indice du plus petit des éléments a2, a3, ..., an et on permute avec a2, etc.

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { monitorEventLoopDelay } from 'node:perf_hooks';
import { posix } from 'node:path';

function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;    
}

function tabFiller(tableau,size){ 
    for (let i = 0; i<size; i++){
        tableau.push(randomGenerator(0,100));
    }
}

async function main(){
    const sc= new createInterface({input,output});

    const monTab= [];

    tabFiller(monTab,10);

    console.table(monTab);

    let temp;
    let inferieur;

    for (let i = 0; i < monTab.length -1; i++){
        inferieur = i;
            for (let j = i+1; j < monTab.length; j++ ){
                if (monTab[j] < monTab[inferieur]){
                    inferieur = j;
                }
        }

        temp = monTab[i];
        monTab[i] = monTab[inferieur];
        monTab[inferieur] = temp;
    }

    console.table(monTab);

    sc.close();
}

await main();