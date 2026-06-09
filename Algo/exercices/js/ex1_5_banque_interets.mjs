// Exercice 1.5 : 
// Calcul d’intérêts Lire la somme initiale S placée sur un compte, l'intérêt i offert par la banque et le nombre N d'années de placement de la somme S. Calculez la valeur acquise par la somme S placée pendant N années : 
// ▪ avec un intérêt simple : S ( 1 + N * i ) 
// ▪ avec un intérêt composé : S ( 1 + i )N

// Début programme 

//     AFFICHER `Entrez le montant présent sur le compte`
//     LIRE somme
//     AFFICHER `Entrez le taux d'intérêts proposé par la banque`
//     LIRE taux 
//     AFFICHER `Entrez le nombre d'années`
//     LIRE nbA 

//     intSimp <- somme ( 1 + nbA * taux)
//     intComp <- somme ( 1 + taux ) nbA

//     AFFICHER `Intérêts simples = ${intSimp}\nIntérêts composés = ${intComp}`

// Fin programme


import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    
    const sc = new createInterface({input,output});

    let somme   = parseFloat(await sc.question(`\nEntrez le montant présent sur le compte : `));
    let taux    = parseFloat(await sc.question(`Entrez le taux d'intérêts proposé par la banque : `)) / 100;
    let nbA     = parseFloat(await sc.question(`Entrez le nombre d'années :`));

    let intSimp = somme * taux * nbA;
    let intComp = Math.round(((somme * Math.pow((1 + taux),nbA)) - somme) * 100) / 100;
    
    console.log(`\x1b[1;4m\nCALCUL DE INTERETS :\x1b[0m\nIntérêts simples\t= \x1b[3;38;2;255;184;0m${intSimp}\x1b[0m\t| Nouveau capital = \x1b[3;38;2;255;184;0m${(intSimp + somme).toFixed(2)}\x1b[0m\nIntérêts composés\t= \x1b[3;38;2;255;184;0m${intComp}\x1b[0m\t| Nouveau capital = \x1b[3;38;2;255;184;0m${intComp + somme}\x1b[0m\n`)

    sc.close();
}

await main();