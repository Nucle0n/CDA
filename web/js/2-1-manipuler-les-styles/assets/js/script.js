const zoneSize = document.querySelector("#txtSize");
const btnIncrease = document.getElementById("btnIncrease");
const btnDecrease = document.getElementById("btnDecrease");
const txt = document.querySelector("p");

function sizing(event) {

    const getEventId = event.target.id;



    if (parseInt(zoneSize.value) == undefined) {

        console.log("La taille du texte n'est pas un nombre");
    }

    let txtSize = parseInt(zoneSize.value);


    if (txtSize >= 8 && txtSize <= 48 && getEventId === "txtSize") {
        // on ne fait rien;
    }
    else if (txtSize >= 8 && txtSize <= 48 && getEventId === "btnIncrease") {

        txtSize++;

    }
    else if (txtSize >= 8 && txtSize <= 48 && getEventId === "btnDecrease") {

        txtSize--;

    }
    else {

        txtSize = 16;

    }
    txt.style.fontSize = txtSize + "px";
    txtSize.value = txtSize;

}
btnIncrease.addEventListener("click", sizing);
btnDecrease.addEventListener("click", sizing);
zoneSize.addEventListener("change", sizing);