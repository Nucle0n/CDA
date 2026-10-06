const add = document.getElementById("add");
const reset = document.getElementById("reset");
// const result = document.getElementById("output");
const result = document.querySelector("output");
// const result = document.getElementsByTagName("output")[0];

let cpt = 0;

add.addEventListener("click", function(){
    cpt++;
    console.log(cpt);
    result.textContent = cpt;
});

reset.addEventListener("click", function(){
    cpt = 0;
    result.textContent = 0;
});

