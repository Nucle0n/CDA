import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    const sc= new createInterface({input,output});

    

sc.close();
}

await main();