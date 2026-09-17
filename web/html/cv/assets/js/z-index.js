const nav = document.querySelector(".nav");
const profil = document.querySelector(".profil");
const main = document.querySelector(".main");

nav.addEventListener("click", () => {

    const profilHeight = profil.offsetHeight;

    profil.classList.toggle("collapsed");

    if (profil.classList.contains("collapsed")) {
        main.style.marginTop = `-${profilHeight}px`;
    } else {
        main.style.marginTop = "0";
    }

});