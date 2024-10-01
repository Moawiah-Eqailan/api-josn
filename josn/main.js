'use strict'

let formEmployee = document.getElementById("employeeForm");
formEmployee.addEventListener('submit', addEmployee);


// declare array of object
let employeeArr = []

// call table contant
let taHead = document.getElementById("tableHed");
let taBody = document.getElementById("tableBody");
let taFooter = document.getElementById("tableFoot");

// read data from form

function addEmployee(event) {
    event.preventDefault();
    // console.log(event , "form event");

    let name = event.target.empNameId.value;
    // console.log(name , "form name");

    let email = event.target.emplEmailId.value;
    // console.log(email , "email");

    let depWork = event.target.depEmplId.value;
    // console.log(depWork, "select value");

    new Employee(name, email, depWork);//hoisting
    renderInfo()

}
// ad new employee
function Employee(nameEmp, emailEmp, empDep) {
    this.employeeName = nameEmp;
    this.employeeEmail = emailEmp;
    this.employeeDep = empDep;
    this.empSalary = salaryMount(260, 500)
    console.log(employeeArr, "employe array result");
    employeeArr.push(this);
    localStorage.setItem('employees', JSON.stringify(employeeArr));

}

window.onload = function () {
    if (localStorage.getItem("employees")) {
        employeeArr = JSON.parse(localStorage.getItem('employees'));
        renderInfo();
    }
}
// calculate salary
function salaryMount(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// built header 
function creatHeader() {
    let trEle = document.createElement('tr');
    taHead.appendChild(trEle);

    let thEl1 = document.createElement('th');
    trEle.appendChild(thEl1);
    thEl1.textContent = 'Name';


    let thEl2 = document.createElement('th');
    trEle.appendChild(thEl2);
    thEl2.textContent = "Email";

    let thEl3 = document.createElement('th');
    trEle.appendChild(thEl3);
    thEl3.textContent = "Department";

    let thEl4 = document.createElement('th');
    trEle.appendChild(thEl4);
    thEl4.textContent = "Salary";
}

creatHeader()

function renderInfo() {
    taBody.innerHTML = "";
    let sum = 0;
    for (let i = 0; i < employeeArr.length; i++) {
        let trBody = document.createElement("tr");
        taBody.appendChild(trBody);

        let tdEl1 = document.createElement('td');
        trBody.appendChild(tdEl1);
        tdEl1.textContent = employeeArr[i].employeeName;

        let tdEl2 = document.createElement('td');
        trBody.appendChild(tdEl2);
        tdEl2.textContent = employeeArr[i].employeeEmail;

        let tdEl3 = document.createElement('td');
        trBody.appendChild(tdEl3);
        tdEl3.textContent = employeeArr[i].employeeDep;

        let tdEl4 = document.createElement('td');
        trBody.appendChild(tdEl4);
        tdEl4.textContent = employeeArr[i].empSalary;
        sum += employeeArr[i].empSalary;
    }
    footerRender(sum)
}

function footerRender(sum) {
    taFooter.innerHTML = "";
    let trFo = document.createElement('tr');
    taFooter.appendChild(trFo);
    let tdFo = document.createElement('td');
    trFo.appendChild(tdFo);
    tdFo.textContent = sum
}

let jsonData

fetch("josn.js").then(

    res => {
        return res.json();
    }

).then(data => {

    jsonData = data;

    console.log(jsonData, "data");
})
