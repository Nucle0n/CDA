"use strict";

// 1. Sources de données fournies dans l'énoncé.
const tabDiffusion = [
    "Par l'un de nos client !",
    "Par relation",
    "par un support publicitaire",
    "Par un moteur de recherche",
    "Par hasard"
];

let machaine = "un site plaquette, un site communal, un catalogue en ligne, une boutique en ligne (e-commerce), le référencement, de l'e-mailing, un intranet ou extranet, une GED (gestion électronique de document), un relookage de votre site, une formation, la réalisation d'un cahier des charges, un audit accessibilité, le dépôt d'un nom de domaine en .fr, en savoir plus sur la solution ia souveraine";

// 2. Construction des listes avec createElement, sans injection HTML.
function remplirListe(selectId, valeurs) {
    const select = document.getElementById(selectId);

    // forEach() exécute une fonction pour chaque élément.
    // Cette fonction reçoit ici deux paramètres :
    // - valeur : contenu de l'élément actuellement parcouru.
    // - index  : position de l'élément dans le tableau.
    valeurs.forEach((valeur, index) => {

        // new Option(texte, valeur) crée une option HTML.
        //
        // 1er argument (valeur) :
        //   Texte visible par l'utilisateur dans la liste.
        // 2e argument (index + 1) :
        //   Valeur de l'attribut HTML "value".
        //
        // Exemple pour "Internet" (index = 0) :
        //   new Option("Internet", 1)
        // Ce qui correspond à :
        //   <option value="1">Internet</option>
        //
        // select.add() ajoute cette nouvelle option
        // à la fin de la liste déroulante <select>.
        select.add(new Option(valeur, index + 1));
    });
}
remplirListe("diffusion", tabDiffusion);
remplirListe("interet", machaine.split(",").map(texte => texte.trim()));

// 3. Classe demandée : centralise les règles de validation.
class Validation {
    // Lettres (accentuées comprises) et tiret simple, minimum 3 caractères.
    static nomOuPrenom(texte) {
        return /^[\p{L}-]{3,}$/u.test(texte);
    }

    // Vérification pratique de la structure d'une adresse email.
    static email(texte) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texte);
    }

    // Lettres, chiffres, espaces et tirets, entre 3 et 30 caractères.
    static societe(texte) {
        return /^[\p{L}\p{N} -]{3,30}$/u.test(texte);
    }

    // Les chevrons et guillemets doubles sont interdits, max. 3000 caractères.
    static message(texte) {
        return texte.length <= 3000 && !/[<>\"]/.test(texte);
    }
}

const formulaire = document.getElementById("devis-form");
const statut = document.getElementById("form-status");

function afficherErreur(id, message) {
    const champ = document.getElementById(id);
    const zone = document.getElementById(`${id}-error`);
    zone.textContent = message;
    champ.setAttribute("aria-invalid", String(Boolean(message)));
}

// 4. On intercepte le clic sur Submit, puis on soumet en JS si tout est valide.
formulaire.addEventListener("submit", evenement => {
    evenement.preventDefault();
    statut.textContent = "";

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const societe = document.getElementById("societe").value.trim();
    const message = document.getElementById("message").value;
    const diffusion = document.getElementById("diffusion").value;
    const interet = document.getElementById("interet").value;
    const consentement = document.getElementById("consentement").checked;

    const controles = [
        ["prenom", Validation.nomOuPrenom(prenom), "Au moins 3 caractères : lettres et tirets uniquement."],
        ["nom", Validation.nomOuPrenom(nom), "Au moins 3 caractères : lettres et tirets uniquement."],
        ["email", Validation.email(email), "Saisissez une adresse email valide."],
        ["societe", Validation.societe(societe), "Entre 3 et 30 caractères : lettres, chiffres, espaces et tirets."],
        ["message", Validation.message(message), 'Maximum 3000 caractères, sans <, > ni ".'],
        ["diffusion", diffusion !== "", "Sélectionnez une option."],
        ["interet", interet !== "", "Sélectionnez une option."],
        ["consentement", consentement, "Vous devez autoriser le traitement de votre demande."]
    ];

    let premierChampInvalide = null;
    for (const [id, valide, erreur] of controles) {
        afficherErreur(id, valide ? "" : erreur);
        if (!valide && !premierChampInvalide) {
            premierChampInvalide = document.getElementById(id);
        }
    }

    if (premierChampInvalide) {
        statut.textContent = "Veuillez corriger les champs signalés avant l'envoi.";
        premierChampInvalide.focus();
        return;
    }

    // Exigence du TP : envoi GET sur cette même page, via .submit().
    // Attention : les données seront visibles dans l'URL (mode test uniquement).
    formulaire.submit();
});
