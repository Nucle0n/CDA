async function getData() {
  const url = "https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json";
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Statut de réponse : ${data.status}`);
    }

    return await data.json();
    // console.log(resultat);
  } catch (erreur) {
    console.error(erreur.message);
  }
}

async function test() {
    const data = await getData();
    console.log(data);
    const main = document.querySelector("main");
    const table = document.createElement("table");
    const thead = table.createTHead();
    const newROw = table.insertRow();
    main.appendChild(table);
    table.id = "cards"
    
    for (const key in data) {
        const headCell = document.createElement("th");
        console.log(data[key]);
            
    }
} 
test()

// const tbody = document.getElementById("tb");

// let data;

// async function getData() {
//     data = await fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json");
// }

// getData();



