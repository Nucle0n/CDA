import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    const sc= new createInterface({input,output});

    const voyelles=['a','e','i','o','u','y'];
    let string = 'On teste le split';
    let tab = string.split('');

    console.log(string + '\n');
    console.log(tab);

    tab = string.split(' ');
    console.log(tab);

    let mots = {
        sujet       : tab[0],
        verbe       : tab[1],
        liaison     : tab[2],
        complement  : tab[3]
    };

    console.log(mots);
    console.log(voyelles);

    sc.close();
}

await main();