
const pplList=document.createElement("ul");
pplList.id="ppl-list"; 

function addPeople() {
    const people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];
    
    for (let i = 0; i < people.length; i++) {
        const myli = document.createElement("li");
        myli.textContent=people[i];
        pplList.appendChild(myli);
    }
}

addPeople();