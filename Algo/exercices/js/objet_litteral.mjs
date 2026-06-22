// Vous devez créer un objet littéral nommé  :  nosFormations
// qui contient les paires clé valeur suivante : 
// sachant que les valeurs seront stockés sous forme numérique :
// ABC_I : 24  (ABC Informatique) 
// ADRN : 8 (Agent de Dépannage et de Reconditionnement Numérique) ( niv3 CAP)
// TIP : 20      (Technicien(ne) Informatique de Proximité) (niv4)
// TRI : 7         ( Technicien(ne) Réseaux IP) ( niv4)
// TSSR: 22       (Technicien(ne) Supérieur(e) Systèmes et Réseaux)( niv5)
// AIS: 6    (Administrateur d’Infrastructures Sécurisées) (niv6)
// AEC: 5    (Automaticien(ne) d’Études et Conception) (niv5)
// DWWM: 21    (Développeur Web Web Mobile) (niv5)
// CDA : 23  (Concepteur Développeur d’Applications) (niv6)
// ISI : 4  (Ingénieur spécialité information – option Systèmes d’Information) (niv7)
// Vous devez ensuite trier l'objet littéral  "formationsInfo" par formation (clé) en fonction de leur effectifs stagiaires  de manière décroissante. ( De la formation à l'effectif le plus nombreux à l'effectif le moins nombreux ) 
// Définition de la méthode Sort() avec paramètres. ( pour info les chiffres sont fictifs mais vraissemblables).

import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output, sourceMapsEnabled} from 'node:process';

async function main(){
    const sc= new createInterface({input,output});

    //Objet littéral nosFormations, comme un tableau de 10 lignes, deux cellules pas lignes.
    let nosFormations = {
        ABC_I:24,
        ADRN:8,
        TIP:20,
        TRI:7,
        TSSR:22,
        AIS:6,
        AEC:5,
        DWWM:21,
        CDA:23,
        ISI:4,
    };
    console.log('nosFormations (objet littéral :)');
    console.table(nosFormations);

    //-- Corrigé Franck --//
    //Impossible de trier un objet littéral
    //Pour tirer malgré tout l'objet l'itteral, on peut passer pa run tableau (tableau de tableau dans cet exemple)
    //On créer un tableau dans lequel on entre les données contenues dans notre objet littéral
    let monTabFormations = Object.entries(nosFormations);
    console.log('monTabFormations :');
    console.table(monTabFormations);

    //On trie le tableau
    monTabFormations.sort ((a,b) => b[1] - a[1]);

    //On remet le contenu trié de notre tableau, donc un nouvel objet littéral qui hérite donc du trie.
    let objetFormation = Object.fromEntries(monTabFormations);
    console.log('objetFormations :');
    console.table(objetFormation);

    //test avec la fonction afficherChaine
    console.log('objetFormations (via méthode afficherChaine) :');
    console.log(afficherChaine(objetFormation));
    console.log('nosFormations (via méthode afficherChaine) :');
    console.log(afficherChaine(nosFormations));

    // -- Ma version --//
    let tab = [];
    for (const key in nosFormations){
        tab.push([key,nosFormations[key]]);
    }
    console.log('tab :');
    console.log(tab);
    // tab.sort((a,b) => b[1] - a[1]);
    tab.sort(([,a],[,b]) => b - a);
    console.log('tab, après tri :');
    console.log(tab);

    nosFormations = {};

    for (let element of tab){
        nosFormations[element[0]]=element[1];
    }
    console.log('nosFormations après tri hérité de tab :');
    console.table(nosFormations);
    // console.table(nosFormations);
    // console.log(nosFormations);
    // console.log(afficherChaine(nosFormations));
    sc.close();
}

/*
* Méthode d'affichage
*/
function afficherChaine(objet){
    let tabAffichage = '[';
    for (const key in objet){
        tabAffichage += key + ':' + objet[key]+', ';
    }
    tabAffichage = tabAffichage.substring(0,tabAffichage.length-2);
    tabAffichage+=']';
    return tabAffichage;
    
}
await main();