import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main(){
    const sc= new createInterface({input,output});

    const value = parseInt(await sc.question(`Valeur : `));
    console.log(value);

    // for (let i = 0; i <= 15; i++){
    //     for (let j= 0; j < 8; i++){
    //         console.log('▄');
    //     }
    // }

    for (let i = value; i >= 0; i--){
        let tableau=[];
        let ligne = '';
        for (let j = 0; j < value*(1+Math.sqrt(5)/2) ; j++){
            ligne += '██';
        }
        console.log(ligne);
    }

    sc.close();
}

await main();