
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");
const nameElem = document.querySelector("#name");
const cityElem = document.querySelector("#city");
const salaryElem = document.querySelector("#salary");
const addButton = document.querySelector("#addButton");

const dolgozoLista = [
    {name: "Pali", city: "Szolnok", salary: 385},
    {name: "Kati", city: "Szeged", salary: 345},
    {name: "Luci", city: "Pécs", salary: 185},
    {name: "Dani", city: "Budapest", salary: 385},
    {name: "Laci", city: "Hatvan", salary: 365},
    {name: "Géza", city: "Eger", salary: 205},
    {name: "Peti", city: "Tata", salary: 115}
];

let addRow = (name, city, salary) => {

    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdCity = document.createElement("td");
    let tdSalary = document.createElement("td")
    tdName.textContent = name;
    tdCity.textContent = city;
    tdSalary.textContent = salary;
    dolgozoTorzs.append(tr);
    tr.append(tdName);
    tr.append(tdCity);
    tr.append(tdSalary);
}

dolgozoLista.forEach((dolgozo) => {
    
    addRow(dolgozo.name, dolgozo.city, dolgozo.salary);
    
});

addButton.addEventListener('click', () => {
    addEmployee();
});

let addEmployee = () => {   
    dolgozo = {
        name: nameElem.value,
        city: nameElem.value,
        salary: nameElem.value
    };
    dolgozoLista.push(dolgozo);
    addRow(nameElem.value, cityElem.value, salaryElem.value);
    clearField();
}

let clearField = () => {
    nameElem.value = "";
    cityElem.value = "";
    salaryElem.value = "";
}

