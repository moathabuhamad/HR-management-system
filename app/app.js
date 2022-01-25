"use strict";
let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];

function Employee(id, fullName, departmentIndex, levelIndex) {
  this.id = id;
  this.fullName = fullName;
  this.department = department[departmentIndex];
  this.level = level[levelIndex];
  this.salary = Math.floor(this.salaryCalculator() * 0.925);
  this.render();
}

Employee.prototype.salaryCalculator = function () {
  if (this.level == "Senior") {
    return Math.random() * 500 + 1500;
  } else if (this.level == "Mid-Senior") {
    return Math.random() * 500 + 1000;
  } else if (this.level == "Junior") {
    return Math.random() * 500 + 500;
  }
};
Employee.prototype.render = function () {
  document.write(`<div><h4>Name:${this.fullName}</h4><h4>Salary:${this.salary}<h4></div>`);
 
};  

const ghazi = new Employee("1000", "Ghazi Samer", 0, 2);
const lana = new Employee("1001", "Lana Ali", 3, 2);
const tamara = new Employee("1002", "Tamara Ayoub", 1, 2);
const safi = new Employee("1003", "Safi Walid", 0, 1);
const omar = new Employee("1004", "Omar Zaid", 2, 2);
const rana = new Employee("1005", "Rana Saleh", 2, 0);
const Hadi = new Employee("1006", "Hadi Ahmad", 3, 1);
