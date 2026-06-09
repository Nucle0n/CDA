import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

var stgobelet=5;

async function main() {
const sc=createInterface({input,output});
let sommeIntroduite = 0;

if (stgobelet !=0){
    let choix= await sc.question("Veuillez choisir votre boisson !");
    let prix = 1.5;
    
    while (sommeIntroduite < prix){
        console.log(`Reste à payer = ${prix-sommeIntroduite}`);
        let piece = parseFloat(await sc.question('Montant introduit\n')); 
        sommeIntroduite += piece;

        if (sommeIntroduite > piece){
            let rendu = sommeIntroduite-prix;
            console.log(`Monnaire à rendre : ${rendu}`);
        }
    }

    console.log('Délivrer gobelet');
    stgobelet--;
    console.log('Preparer boisson\nMerci de votre visite !');
    console.log(`Stock de gobelets restant :${stgobelet}`);

} else {
    console.log('Err 001 : Machine indisponible');
}

sc.close();
}

await main();