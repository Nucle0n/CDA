const myEmployee = {
  lastname: "Doe",
  firstname: "John",
  birthday: "1981-11-12",
  salary: 2150,
};

const myTable = document.querySelector("#tabobj");
const myHead = myTable.createTHead();
const myTitleRow = myHead.insertRow();

for (const key in myEmployee) {
  const myTitleCell = document.createElement("th");
  myTitleRow.appendChild(myTitleCell);
  myTitleCell.textContent = key;
}

const myBody = myTable.createTBody();
const myRow = myBody.insertRow();
for (const key in myEmployee) {
  const myCell = myRow.insertCell();
  if (key == "salary") {
    myCell.textContent = myEmployee[key] + " €";
  } else if (key == "birthday") {
    const dateObj = new Date(myEmployee.birthday);
    //const tabDate = myEmployee[key].split("-");
    // myCell.textContent = tabDate[2] + "-" + tabDate[1] + "-" + tabDate[0];
    myCell.textContent = dateObj.toLocaleDateString("fr-FR");
  } else {
    myCell.textContent = myEmployee[key];
  }
}

function majFormu(_monObjet) {
  const txtNom = document.getElementById("txtNom");
  txtNom.value = _monObjet.lastname;
  const txtPrenom = document.getElementById("txtPrenom");
  txtPrenom.value = _monObjet.firstname;

  const txtBirthday = document.getElementById("txtBirthday");
  // const dateObj= new Date(myEmployee.birthday);
  txtBirthday.value = _monObjet.birthday;

  const txtSalary = document.getElementById("txtSalary");
  txtSalary.value = _monObjet.salary;
}
majFormu(myEmployee);

const btnValidation = document.querySelector("#btnValidation");
btnValidation.addEventListener("click", function (event) {
  event.preventDefault();
  myEmployee.lastname = txtNom.value;
  myEmployee.firstname = txtPrenom.value;
  if (txtBirthday.value != myEmployee.birthday) {
    
      const dateNaissance = new Date(txtBirthday.value);
      const datejour = new Date();
      if( isNaN(dateNaissance))
      {
        return console.error(" date erronée");
      }
      if (datejour < dateNaissance) {
        console.error("La date doit être dans le  passé");
      } else {
        myEmployee.birthday = txtBirthday.value;
      }

  
     
  } else {
    myEmployee.birthday = txtBirthday.value;
  }
  if(parseFloat(txtSalary.value) >  myEmployee.salary ){
  myEmployee.salary = parseFloat(txtSalary.value);
}
  console.log(myEmployee);
});