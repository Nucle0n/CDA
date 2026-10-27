// --------- MAIN --------- //
fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
    .then(response => { return response.json(); })
    .then(data => {

        // console.log(data);

        displayTable(data);
    })
    .catch((error) => alert("erreur:" + error));


// --------- FONCTIONS ---------- //

    // --------- Table ---------//
    function displayTable(_data) {

        const main = document.querySelector("main");
        const table = document.createElement("table");
        main.appendChild(table);

        const thead = table.createTHead();
        const tbody = table.createTBody();
        tbody.id = "tContent"

        let newRow = addRow(thead);
        

        for (const key in _data[0]) {
            const headCell = document.createElement("th");
            headCell.textContent = key;
            newRow.appendChild(headCell);
            headCell.id = key;
        }

        // console.log(_data)

        // let cpt = 1;

        for (const element of _data) {
            newRow = addRow(tbody);
            // newRow.id = cpt++;
            // if (newRow.id %2){
            //     newRow.className="bg-light"
            // } else {
            //     newRow.className="bg-dark"
            // }

            for (const key in _data[0]) {
                const addCell = document.createElement("td");
                addCell.textContent = element[key];
                newRow.appendChild(addCell);
            }
        }
    }

    // ----- Ajouter ligne ----- //
    function addRow(_tPart){
        return _tPart.insertRow();
    }



