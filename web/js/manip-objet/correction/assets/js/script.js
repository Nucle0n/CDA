fetch('./assets/json/employes.json')
.then(response => response.json())
.then(data =>console.log(data)
)
.catch(error => console.error("Erreur : " + error));
const tabDiffusion= [
"Par l'un de nos client !",
"Par relation",
"par un support publicitaire",
"Par un moteur de recherche",
"Par hasard"
]

let machaine="un site plaquette, un site communal, un catalogue en ligne, une boutique en ligne (e-commerce), le référencement, de l'e-mailing, un intranet ou extranet, une GED (gestion electronique de document), un relookage de votre site, une formation, la réalisation d'un cahier des charges, un audit accessibilité, le dépôt d'un nom de domaine en .fr, en savoir plus sur la solution ia souveraine"