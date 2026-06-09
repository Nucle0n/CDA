import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {

    const sc= new createInterface({input,output});
    let nb  = await sc.question(`Entrez un nombre entier : `);
    
    if (nb < 2){
        console.log(`${nb} n'a pas de diviseur autre 1 et lui-même !`);
    }

    let div = [];

    div.push(1);
    for (let i = 2; i <= Math.sqrt(nb); i++)
        if ( nb %i == 0){
            div.push(i);

            if ( nb / i != i){
            div.push(nb / i);
            }            
        }
    console.log(div)

    let tmp = 0;

    for (let i = 0; i <= div.length -1 ; i++){
        tmp += div[i];
        console.log(tmp)
    }

    if (tmp == nb){
        console.log(`${nb} est un nombre parfait.`);
    } else {
        console.log(`${nb} n'est pas un nombre parfait`);
    }

    sc.close();
}

await main();