console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// Data types
const empName = 'Jane';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined; 

console.log(typeof empName);

// Concatenation
console.log('My name is ' + empName + ' and I am ' + age);
console.log(`My name is ${empName} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(' '));

// Arrays
const numbers = new Array(1,2,3,4,5,'a','b');
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruits);
console.log(fruits[1]);

fruits[4] = 'blueberries';
fruits.push('strawberries');
fruits.unshift('mangoes');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

// Object literals
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: 'street 48',
    city: 'city name',
    state: 'state name'
  }
}

console.log(person.firstName)
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email = 'jdoe@gmail.com';

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with Friend',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

console.log(todos[1].text);
console.log(JSON.stringify(todos));

// Loops
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

for(let todo of todos) {
  console.log(todo.text);
}

// Higher order array methods

todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

const todo1 = todos.filter(function(todo) {
  return todo.id === 1; 
});


// Conditonals
const p = 30;

if(p === 10) {
  console.log('p is 10');
} else if(p > 10) {
  console.log('p is greater than 10');
} else {
  console.log('p is less than 10')
}

color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

const z = color === 'red' ? 10 : 20;

// Functions
function greeting(greeting = 'Hello', name) {
  if(!name) {
    return greeting;
  } else {
    return `${greeting} ${name}`;
  }
}

// ARROW FUNCTIONS
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));


// OOPs Concepts

// Constructor Function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); 
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

const nameString = new String('Kevin');
console.log(typeof nameString); 
const num = new Number(5);
console.log(typeof num);

// ES6 CLASSES
class Employee {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const employee1 = new Employee('John', 'Doe', '7-8-80');
console.log(employee1.getBirthYear());