import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
        const sc = new createInterface({input,output});
        const taux = 0.0345;

        let somme = parseFloat(await sc.question(`\nEntrez le montant présent sur le compte : `));  
        let nbA = parseInt(await sc.question('Combien d\'années voulez vous placer cette somme : '));
        let choix = await sc.question('Placmement à intérêts simples (IS) ou composés (IC) : ');
        let va = 0;

        if (choix.toUpperCase() == 'IS') {
           va = somme * (1 + taux * nbA);
            console.log(`Le nouveau capital au bout de ${nbA} sera de ${va.toFixed(2)}€`);
        
        } else if (choix.toUpperCase() == 'IC') {
            // va = somme * Math.pow((1 + taux),nbA);
            va = somme * (1 + taux)**nbA;
            console.log(`Le nouveau capital au bout de ${nbA} sera de ${va.toFixed(2)}€`);
        
        } else {
            console.log('Err : Entrée invalide !')       
        }
        


        sc.close();
    }

await main();