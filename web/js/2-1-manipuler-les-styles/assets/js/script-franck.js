const zoneSize = document.querySelector("#txtSize");
const btnIncrease = document.querySelector("#btnIncrease");
const btnDecrease = document.getElementById("btnDecrease");
const paragraphe = document.querySelector("#txt");
//const paragraphe= document.getElementsByTagName("p");

function sizing(event) {
    // quel élément a déclenché l'évènement 
    const getEventId = event.target.id;
    console.log(getEventId);

    if (parseInt(zoneSize.value) == undefined) {
        console.error("la taille du texte n'est pas un nombre !");
    }

    let sizeTxt = parseInt(zoneSize.value);

    // if (sizeTxt >= 8 && sizeTxt <= 48 && getEventId === "txtSize") {
    //     //on ne fait rien;
    // }
    // else
    if (sizeTxt > 8 && sizeTxt < 48 && getEventId === "btnIncrease") {
        sizeTxt++;
    }
    else if (sizeTxt > 8 && sizeTxt < 48 && getEventId === "btnDecrease") {
        sizeTxt--;
    }
    else {
        sizeTxt = 16;
    }
    paragraphe.style.fontSize = sizeTxt + "px";
    zoneSize.value = sizeTxt;
}

// -------------Simon's version-------
function sizing(event) {
    const eventId = event.target.id;
    console.log(eventId);
    
    let sizeTxt = parseInt(zoneSize.value);
    
    if (eventId === "btnIncrease") 
        sizeTxt++;
    else if (eventId === "btnDecrease") 
        sizeTxt--;
    
    if (sizeTxt > 48 || sizeTxt < 8) sizeTxt = 16;
    
    paragraphe.style.fontSize = sizeTxt + "px";
    zoneSize.value = sizeTxt;
}

btnIncrease.addEventListener("click", sizing);
btnDecrease.addEventListener("click", sizing);
zoneSize.addEventListener("change", sizing);