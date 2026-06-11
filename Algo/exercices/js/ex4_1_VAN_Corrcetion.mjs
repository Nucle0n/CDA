import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    
    const sc = new createInterface({input,output});
    const TAUX = 0.08;
    // let tabCf = [];
    let tabCf = new Array();
    let val = 0;
    let invest = parseFloat(await sc.question(`Veuillez saisir le montant de l'investissement initial : `));
    let vr = parseFloat(await sc.question(`Valeur résiduelle de l'investissement au bout de 5 ans : `));
    let van = 0;
    

    for (let i = 0; i < 4; i++){
        val = parseFloat(await sc.question(`Veuillez saisir le cash-flosh n°${i+1}: `));
        tabCf.push(val);
    }

    console.log(tabCf);

    van = -invest;

    for (let k = 0; k < tabCf.length; k++){
        van += tabCf[k] / Math.pow(1 + TAUX, k+1);
    }

        van += vr / Math.pow(1 + TAUX,tabCf.length+1);

    console.log(`VAN = ${van.toFixed(2)}`);

    sc.close();
}

await main();