import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';


async function main() {

    const sc= new createInterface({input,output});

    let nb      = await sc.question(`Entrez un nombre entier positif : `);
    let nbDiv   = 0;
    let tabNb   = [];

        for (let i=2; i < nb; i++ ){
            if(nb %i == 0){
                tabNb.push(i);
                nbDiv++; 
            }
        }

    let initialValue = 0;
    const sommeDiv = tabNb.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
    
    let sommeTest = 0;

        for (let i = 0; i < tabNb.length; i++){
            sommeTest += tabNb[i];
        }

    const Test = tabNb.forEach((e)=>{sommeTest+e});


    
        if (nbDiv == 0){
            console.log(`Le nombre ${nb} est un nombre premier !`);
        } else {
            console.log(`Les diviseur de ${nb} sont : ${tabNb}`);
            console.log(`${nb} est divisible par ${nbDiv} diviseurs.`);
            console.log(`La somme des divisieurs est : ${sommeDiv}`);
            console.log(`La somme des divisieurs est : ${sommeTest}`);
        }



    sc.close();
}

await main();   