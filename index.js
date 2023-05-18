const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    this.yearJoined = yearJoined;
    this.salary = salary;
  }
  idBadge = (element) => (element = this.position + " " + this.name);
}
//const employee1 = new Employee("Ahmad", "cashier", 2015, 5500);
//console.log(employee1.idBadge());

class Manager extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }
  salaryIncrease = (increaseAmount) =>
    (increaseAmount = this.salary + this.bonusPercentage);

  logManagerInfo = () =>
    this.name + " " + this.yearJoined + " " + this.bonusPercentage;
}
//const manager1 = new Manager("Ahmad", "Manager", 2010, 7000, 1000);
//console.log(manager1.salaryIncrease());

//const employees = new Employee("John Doe", "Developer", 2015, 5000);
//console.log(employees);
const manager = new Manager("John Doe", "Developer", 2015, 5000, 1000);
console.log(manager.logManagerInfo());
