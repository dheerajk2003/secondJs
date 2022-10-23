// console.log("hello");
// console.error('this is an error');
// console.warn('this is a warning');

// let age = 30;
// console.log(age);
// age = 32;
// console.log(age);
//we can change value of let

// const ages = 45;
// console.log(ages);
// ages=40;    //will give error
// console.log(ages);
// we can't change the value of const

// datatypes------->
// {
//     string
// const name = 'dheeraj';
// // integer 
// const age = 20;
// // float/number
// const rating = 4.5;
// // bool/Boolean 
// const isCool = true;
// // null
// const x = null;
// // undefined
// const y = undefined;
// let z;
// }

// console.log(typeof name,typeof age, typeof rating);

// strings 1
// {
//     const name = 'munna';
// const age = 20;

// // string concatenation
// console.log('my name is ' + name +' i am ' + age);

// // template string 
// console.log(`My name is ${name} and i am ${age}`);

// const stringintro = console.log(`My name is ${name} and i am ${age}`);

// console.log(stringintro);
// }

// string properties and methods
// {
//     const s = 'Hello everyone';
// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5));
// console.log(s.substring(0,5).toUpperCase());
// //this will split the string into single characters and form a array.
// console.log(s.split(''));
// // use case/ example.
// const departments = 'technology, computer, it, management, peon';
// console.log(departments.split(', '));
// }

// Arrays.
// {
    
// // 1st method using new keyword.
// const numbers = new Array(1,2,3,4,5,6);
// console.log(numbers);

// // 2nd using [] ,/ we don't need to specify the datatype of array and different type of values can be entered

// const fruits = ['management', 'oranges', 'pears', 40, true, null];
// console.log(fruits);

// console.log(fruits[2]);

// fruits[6]= 'mango';
// console.log(fruits);

// fruits[9]= 'mango';
// console.log(fruits);

// // adds on the end
// fruits.push('grapes');

// // adds on the beggining.
// fruits.unshift('strawberries');
// console.log(fruits);

// // removes the last one.
// fruits.pop();
// console.log(fruits);

// // check if something is an array or not if it is true will returned otherwise false 
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('hello'));

// // tells the index of an array component
// console.log(fruits.indexOf('oranges'));
// console.log(fruits.indexOf('management'));//wrong input will return negative value
// }

// object literals
// {
//     const person = {
//         firstName: 'harsh',
//         lastName: 'satoliya',
//         age: 30,
//         hobbies: ['music', 'movies', 'chit-chat'],
//         address: {
//             street: '31 main jhalana',
//             city: 'Jaipur',
//             state: 'Rajasthan'
//         }
//     }
    
//     console.log(person);
//     console.log(person.firstName, person.age);
//     console.log(person.hobbies[1]);
//     console.log(person.address.city);
// }

// pull out from object as variable
// {
//     const{firstName,age} = person;
//     console.log(firstName,age);
//     const{address: {city}} = person;
//     console.log(city);
// }

// adding properties to object 
// {
//     person.email = 'harshsatoliya2004@gmail.com';
//     console.log(person);
// }

// array of object 
// {
//     const todo = [
//         {
//             id: 1,
//             task: 'read 10 pages',
//             isCompleted: true
//         },
//         {
//             id: 2,
//             task: 'do exercise',
//             isCompleted: true
//         },
//         {
//             id: 3,
//             task: 'code 3 programs',
//             isCompleted: false
//         }
//     ];
//     console.log(todo)
//     console.log(todo[1].task);
// }

// convert into json 
// {
//     const todoJSON = JSON.stringify(todo);
//     console.log(todoJSON);
// }

// Loops
// {
//           For 
//     for(let i=0; i<=10; i++){
//         console.log(i);
//     }

//     // while
//     let i=0;
//     while(i<20){
//         console.log(i);
//         i++;
//     }
// }

// loop through array 
// {
//     // old unefficient way 
//     for(let i=0; i<todo.length; i++){
//         console.log(todo[i].task);
//     }

//     // second way 
//     for(let i of todo){
//         console.log(i.id, i.task);
//     }
// }

// high order array method 
// {
//     // for each 
//     todo.forEach(function(t){
//         console.log(t.task, t.isCompleted);
//     })

//     //map
//     const todoNum = todo.map(function(t){
//         return t.id;
//     });
//     console.log(todoNum);

//     //filter
//     const todoIsCompleted = todo.filter(function(t){
//         return t.isCompleted === true;
//     });
//     console.log(todoIsCompleted);

//     const todoCompleted = todo.filter(function(t){
//         return t.isCompleted === true;
//     }).map(function(to){
//         return to.task
//     });
//     console.log(todoCompleted);
// }

//if
// {
//     const x =10;
// if(x == 10){
//     console.log('x is 10');
// }
// else if(x>10){
//     console.log('x is greater than 10');
// }
// else{
//     console.log('x is less than 10');
// }
// }

// condition in one line 
// {
//     const x = 10;
//     const color = x > 10 ? 'red' : 'blue';
//     console.log(color);
// }

// switch case 
// {
    
// switch(color){
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'red':
//         console.log('color is red');
//         break;
//     default:
//         console.log('color is nor red neither blue');
//         break;
// }
// }

// functions 
// {
//     function addNums(num1=2, num2=3){
//         return num1 + num2;
//     }
//     console.log(addNums());
//     console.log(addNums(5,5));
//     const printer = addNums(3,33);
//     console.log(printer);
// }

// arrow functions 
// {
//     const findSum = (num1=4 ,num2=5) =>{
//         return num1+num2;
//     }
//     console.log(findSum(12,67));
    
//     const findRemainder = (num1, num2) => console.log(num1%num2);
//     findRemainder(10,3);
    
//     const findProduct = (num1=4 ,num2=5) => num1*num2;
//     console.log(findProduct());
    
//     const add5 = num1 => num1+5;
//     console.log(add5(5));
// }

// oops 
// {
//     // constructor function.
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getdob = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('mohan','singh','2002-05-22');
// const person2 = new Person('harish','tank','2003-06-24');
// console.log(person1);
// console.log(person2.lastName);
// console.log(person2.dob.getDay());
// console.log(person1.getdob());
// console.log(person2.getFullName());

// function Rabbit(firstName, gender, rating){
//     this.firstName=firstName;
//     this.gender=gender;
//     this.rating=rating;
// }

// const Rabbit1 = new Rabbit('cheenu','female',9);
// const Rabbit2 = new Rabbit('chakli','female',7);
// const Rabbit3 = new Rabbit('hiyu','male',8);
// console.log(Rabbit1);
// console.log(Rabbit2.firstName);
// console.log(Rabbit3.gender);
// }

// oops using classes
// {
//     class Person
//     {
//         constructor(firstName, lastName, dob){
//             this.firstName=firstName;
//             this.lastName=lastName;
//             this.dob=new Date(dob);
//         }
//         getdob(){
//             return this.dob.getFullYear();
//         }
//         getFullName(){
//             return `${this.firstName} ${this.lastName}`;
//         }
//     }

//     const person1 = new Person('deepak','saini','2002-07-16');
//     console.log(person1);
//     console.log(person1.getdob());
//     console.log(person1.getFullName());
// }