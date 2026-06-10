import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    const sc= new createInterface({input,output});

    // tests fonction random : 
    // let rng = Math.floor(Math.random()*51);
    // let rng2 = Math.floor(Math.random()*100)+1;
    // console.log(rng+'\n'+rng2);


    // tests tableaux
    let nb = parseInt(await sc.question(`Entrez un ombre entier :`));
    let tmp = 0;
    let monTab = [];

    for (let i = 0; i <= nb-1; i++){
        tmp++;
        monTab.push(tmp);
    }

    console.log(monTab);

    let monTab2 = Array(nb);
    

    sc.close();
}

await main();