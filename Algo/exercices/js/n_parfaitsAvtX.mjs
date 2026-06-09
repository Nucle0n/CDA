import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { count } from 'node:console';

async function main() {

    const sc= new createInterface({input,output});
    let nb  = await sc.question(`Entrez un nombre entier : `);
    let div = [];
    let cpt = 0;
    let tmp = 0;
    let nbtmp = 0;
   
    for (let i = 0; i <= nb - 1; i++){
        nbtmp ++;

        div.push(1);
        for (let i = 2; i <= Math.sqrt(nbtmp); i++)
            if ( nbtmp %i == 0){
                div.push(i);

                if ( nbtmp / i != i){
                div.push(nbtmp / i);
                }            
            }
        console.log(div)

        for (let i = 0; i <= div.length -1 ; i++){
            tmp += div[i];
            console.log(tmp)
        }

        if (tmp == nbtmp){
            cpt++;
            console.log(`${nbtmp} est un nombre parfait.`);
        }
    }

    console.log(`Il y a ${cpt} nombre parfait avant ${nb}`);

    sc.close();
}

await main();