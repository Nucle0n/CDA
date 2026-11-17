
// Récupère la checkbox.
const switchTheme = document.getElementById("switch-theme");

// Détecte le thème préféré du système.
// matches vaut true si le système utilise le mode sombre.
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

// Écoute les changements de la checkbox.
switchTheme.addEventListener("change", () => {

    if (switchTheme.checked) {

        // Inverse le thème du système.
        const newTheme = systemTheme.matches ? "light" : "dark";

        // Applique le thème inversé à <html>.
        document.documentElement.dataset.theme = newTheme;

    } else {

        // Supprime le thème forcé.
        // Le CSS reprend automatiquement le thème du système.
        delete document.documentElement.dataset.theme;
    }
});

// Si le système change de thème pendant que la checkbox
// est cochée, on recalcule également le thème inversé.
systemTheme.addEventListener("change", () => {

    if (switchTheme.checked) {
        document.documentElement.dataset.theme =
            systemTheme.matches ? "light" : "dark";
    }
});
