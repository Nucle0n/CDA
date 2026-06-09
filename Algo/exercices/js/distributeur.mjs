import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { LOADIPHLPAPI } from 'node:dns';

async function main() {
    const sc = new createInterface({input,output});
//  let defpass = 'xxxx';
//  let passadmin = '0000';
//  let nbgob = Math.floor(Math.random()*0),        
    let nbGob = Math.floor(Math.random()*51),
        boisson  = 0,
        prix = 0,
        pUser = 0;

    console.log(`Gobelets restant : ${nbGob}\nPrix = ${prix}\nSomme introduite = ${pUser}\n`);

    if (nbGob = 0){
        console.log(`\x1b[3;38;2;255;0;0mErr 001 : ${0} gobelet restant dans la machine !\x1b[0m`);
    } else {
        let answer=  await sc.question(`Choisissez une boisson : \n1 - Chocolat\n2 - Café\n3 - Thé`)
    }

    switch (boisson) {
        case "1" : 
            console.log('Choix : Chocolat\n Prix à payer : 1,50€');
            prix = 1.5;

        case "2" : 
            console.log('Choix : Café\n Prix à payer : 2€');
                prix = 2;

        case "3" :
            console.log('Choix : Thé\n Prix à payer : 1,50€');
                prix = 1.5;
        default:
            console.log('Choix utilisateur invalide')
    }
        

//     if (nbgob == 0){
//         console.log(`\x1b[3;38;2;255;0;0mErr 001 : Plus de gobelets dans la machine !\x1b[0m`); 
//         console.log(`Voulez vous remettre des gobelets dans la machine (O/N) ?\n`);
//         if (answer == 'o'){
//             let answer=  await sc.question(`Entre le mot de passe administrateur à 4 chiffres : ?\n`);
//         }
        
//     }

//     sc.close();
// }
// async function verif(){
    
//     const trueValues = ['oui', 'o', 'yes', 'y', '1', 'true', 'vrai', 'v'];
//     const falseValues = ['non', 'n', 'no', 'n', '0', 'false', 'faux', 'f'];

//     while (true){
//         let answer= await sc.question().toLowerCase();

//         if (trueValues.includes(answer))
//             return (true);
//         else if (falseValues.includes(answer))
//             return (false);
//     }
}
await main();