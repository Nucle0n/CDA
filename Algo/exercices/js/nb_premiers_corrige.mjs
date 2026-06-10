import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    
    const sc= new createInterface({input,output});

    let nb = '';
    let cpt = 0;

    do {
        if (cpt > 0){
            console.log("Err : Entrée invalide !");
        }

    cpt++;
    nb = parseInt(await sc.question(`Entrez un nombre entier : `));

    } while (isNaN(nb) || nb < 0);
    
    let diviseur = 2;
    while (nb %diviseur && diviseur<nb) {
        diviseur++;
    }

    if (diviseur <nb){
        console.log(`Le nombre ${nb} n'est pas un nombre premier.`);
    } else {
        console.log(`Le nombre ${nb} est un nombre premier.`);
    }
    
console.log(`\n${nb}`);

sc.close();
}

await main();