// Travailler avec l'objet  Math.random() en JS
// Exercice 2.3 : Jeu de la fourchette L'ordinateur « choisit » un nombre entier compris entre 0 et 100. Le joueur essaie de le deviner.
// Lors de chaque essai, l'ordinateur affiche la « fourchette » dans laquelle se trouve le nombre qu'il a choisi.
// Le choix du nombre par l'ordinateur sera simulé par génération d'un nombre aléatoire : N <-- RANDOM(0,100)
 
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
            if (answer < rng && answer >= min){
                min = answer;
                throw new Error(`Trop petit !`);
            } else if (answer < min && answer < rng){
                throw new Error(`Erreur : Le nombre proposé est inférieur au minimum !`);
            }
            if (answer > rng && answer <= max){
                max = answer;
                throw new Error(`Trop grand !`);
            } else if (answer > max && answer > rng){
                throw new Error(`Erreur : Le nombre proposé est supérieur au maximum !`);
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