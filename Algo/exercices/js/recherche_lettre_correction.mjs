import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { table } from 'node:console';
import { transferableAbortController } from 'node:util';

async function main() {
    const sc= new createInterface({input,output});

    var phrase = '';
    var essai = 0;

    do {
        if (essai > 0){
            console.log('N\'oubliez pas le point !!');
        }
        phrase = await sc.question('Veuilles saisir une phrase qui se termine par un point :');
        essai++;
    } while (phrase.substring(phrase.length-1) != '.');

    let regex = /^[\.]+$/

    if (phrase === '.' || regex.test(phrase)){
        console.log('La chaine est vide');
    } else {
  
        let tabLettre = [...phrase]; // prend chaque caractère de "phrase" et les met dans une case.
        let tabLettre2= phrase.split(''); //idem que précdemment mais on peut spécifier entre '' où on tronque.
        
        let dernierChar = tabLettre2.pop(); //Technique qui permet aussi de récupérer le dernier caractère (en même temps qu'on le supprime)


        console.log('['+ tabLettre2 +']')
        console.log(dernierChar);

        let lettre = await sc.question('Veuillez saisir un caractère alphabétique sans accent !');
        let frequence = 0;

        lettre = lettre.toLowerCase();
        for (let i = 0; i < tabLettre2.length-1; i++) {
            if (tabLettre2[i] === lettre){
                frequence++;
            }
        }
        if (frequence === 0){
            console.log('La lettre n\'est pas présente dans le mot');
        } else {
            console.log(`La lettre ${lettre} est présente ${frequence} fois dans la phrase !!` );
        }
    }
        sc.close('');
}

await main();