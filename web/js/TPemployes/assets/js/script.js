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

const email = mailGenerator("Tiger Nixon");
const sal = calcMSalary(320000).toFixed(2);
const birthYear = calcbirthY(44);

console.log(email);
console.log(sal);
console.log(birthYear);

async function loadEmployees(){
    const response = await fetch("./assets/json/employees.json");
    const result   = await response.json();

    renderEmployees(result.data);

    // console.table(result.data);
}

loadEmployees();

function addCell(_row, _value, _class){
    const newCell = document.createElement("td");
    newCell.setAttribute("class", _class);
    newCell.textContent = _value;
    _row.appendChild(newCell);
}

function renderEmployees(_data){
    const tbody = document.querySelector("tbody");
    
    for (const employee of _data) {

        const id = employee.id;
        const fullname = employee.employee_name;
        const mail = mailGenerator(fullname);
        const mSalary = calcMSalary(employee.employee_salary);
        const birthY = calcbirthY(employee.employee_age);

        const tr = document.createElement("tr");
        tr.setAttribute("id", "row-"+employee.id)
        
        addCell(tr, id, "empId");
        addCell(tr, fullname, "empName");
        addCell(tr, mail, "empMail");
        addCell(tr, mSalary.toFixed(2)+"€", "empSal");
        addCell(tr,birthY, "empBirthY");

        tbody.appendChild(tr);
       
        console.log(`${id}, ${fullname}, ${mail}, ${mSalary}, ${birthY}`);
    }
}


function mailGenerator(fullname){
    const nameTab = fullname.split(" ")
    return `${nameTab[0][0]}.${nameTab[1]}@email.com`.toLowerCase();
}

function calcMSalary(salary) {
    return (salary / 12);
}

function calcbirthY(age){
    const today = new Date();
    return today.getFullYear() - age;
}







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

