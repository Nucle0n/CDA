const nav = document.querySelector(".nav");

nav.addEventListener("pointerenter", () => {
     if (nav.classList.contains("collapsed")) {
        // OUVERTURE
        nav.classList.remove("collapsed");

        nav.style.height = nav.scrollHeight + "px";

    } else {
        // FERMETURE

        // 1. On récupère et fixe la hauteur actuelle
        nav.style.height = nav.scrollHeight + "px";

        // 2. On force le navigateur à calculer cette hauteur
        nav.offsetHeight;

        // 3. Maintenant on peut lancer la transition
        nav.style.height = "0px";

        nav.classList.add("collapsed");
    }

});