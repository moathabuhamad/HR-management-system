"use strict"


let cardContainer = document.getElementById('cardContainer')

function Employee(fullName, department, level, imgurl) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = Math.floor(this.salaryCalculator() * 0.925);
  this.employeeId = this.generateRandomId();
  this.imgurl = imgurl;
  this.render()
}

Employee.prototype.salaryCalculator = function () {
  if (this.level == "senior") {
    return Math.random() * 500 + 1500;
  } else if (this.level == "mid") {
    return Math.random() * 500 + 1000;
  } else if (this.level == "Junior") {
    return Math.random() * 500 + 500;
  }
};

Employee.prototype.render = function () {
let  card = document.createElement('div')
cardContainer.appendChild(card)
let img = document.createElement('img')
img.setAttribute('src',this.imgurl)
card.appendChild(img)
let title = document.createElement('span')
title.textContent = `Name:${this.fullName}`
card.appendChild(title)
let  dep = document.createElement('span')
dep.textContent = `department:${this.department}`
card.appendChild(dep)
let  salary = document.createElement('span')
salary.textContent = `salary:${this.salary}`
card.appendChild(salary)
};

Employee.prototype.generateRandomId = function () {
  return Math.floor(Math.random() * 9000 + 999);
};

let form = document.getElementById("myForm");
form.addEventListener("submit", submitForm)
function submitForm(event){
event.preventDefault()
let name =event.target.fullName.value;
let department =event.target.department.value;
let level =event.target.level.value;
let imgurl =event.target.imgurl.value;
let newEmployee = new Employee(name, department, level, imgurl)
console.log(newEmployee);
saveData();
}

function saveData(){
  let stringifiedData = JSON.stringify(Employee.allEmployees);
  if (stringifiedData != null){
  localStorage.setItem("employees", stringifiedData);
  }
}

function loadData (){
  let data = localStorage.getItem("employees");
  let parcedata= JSON.parse(data);
  if(parcedata!=null){
  for (let i=0 ; i<parcedata.length ; i++){
    new Employee(parcedata[i].fullName, parcedata[i].department, parcedata[i].level, parcedata[i].img);
  }
}
}
loadData();

console.log(saveData())