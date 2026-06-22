import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

function afficherTab(tableau){
    for (let i = 0; i < tableau.length; i++){
        output.write(tableau[i]);
    }
    console.log(); 
}

async function main(){
    const sc= new createInterface({input,output});
    
    let count = 0;
    let answer;

    do {
        answer = await sc.question(`Entrez un mot d'au moins 5 lettres : `);
        if (answer.length < 5) console.log('Pas assez de caractères !');
    } while (answer.length < 5); 

    console.clear();
    let devineTab= [];
    devineTab[0]= answer[0];

    for (let i= 1; i < answer.length-1; i++){
        devineTab[i]=' _';
    }

    devineTab[answer.length-1] = ' '+ answer[answer.length-1];

    afficherTab(devineTab);

    let lettre  = '';
    let oui     = false;
    let essai   = 6;
    let victory = false;

    while(essai > 0 && !victory){
        do {
            oui = false;
            lettre = await sc.question('Proposez un caractère : ');
            lettre = lettre.toLowerCase();
            if (lettre.length < 1 || lettre.length > 1){
                console.log('\x1b[38;2;255;0;0mErreur de saisie utilisateur\x1b[0m');
            }
        } while (lettre.length > 1 || lettre.length < 1);

        for (let i = 1; i < devineTab.length-1; i++){
            if (answer[i] === lettre){
                devineTab[i] = ' '+lettre;
                oui = true;
            }
        }

        if (!oui){
                essai--;
                console.log(`le caractère "${lettre}" n'est pas présent dans le mot recherché !`);
            } else {
                console.log('Caractère trouvé ! ');
            }

        console.log(`Nombre de tentatives restantes : ${essai}`)
        afficherTab(devineTab);

        victory = !devineTab.includes(' _');
    }
    if (essai === 0){
        console.log('GAMEOVER!');
    } else if (victory){
        console.log('GAGNÉ!');
    }
    sc.close();
}

await main();