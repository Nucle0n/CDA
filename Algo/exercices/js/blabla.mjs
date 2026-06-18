import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;    
}

async function main(){
    const sc= new createInterface({input,output});
    let min = 0;
    let max = 100;
    let rng = randomGenerator(min,max);

    console.log(rng);
    console.log(`Le nombre mystère est compris entre ${min} et ${max}`);

    while (true){   
        try {

            let answer = parseInt(await sc.question(`Entrez un nombre entier entre ${min} et ${max} : `));
            console.log(answer);
            if (isNaN(answer) || answer < 1 || answer > 100){
                throw new Error('Mauvaise saisie utilisateur');
            }    
            if (answer < rng){
                min = answer;
                throw new Error(`Trop petit !`);
            }
            if (answer > rng){
            max = answer;
            throw new Error(`Trop grand !`);
            }
            break;
        }
        catch (erreur){
            console.log(erreur.message);
        }
    }
    console.log('Trouvé !');
    sc.close();
}

await main();