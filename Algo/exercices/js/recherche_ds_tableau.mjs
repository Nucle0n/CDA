import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

function tabgenerator(tableau){

    for (let i = 0; i < 10; i++) {

        let rng = Math.floor(Math.random()*100)+1;
        // tab[i] = Math.floor(Math.random()*100)+1;
        
        if (!tableau.includes(rng)){
            tableau.push(rng);
        } else {
            i--;
        }
    }

    tableau.sort((a,b) => a-b);

    // console.log(tableau);
}
async function main() {
    const sc= new createInterface({input,output});

    let tab = [];
    tabgenerator(tab);
    let position = 0;

    let answ = parseInt(await sc.question('Entrez un nombre entier positif inférieur à 101 : '));

    while (isNaN(answ) || answ === '' || answ > 100 || answ < 1){
        answ = parseInt(await sc.question('\x1b[3;38;2;255;0;0mErreur de saisie utilisateur\x1b[0m\nVeuillez entrer un nombre entier entre 1 et 100 : '));
    }

    if (!tab.includes(answ)){
            console.log(`\n[404 Not found]\nLe nombre \x1b[38;2;255;255;0m${answ}\x1b[0m n'est pas présent dans le tableau\n`);
    } else {
        for (let i = 0; i <= tab.length; i++){
            if (tab[i] === answ){
                position = i+1;
            }
        }
        console.log(`\x1b[38;2;255;255;0m${answ}\x1b[0m est présent dans le tableau à la position : \x1b[38;2;255;255;0m${position}\x1b[0m.`);
    }

sc.close();
}

await main();