const plus = document.getElementById("btnIncrease");
const minus = document.querySelector("#btnDecrease");
const input = document.getElementsByTagName("input")[0];
const txt = document.getElementById("txt");

let size = 16;

function updateFontSize(){
    input.value = size;
    txt.style.fontSize = size + "px";
}

plus.addEventListener("click", function () {
    size++;
    if (size > 48) size = 16;
    updateFontSize();
});

minus.addEventListener("click", function () {
    size--;
    if (size < 8) size = 16;
    updateFontSize();
});

input.addEventListener("change", function () {
    size = input.value;
    if (size > 48 || size < 8) size = 16;
    updateFontSize();
});