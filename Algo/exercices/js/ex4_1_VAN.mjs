import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    
    const sc = new createInterface({input,output});

    let init = parseFloat(await sc.question("Investissement initial :"));
    let i  = parseFloat(await sc.question("Taux d'actualisation (%) :")) / 100;

    let cf1 = parseFloat(await sc.question("Cash-flow année 1 :"));
    let cf2 = parseFloat(await sc.question("Cash-flow année 2 :"));
    let cf3 = parseFloat(await sc.question("Cash-flow année 3 :"));
    let cf4 = parseFloat(await sc.question("Cash-flow année 4 :"));

    let vr = parseFloat(await sc.question("Valeur résiduelle :"));

    let van =
        -init +
        cf1 / Math.pow(1 + i, 1) +
        cf2 / Math.pow(1 + i, 2) +
        cf3 / Math.pow(1 + i, 3) +
        cf4 / Math.pow(1 + i, 4) +
        vr  / Math.pow(1 + i, 5);
        
    console.log(`VAN = ${van.toFixed(2)} €`);

    sc.close();
}

await main();