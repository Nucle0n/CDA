```
VARIABLES
    prix_cafe est un INT
    compteur_gobelet est un INT

    Timer est un float
    argent_insere est un FLOAT
    rendu_monnaie est un FLOAT
    eau est un FLOAT  //Quantité d'eau restante dans le réservoire en litre

    monnaie est un BOOLEAN //Reste suffisament de monnaie dans machine (true/false)
    capteur_gobelet est un BOOLEAN //Gobelet coincé/mal positionné
    etat_machine est un BOOLEAN //Machine HS

DEBUT

    TANT QUE (eau <= 0.3 || compteur_gobelet = 0)
        REPETER

        SI eau <= 0.3 ALORS
        NOTIFIER 'Erreur : Niveau d'eau insuffisant'
        FIN SI
        
        SI compteur_gobelet = 0 ALORS
        NOTIFIER 'Erreur :  Il n'y a plus de gobelet !'
        FIN SI

        etat_machine <- false

        AFFICHER 'Erreur : Machine hors service'

    FIN TANT QUE

 //   FAIRE

    AFFICHER `Le prix du café est de ${prix_cafe}. Veuillez payer.`
            timer <- local.time
            LIRE argent_insere 

//    TANT QUE 
    







    


 //   capteur_gobelet 
        
 //   LIRE monnaie
        


FIN
```