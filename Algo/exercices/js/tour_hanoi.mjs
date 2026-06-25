// TOUR DE HANOI

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { table } from 'node:console';

function affichage(tableau){
    console.log();
    const hauteur = Math.max(...tableau.flat())-1;
    for (let i = hauteur; i >= 0; i--){
        let ligne = '';
        for (let j = 0; j < 3; j++){
            ligne += (tableau[j][i] ?? '.') +' ';
        }
        console.log(ligne);
    }
}

function deplacement(tableau, dest, tour, niv){
     
    // if (tableau[tour][niv+1] != undefined){
    if (tableau[tour][niv+1]){
        const degage = 3 - (dest + tour);
        deplacement(tableau, degage, tour, niv+1);
    }
    const valeur = tableau[tour][niv];

    affichage(tableau);
    tableau[dest].push(valeur);
    tableau[tour].pop();

    if ( valeur > 1){
        const inferieur = premier_inf(tableau, valeur);
        deplacement(tableau,dest,inferieur.tour,inferieur.niv); 
    }

}

function premier_inf(tableau,valeur){
    for (let i = 0 ; i < tableau.length; i++){
        for(let j = 0; j < tableau[i].length; j++){
            if (tableau[i][j] === valeur -1){
                return {
                    tour:i,
                    niv:j
                }
            }
        }
    }
}

async function main(){
    const sc= new createInterface({input,output});

    const A = [], 
          B = [], 
          C = [];

    const taille = parseInt(await sc.question('choisissez le nombre de palets :'));

    console.log(taille);

    for (let i= taille; i > 0; i--){
        A.push(i);
        // B.push('');
        // C.push('');
    }

    let tabGen = [A,B,C];

    // console.table(tabGen);    
    // console.table(A);
    // console.table(B);
    // console.table(C);

    deplacement(tabGen,2,0,0);
    affichage(tabGen);

    sc.close();
}

await main();
