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

        const body = document.querySelector("body")
        const main = document.createElement("main")
        body.appendChild(main);
        
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

        // let cpt = 1; // Compteur pour génération d'id, pour différenciation pair/impair 
        for (const element of _data) {
            newRow = addRow(tbody);
            // // ----- condition pour tri pair/impair ----- //
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

        noLife(_data);
        playerCard();
    }

    // ----- Ajouter ligne ----- //
    function addRow(_tPart){
        return _tPart.insertRow();
    }

    // ----- Afficher le plus gros joueur ----- //
    function noLife(_data){
        const pSection = document.createElement("section");
        pSection.id = "biggestPlayer";
        document.querySelector("table").after(pSection);
        
        const hr = () => {
            const ret = document.createElement("hr");
            ret.classList = "sep";
            return ret;
        };

        // Equivalents : 

        // const hr = function() {
        //     const ret = document.createElement("hr");
        //     ret.classList = "sep";
        //     return ret;
        // };

        // function hr() {
        //     const ret = document.createElement("hr");
        //     ret.classList = "sep";
        //     return ret;
        // };

        const hr1 = hr();
        pSection.appendChild(hr1);
        
        const hr2 = hr();
        document.getElementById("biggestPlayer").after(hr2);

        const pP = document.createElement("p");
        document.querySelector("hr").after(pP);
        document.querySelector("p").after(hr2);

        pP.textContent = "Joueur avec le plus de parties : " + maxAtq(_data).name + " (victoires : " + maxAtq(_data).victory+") ";
        }
    
    // ----- Construction carte ----- //
    function playerCard(_data) {
        const card = document.createElement("article");
        card.id = "card";
        document.getElementById("biggestPlayer").after(card);

        const cardHeader = document.createElement("header");
        cardHeader.id = "card-header";
        card.appendChild(cardHeader);
        
        const picture = document.createElement("img");
        picture.id = "knight";
        picture.setAttribute("src", "./assets/img/knight.png");
        picture.setAttribute("alt", "minimalist picture of a knight");
        document.getElementById("card-header").after(picture);

        const panel = document.createElement("aside")
        panel.id = "panel";
        card.appendChild(panel);
    }

    // ----- Calculer le ratio de victoire ----- //
    function winRate(victory, defeat){
        return parseFloat(victory/(victory + defeat) * 100).toFixed(2);
    }

    // ----- Recherche attaque Max ----- //

    function maxAtq(_data) {
        let carteMaxAtq = _data[0];
        let valueMaxAtq = _data[0].attack;

        for (let i=1; i < _data.length; i++){
            if (_data[i].attack > valueMaxAtq) {
                valueMaxAtq = _data[i].attack;
                carteMaxAtq = _data[i];
            }
        }
        return carteMaxAtq;
    }

    // ----- Tri par attaque Max ----- //
    function searchMaxAtqTri(_data){
        const tabDecroissant = _data.sort((a, b) => b.attack-a.attack);
        return tabDecroissant[0];
    }

    // ----- Recherche attaque Max ----- //

    function maxWin(_data) {
        let carteMaxWin = _data[0];
        let valueMaxWin = _data[0].victory;

        for (let i=1; i < _data.length; i++){
            if (_data[i].victory > valueMaxWin) {
                valueMaxWin = _data[i].victory;
                carteMaxWin = _data[i];
            }
        }
        return carteMaxWin;
    }