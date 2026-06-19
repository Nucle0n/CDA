//génère un nombre aléatoire entre une valeur "min" et une valeur "max"
function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;    
}

//Permet de remplir un tableau avec des nombres aléatoires et définir sa taille
function tabFiller(tableau,size){ 
    for (let i = 0; i<size; i++){
        tableau.push(randomGenerator(1,100));
    }
}

// Pour créer un tableau contenant chaque lettre de l'alphabet.
function tabAlphabet(tableau){
    for (let i = 0; i < 26; i++){
        tableau[i] = String.fromCharCode(97 + i);
    }
}