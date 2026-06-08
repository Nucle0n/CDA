import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { LOADIPHLPAPI } from 'node:dns';

async function main() {
    const sc= new createInterface({input,output});
    let year= parseInt(await sc.question('Entrée une année (YYYY): \n'));
    // let year= Number(await sc.question('Entrée une année (YYYY): \n')

    if (year %4 != 0){
        console.log(year + ' n\'est pas bissextile');
    } else {
        if (year %100 != 0){
            console.log(year + ' est bissextile');
        } else {
            if (year %400 != 0){
                console.log(year + ' n\'est pas bissextile');
            } else {
                console.log(year + ' est bissextile');
            }
        }
    }
    sc.close();
}

await main();