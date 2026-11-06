// --------- MAIN --------- //
fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
    .then(response => { return response.json(); })
    .then(data => {

        // console.log(data);

        displayTable(data);
        noLife(data);
        playerCard();
        triSection(data);
        maxStat(data, "victory");

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

        // noLife(_data);
        // playerCard();

    }

    // ----- Ajouter ligne ----- //
    function addRow(_tPart){
        return _tPart.insertRow();
    }

    // ----- Ajouter HR ----- //
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


    // ----- Afficher le plus gros joueur ----- //
    function noLife(_data){
        const pSection = document.createElement("section");
        pSection.id = "biggestPlayer";
        document.querySelector("table").after(pSection);

        const hr1 = hr();
        pSection.appendChild(hr1);
        
        const hr2 = hr();
        document.getElementById("biggestPlayer").after(hr2);

        const pP = document.createElement("p");
        document.querySelector("hr").after(pP);
        document.querySelector("p").after(hr2);

        // pP.textContent = "Joueur avec le plus de parties : " + maxAtq(_data).name + " (victoires : " + maxAtq(_data).victory+") "; 
        pP.textContent = "Joueur avec le plus de parties : " + maxStat(_data, "attack").name + " (victoires : " + maxStat(_data, "attack").victory+")";
        }

    // ---- Ajouter les boutons de tri ----- //
    function triSection(_data){
        
        const triSection = document.createElement("section");
        triSection.id = "tri-section";
        document.getElementById("biggestPlayer").after(triSection);

        const paBtn = document.createElement("input");
        paBtn.id = "paBtn";
        paBtn.value ="Power";
        paBtn.setAttribute("type", "button");
        triSection.appendChild(paBtn);

        paBtn.addEventListener("click", function(){
            getPower(_data);
            // console.log(_data);
            console.log("Bouton Power cliqué !");
        });

        const armorBtn = document.createElement("input");
        armorBtn.id = "armorBtn";
        armorBtn.value = "Armor";
        armorBtn.setAttribute("type", "button");
        triSection.appendChild(armorBtn);

        armorBtn.addEventListener("click", function(){
            getArmor(_data);
            console.log("Bouton Armor cliqué !");
        });

        const playedGBtn = document.createElement("input");
        playedGBtn.id = "playedGBtn";
        playedGBtn.value = "Played";
        playedGBtn.setAttribute("type", "button");
        triSection.appendChild(playedGBtn);

        playedGBtn.addEventListener("click", function(){
            getPlayed(_data);
            console.log("Bouton Played cliqué !");
        });

        const winBtn = document.createElement("input");
        winBtn.id = "winBtn";
        winBtn.value = "Win";
        winBtn.setAttribute("type", "button");
        triSection.appendChild(winBtn);

        winBtn.addEventListener("click", function(){
            getWin(_data);
            console.log("Bouton Win cliqué !");
        });
        

        const hr3 = hr();
        triSection.appendChild(hr3);
    }

    // ----- Fonctionnement des boutons ----- //
        // ----- Bouton Power ----- //
            function getPower(_data) {
                console.log(_data[0].power);
            }
        // ----- Bouton Armor ----- //
            function getArmor(_data) {
                console.log(_data[0].armor);
            }
        // ----- Bouton Played ----- //
            function getPlayed(_data) {
                console.log(_data[0].played);
            }
        // ----- Bouton Win ----- //
            function getWin(_data) {
            console.log(_data[0].victory);
        }

    // ----- Fonctions de recherche des maximums ----- //

        /**
         * 
         * @param {"Tableau Clées/Valeurs"} _data 
         * @param {"String correspondant au nom de la clé"} stat 
         */
        function maxStat(_data, stat){
            let maxStatValue = _data[0][stat];
            let plCard = _data[0];

            for (let i = 1; i < _data.length; i++){
                if (_data[i][stat] > maxStatValue){
                    maxStatValue = _data[i][stat];
                    plCard = _data[i]
                }               
            }
            return plCard;
        }

        // obsolètes ! Remplacées par : function maxStat(_data, stat);
        
            // // ----- Recherche Power Max ----- //
            // function powerMax(_data){
            //     let valueMaxPower = _data[0].power;
            //     let pCard = _data[0];

            //     for (let i = 1; i < _data.length; i++) {
            //         if (_data[i].power > valueMaxPower) {
            //             valueMaxPower = _data[i].power
            //             pCard = _data[i];
            //         }
            //     }
            // }

            // // ----- Recherche Armor Max ----- //
            // function armorMax(_data){
            //     let valueMaxArmor = _data[0].armor;
            //     let pCard = _data[0];

            //     for (let i = 1; i < _data.length; i++) {
            //         if (_data[i].armor > valueMaxArmor) {
            //             valueMaxArmor = _data[i].armor
            //             pCard = _data[i];
            //         }
            //     }
            // }

            // // ----- Recherche attaque Max ----- //
            // function maxAtq(_data) {
            //     let carteMaxAtq = _data[0];
            //     let valueMaxAtq = _data[0].attack;

            //     for (let i=1; i < _data.length; i++){
            //         if (_data[i].attack > valueMaxAtq) {
            //             valueMaxAtq = _data[i].attack;
            //             carteMaxAtq = _data[i];
            //         }
            //     }
            //     return carteMaxAtq;
            // }

            // // ----- Recherche Max Win ----- //
            // function maxWin(_data){
            //     let carteMaxWin = _data[0];
            //     let valueMaxWin = _data[0].victory;

            //     for (let i=1; i < _data.length; i++){
            //         if (_data[i].victory > valueMaxWin) {
            //             valueMaxWin = _data[i].victory;
            //             carteMaxWin = _data[i];
            //         }
            //     }
            //     return carteMaxWin;
            // }

        // ----- Construction carte ----- //
    function playerCard(_data) {
        const card = document.createElement("article");
        card.id = "card";
        document.getElementById("biggestPlayer").after(card);

        const cardHeader = document.createElement("header");
        cardHeader.id = "card-header";
        card.appendChild(cardHeader);

        const pName = document.createElement("h2");
        pName.id = "pName";
        pName.textContent = 0 + " NAME";
        cardHeader.appendChild(pName);

        const mStatsLine = document.createElement("p");
        mStatsLine.id = "mainStats";
        cardHeader.appendChild(mStatsLine);

        const played = document.createElement("span")
        played.id = "played";
        played.textContent = "Played : " + 0;
        mStatsLine.appendChild(played);

        const nbWin = document.createElement("span")
        nbWin.id = "nbWin";
        nbWin.textContent = "Victoires : " + 0;
        mStatsLine.appendChild(nbWin);
               
        
        const picture = document.createElement("img");
        picture.id = "knight";
        picture.setAttribute("src", "./assets/img/knight.png");
        picture.setAttribute("alt", "minimalist picture of a knight");
        document.getElementById("card-header").after(picture);

        const panel = document.createElement("aside")
        panel.id = "panel";
        card.appendChild(panel);

        const statList = document.createElement("ul");
        statList.id = "statList";
        panel.appendChild(statList);

        const power = document.createElement("li");
        power.id = "power";
        power.textContent = "Puissance : " + 0;
        statList.appendChild(power);

        const attack = document.createElement("li");
        attack.id = "attack";
        attack.textContent = "Attaque : " + 0;
        statList.appendChild(attack);

        const def = document.createElement("li");
        def.id = "def";
        def.textContent = "Défence : " + 0;
        statList.appendChild(def);        
    }

    // ----- Calculer le ratio de victoire ----- //
    function winRate(victory, defeat){
        return parseFloat(victory/(victory + defeat) * 100).toFixed(2);
    }

    // ----- Tri par attaque Max ----- //
    function searchMaxAtqTri(_data){
        const tabDecroissant = _data.sort((a, b) => b.attack-a.attack);
        return tabDecroissant[0];
    }

