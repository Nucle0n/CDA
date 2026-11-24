// fetch(".assets/json/employees.json")
// .then(response => {return response.json()})
// .then((response) => {
    
// tabledata = response.data;
// creerTableau(tableData);
// console.log(tableData);

// })

// async function loadEmployees() {
//     try {
//         const response = await fetch(".assets/json/employees.json");

//         if (!response.ok!=200){
//             throw new Error(response.status)
//         }

//         const myData= await response.json;
//         const tableData=[];
//         tableData= myData.data;
//         creerTableau(tableData);
//         console.log("Everything is fine !")
//         console.log(response);

//     } catch (error) {
//         console.error("Impossible de charger les données",error);
//     }
// }

// loadEmployees();

async function loadEmployees(){
    const response = await fetch("./assets/json/employees.json");
    const result   = await response.json();

    console.table(result.data);
}

// loadEmployees();

// -----
// const iddy = identityGenerator("Tiger Nixon");

// const prenom = identityGenerator("Tiger Nixon")[0];
// const nom = identityGenerator("Tiger Nixon")[1];
// const email = identityGenerator("Tiger Nixon")[2];
// -----

// const [prenom, nom, email] = identityGenerator("Tigger Nixon");
// console.log(`${prenom} ${nom} - ${email}`);

// function identityGenerator(fullname) {
//     const nameTab = fullname.split(" ");
//     const firstname = nameTab[0];
//     const lastname = nameTab[1];
//     return [firstname, lastname, `${firstname[0]}.${lastname}@email.com`.toLowerCase()];
// }

// -----

// function identityGenerator(fullname) {
//     const nameTab = fullname.split(" ");
//     const firstname = nameTab[0];
//     const lastname = nameTab[1];

//     return {
//         firstname: firstname,
//         lastname: lastname,
//         email: `${firstname[0]}.${lastname}@email.com`.toLowerCase()
//     };
// }

// const identity = identityGenerator("Tiger Nixon");

// console.log(identity.firstname);
// console.log(identity.lastname);
// console.log(identity.email);

// -----

function mailGenerator(fullname){
    const nameTab = fullname.split(" ")
    return `${nameTab[0]}.${nameTab[1]}@email.com`.toLowerCase();
}

const email = mailGenerator("Tiger Nixon");
console.log(email);