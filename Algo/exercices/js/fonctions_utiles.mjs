

function randomGenerator(min,max){
    //génère un nombre aléatoire entre une valeur "min" et une valeur "max"
    return Math.floor(Math.random()*(max-min+1))+min;    
}

function tabFiller(tableau,size){
    //Permet de remplir un tableau avec des nombres aléatoires et définir sa taille
    for (let i = 0; i<size; i++){
        tableau.push(randomGenerator(1,100));
    }
}