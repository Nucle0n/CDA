import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { flushCompileCache } from 'node:module';

async function main() {
    
    const sc = new createInterface({input,output});

    let init = parseFloat(await sc.question("Investissement initial :"));
    let taux  = parseFloat(await sc.question("Taux d'actualisation (%) :")) / 100;

    let flux = [];
    for (let i = 1; i <= 4; i++){
        let cf = parseFloat(await sc.question(`Cash-Flow pour l'année ${i} : `));
        flux.push(cf);
    }

    let vr = parseFloat(await sc.question("Valeur résiduelle :"));

    let van = -init;

    for (let i = 0; i < flux.length; i++){
        van += flux[i] / Math.pow(1 + taux, i+1);
    }

        van += vr  / Math.pow(1 + taux, flux.length +1);
        
    console.log(`VAN = ${van.toFixed(2)} €`);

    sc.close();
}

await main();