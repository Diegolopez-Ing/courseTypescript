"use strict";
class Person {
    constructor() {
        this.depto = 'Antioquia';
        this.city = 'Medellin';
        this.country = 'Colombia';
    }
    greet() {
        console.log('Hello!');
    }
}
class Employee extends Person {
    //Métodos
    constructor(id, name, dept) {
        super();
        this.name = name;
        this.dept = dept;
        this.id = id;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name} ${this.id}  ${this.depto}`);
    }
}
const emp = new Employee(1, 'Diego', 'Antioquia');
