// 1. Given the data below, define a type alias for representing users.

type Users = {
    name: string;
    age: number;
    company?: string
}

const user: Users = {
    name: 'Shoa Tsuchida',
    age: 99,
    company: 'Coding Temple'
}

const user2: Users = {
    name: 'Dylan Katina',
    age: 99
}


// let users = [  
//     {
//         name:'Shoha Tsuchida',
//         age:99,
//         company:'Coding Temple'
//     },  
//     {
//         name:'Dylan Katina',
//         age:99
//     }
// ];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type Days = {
    day: string;
}

let day: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday') = 'Monday'

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(public firstName:string, public lastName:string) {}
    printInfo = (): string => {
        return `${this.firstName} ${this.lastName}`
    }
}
const person = new Person('Kevin', 'Baker')
console.log(person.printInfo())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(public firstName:string, public lastName:string, public salary:number){
        super(firstName, lastName)
    }
    printInfo = (): string => {
        return `${this.firstName} ${this.lastName} makes ${this.salary}`
    }
}
const person1 = new Employee('Christian', 'Askew', 1_000_000)
console.log(person1.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Employee {
    name: string,
    salary: number,
    address: {
        street: string,
        city: string,
        zipCode: number
    }
}