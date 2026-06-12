import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


async function main() {
    const sc = new createInterface({ input, output });

    let answ,tab, verifNum, verifUnit;

    do {
        answ = await sc.question('Entrez une valeur de temperature en degré Celsius ou Farenheit\nLa valeur et l\'unité de température sont séparés par un espace (ex : 32.5 C ou 85.3 F)\n');

        tab = answ.split(' ');
        verifNum = parseFloat(tab[0]);
        verifUnit = tab[1] ?? '';

        if (isNaN(verifNum) || !['C', 'F'].includes(verifUnit.toUpperCase())){
            console.log(`${answ} n'est pas une entrée valide.`);
        }
    }
    while (isNaN(verifNum) || !['C', 'F'].includes(verifUnit.toUpperCase()))

    if (!isNaN(verifNum) && ['C', 'F'].includes(verifUnit.toUpperCase())) {
        if (tab[1].toUpperCase() === 'C') {

            let result = parseFloat(tab[0]) * 9 / 5 + 32;
            console.log(`\n${answ} = ${result.toFixed(2)} F`);

        }
        else if (tab[1].toUpperCase() === 'F') {

            let result = (parseFloat(tab[0]) - 32) * 5 / 9;
            console.log(`\n${answ} = ${result.toFixed(2)} C`);
        }

    }

    // console.log(`temp : ${answ}`);
    // console.log(tab);

    sc.close();
}

await main();