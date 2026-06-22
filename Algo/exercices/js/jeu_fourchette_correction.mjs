// Travailler avec l'objet  Math.random() en JS
// Exercice 2.3 : Jeu de la fourchette L'ordinateur « choisit » un nombre entier compris entre 0 et 100. Le joueur essaie de le deviner.
// Lors de chaque essai, l'ordinateur affiche la « fourchette » dans laquelle se trouve le nombre qu'il a choisi.
// Le choix du nombre par l'ordinateur sera simulé par génération d'un nombre aléatoire : N <-- RANDOM(0,100)
 
import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { isNumberObject } from 'node:util/types';


function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;    
}

async function main(){
    const sc= new createInterface({input,output});

    let nbRandom = Math.floor(Math.random()*100)+1;
    let nbChoisi = 0;
    let min = 0;
    let max = 100;
    var nbEssai =0;

    // console.log(nbRandom);
    do{
        nbChoisi = parseInt(await sc.question(`Choisir un nombre compris entre  ${min} et ${max} : `));
        if (isNaN(nbChoisi)){
            console.log('Erreur veuillez saisir un nombre !');
            nbEssai++;
        } else {
            if (nbChoisi<min || nbChoisi>max){
                console.log(`Vous êtes en dehors de la plage de la plage de recherche [${min}-${max}]`);
                nbEssai++;
            } else {
                if (nbChoisi > nbRandom){
                max = nbChoisi;
                console.log('C\'est moins !');
                nbEssai++;
                } else if (nbChoisi < nbRandom){
                    min = nbChoisi;
                    console.log('C\'est plus!');
                    nbEssai++;        
                } else {
                    nbEssai++;
                    console.log(`Bravo vous avez toruvé le nombre mystère "${nbRandom}" en ${nbEssai} tentative(s)`)
                }
            } 
        }
        
        
    } while (nbChoisi!=nbRandom);


    
    
    sc.close();
}

await main();