"use strict"; //JS code should be executed in "strict mode"(e.g. not use undeclared variables)

//Property Access on Strings
//The charAt() method returns the character at a specified index (position) in a string

var str = "I am a string";
str.charAt(3);
console.log(str.charAt(0));

//ES5 allows property access on strings:
console.log(str[2]);

//Strings Over Multiple Lines
//escaped with a backslash
var str2 =
  "I am a \
multiple line string";

//Reserved Words as Property Names

var obj = { name: "Marta", new: "yes" };
var obj2 = { name: "Strange", let: "yes" };
console.log(obj.name);
console.log(obj2.let);

//String trim()
//The trim() method removes whitespace from both sides of a string

var str3 = "     Hello from the other side    ";
var str4 = str3.trim();
console.log(
  "First string length = " +
    str3.length +
    "," +
    " second string length = " +
    str4.length
);

//Array.isArray()
//The isArray() method checks whether an object is an array

function myFun() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.textContent = Array.isArray(fruits);
}
myFun();

//Array forEach()
//The forEach() method calls a function once for each array element

var txt = "";
var numbers = [33, 22, 11, 44, 55];

function myFunction(value) {
  txt = txt + value + "<br>";
}

numbers.forEach(myFunction);
document.getElementById("para").innerHTML = txt;

//another example
[1, 2, 3].forEach(function (item, index) {
  console.log(item, index);
});

//map
//it takes an item from the array, does something to it and puts a new item in it's place
//mapping - associating each element of one set with an element of another set

var nums1 = [45, 4, 9, 16, 25];
var nums2 = nums1.map(doubler);

function doubler(value) {
  return value * 2;
}

console.log(nums2);

//filter
//creates a new array, checks each item in an array against some condition to see if it's true or false and if it's true it will put that item in a new array

var nums3 = nums1.filter(over18);

function over18(val) {
  return val > 18;
}

console.log(nums3);

//another example
var ints = [1, 2, 3];
var evens = ints.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);

//reduce
//take an array, do something and then pass the result to the next iteration along with the next item in the array
//reduces the array into a single value

var nums4 = nums1.reduce(sum, 3);

function sum(total, value) {
  return total / value;
}
console.log(nums4);

//another example
var sum2 = [1, 2, 3].reduce(function (result, item) {
  //(accumulator, currentValue)
  return result + item;
}, 8); // 8 is the initial value of the result variable (if we don't put a number, it's the 1st item)
console.log(sum2);

//reduceRight

var sum3 = nums1.reduceRight(rightReducerSum, 3);

function rightReducerSum(total, value) {
  return total / value;
}

console.log(sum3);

//some
//check if any item in the array meets the condition, returns boolean
//(checks if some array values pass a test)
//does not modify the original array
var someOver18 = nums1.some(atleastOne);

function atleastOne(value) {
  return value > 18;
}

console.log(someOver18);

//another example
var hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});

console.log(hasNegativeNumbers);

//every
// same as the some BUT now every number has to meet the condition
//checks if ALL values are over 18

var allOver18 = nums1.every(areAllOver18);

function areAllOver18(value) {
  return value > 18;
}

console.log(allOver18);

//another example
var allPositiveNumbers = [1, 2, 3, -1].every(function (item) {
  return item > 0;
});

console.log(allPositiveNumbers);

//indexOf
//search an array for an element value and return its position
//the first occurrence of

var myFruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

var indexOfApple = myFruits.indexOf("Apple");
console.log(indexOfApple); //2

//lastIndexOf()
//same as indexOf(), but searches from the end of the array
//the last occurrence of

var indexOfAppleFromEnd = myFruits.lastIndexOf("Apple");

console.log(indexOfAppleFromEnd); //4

//JSON.parse()
//A common use of JSON is to receive data from a web server. JSON.parse() is used to convert the text(JSON string) into a JavaScript object

var stringFromServer = '{"name": "Aurora", "age": 29, "city": "Stockholm"}';

var obj = JSON.parse(stringFromServer);

console.log(obj);

//JSON.stringify()
//used to convert a JavaScript object into a JSON string

var myJSON = JSON.stringify(obj);

console.log(myJSON);

//Date.now()
//returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

var currentTime = Date.now();
console.log(currentTime);

var dateThatIsReadable = new Date(currentTime);
document.getElementById("date").textContent = dateThatIsReadable;

//Date toISOString()
//method converts a Date object to a string, using the ISO standard format

var d = new Date();
document
  .getElementById("date-wrapper")
  .appendChild(document.createElement("p")).textContent = d.toISOString();

//Date toJSON()
//converts a Date object into a string, formatted as a JSON date

document
  .getElementById("date-wrapper")
  .appendChild(document.createElement("p")).textContent = d.toJSON();

//Property Getters and Setters
//define object methods with a syntax that looks like getting or setting a property
//This example creates a getter for a property called fullName

var person = {
  firstName: "Aurora",
  lastName: "Borealis ",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
document.getElementById("test").innerHTML = person.fullName;

//This example creates a setter and a getter for the language property:

var person2 = {
  firstName: "Jhon",
  lastName: "Doe",
  language: "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  },
};

//set an obj property with a setter
person2.lang = "en";

//display data using a getter
document
  .getElementById("test")
  .appendChild(document.createElement("p")).innerHTML =
  "The language is " + person2.lang;

//setter to secure upper case updates of language

var person3 = {
  firstName: "Jane",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value.toUpperCase();
  },
};

//set an obj property with a setter
person3.lang = "en";

//display data from the obj
document
  .getElementById("test")
  .appendChild(document.createElement("p")).innerHTML =
  "In upper case it is " + person3.language;

//Object.defineProperty()
//a new Object method in ES5. It lets you define an object property and/or change a property's value and/or metadata

var person4 = {
  firstName: "Maria",
  lastName: "Horhe",
  language: "NO",
};

//change a property

Object.defineProperty(person4, "language", {
  value: "EN",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person4);
//enumerate properties

var txt2 = "";
for (var x in person4) {
  txt2 += person4[x] + "<br>";
}

document
  .getElementById("test")
  .appendChild(document.createElement("p")).innerHTML = txt2;

//same code, except it hides the language property from enumeration

// Object.defineProperty(person4, "language", {
//   value: "EN",
//   writable: false,
//   enumerable: false,
//   configurable: true,
// });

//enumerate properties
var txt3 = "";
for (var y in person4) {
  txt3 += person4[y] + "<br>";
}

document
  .getElementById("test")
  .appendChild(document.createElement("p")).innerHTML = txt3;

//same obj but creates a setter and a getter to secure upper case updates of language

// var language = person4.language;
Object.defineProperty(person4, "language", {
  get: function () {
    return this._language;
  },
  set: function (value) {
    this._language = value.toUpperCase();
  },
});

//change lang, setter
person4.language = "sr";
console.log(person4);
//display lang, getter
document
  .getElementById("test")
  .appendChild(document.createElement("p")).innerHTML = person4.language;

//Bind() method
//an object can borrow a method from another object

var person5 = {
  firstName5: "John",
  lastName5: "Doe",
  fullName5: function () {
    return this.firstName5 + " " + this.lastName5;
  },
};

var member = {
  firstName5: "Hege",
  lastName5: "Nielsen",
};

var fullNameBorrowed = person5.fullName5.bind(member);

console.log(fullNameBorrowed());
document
  .getElementById("test")
  .appendChild(document.createElement("p")).innerHTML = fullNameBorrowed();

//Sometimes the bind() method has to be used to prevent losing this.

var person6 = {
  firstName: "Rambo",
  lastName: "Max",
  display: function () {
    var x = document
      .getElementById("test")
      .appendChild(document.createElement("p"));
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

person6.display();

//this keyword refers to an object. When a function is used as a callback, this is lost.
//This example will try to display the person name after 3 seconds, but it will display undefined instead

setTimeout(person6.display, 3000);

//The bind() method solves this problem.

var display = person6.display.bind(person6);
setTimeout(display, 3000);

//Managing Objects

//Create object with an existing object as prototype

var parentObj = {
  firstName: "Marley",
  lastName: "Max",
};

var donorObj = {
  age: { value: 29 }, //Object.create() method will be able to use this descriptor to create the age property on the child object
};

var child = Object.create(parentObj, donorObj); //expects the second argument to be an object with property descriptors
console.log(child.firstName);
console.log(child.age);

// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

var person7 = {};

Object.defineProperty(person7, "lastName", {
  value: "M",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person7.lastName);
// descriptor is an object that describes the attributes of a property that you want to define or modify. It allows you to specify the characteristics of the property such as its value, whether it's writable or not, whether it's enumerable or not, and whether it's configurable or not.

//Accessing Properties
console.log(Object.getOwnPropertyDescriptor(person6, "firstName"));

//Returns all properties as an array
var getAllProperties = Object.getOwnPropertyNames(person6);

console.log(getAllProperties); //array of strings

//Accessing the prototype
console.log(Object.getPrototypeOf(person6));

//Returns enumerable (whether the property can be iterated over) properties as an array
console.log(Object.keys(person7));

//Protecting Objects

// Prevents adding properties to an object
Object.preventExtensions(person7);

// Returns true if properties can be added to an object
console.log(Object.isExtensible(person7));

// Prevents changes of object properties (not values)
Object.seal(person7);

// Returns true if object is sealed
console.log(Object.isSealed(person7));

// Prevents any changes to an object
Object.freeze(person7);

// Returns true if object is frozen
console.log(Object.isFrozen(person7));

//Trailing commas are commas that come after the last item in a list or object
//ES5 allows trailing commas in object and array definitions. JSON does not allow trailing commas.

var points = [1, 5, 10, 25, 40, 100];

// ES 6

//let keyword allows you to declare a variable with block scope
let u = 10; //here u is 10
{
  let u = 2; //here u is 2
}
//here u is 10

//const keyword allows you to declare a constant (constant value)

var a = 10; //here a is 10
{
  const a = 2; //here a is 2
}
//here a is 10

//Arrow Functions
//You don't need the function keyword, the return keyword, and the curly brackets

//ES 5
var h = function (x, y) {
  return x * y;
};
console.log(h(4, 8));

//ES 6
const t = (x, y) => x * y;

console.log(t(2, 6));

// () => do not have their own this, not suited for object methods, not hoisted, must be defined before they are used
//const is safer than using var, because a function expression is always a constant value
//omit the return keyword and the curly brackets if the function is a *single statement*

const r = (x, y) => {
  return x * y;
};

//The Spread (...) Operator
//expands an iterable into more elements
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year); // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//The "Spread" operator can be used to expand an iterable into more arguments for function calls

const nums5 = [11, 22, 44, 66, 88];
let maxValue = Math.max(...nums5); //instead of NaN because it's an array and would be treated as one argunent, with ... it logs 88
//to spread the elements of the array into individual arguments to Math.max().
console.log(maxValue);

//The For/Of Loop
//oops through the values of an iterable objects (data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more)

/* 
for (variable of iterable) {
  code block to be executed
} 
*/

//variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var

//array
const animals = ["dog", "cat", "monkey", "racoon"];
let text = "";

for (let a of animals) {
  console.log((text += a + " "));
}
console.log(text);

//string
let lang = "JavaScript";
let text2 = "";

for (let l of lang) {
  console.log((text2 += l + " "));
}

console.log(text2);

//JavaScript Maps
//use an Object as a key
//data structures that allow you to store key-value pairs where both the keys and values can be of any data type.
//maping values to keys

const fruits = new Map([
  //Map literal syntax
  ["apples", 5],
  ["bananas", 7],
  ["oranges", 3],
]);
const myMap = new Map();
myMap.set("hello", 11);
console.log(myMap);

console.log(fruits);

//JavaScript Sets
//a set is an object that stores a collection of unique values, where each value can occur only once in the set. Sets are similar to arrays, but they do not have a specific order, and they cannot contain duplicate values.
//sets are not indexed

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters.size);
console.log(letters.has("a"));

//JavaScript Classes
//are templates for JavaScript Objects
//Use keyword class, add a method named constructor()
//A JavaScript class is not an object.
//It is a template for JavaScript objects.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  logCar() {
    console.log(
      `Hello, the car's name is ${this.name} and it was made in ${this.year}`
    );
  }
}

let myCar = new Car("Mini One", 2003);
myCar.logCar();

let momCar = new Car("Renault", 2004);
momCar.logCar();

//When you have a class, you can use the class to create multiple instances of objects

//JavaScript Promises
//object that links "Producing Code" and "Consuming Code"
//"Producing Code" can take some time and "Consuming Code" must wait for the result

const myPromise = new Promise(function (myResolve, myReject) {
  //callback functions that the Promise will call depending on whether the asynchronous operation it represents was successful or not.
  if (true) {
    myResolve(console.log("Success!"));
  } else {
    myReject(console.log("Sorry!"));
  }
});

myPromise.then(
  function (value) {
    document
      .getElementById("test")
      .appendChild(document.createElement("p")).innerHTML = value;
  },
  function (error) {
    document
      .getElementById("test")
      .appendChild(document.createElement("p")).innerHTML = error;
  }
);

myPromise.then("Hello");

//A callback is a function passed as an argument to another function.

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I love you!");
  }, 3000);
});

mySecondPromise.then((val) => {
  document
    .getElementById("test")
    .appendChild(document.createElement("p")).innerHTML = val;
});

//The Symbol Type
//a primitive datatype, represents a unique "hidden" identifier that no other code can accidentally access. Symbols are always unique.

const p = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let id = Symbol("id");
p[id] = 444;

console.log(Symbol("id") === Symbol("id")); //false. Unique!
console.log(p[id]); //p.id is still undefined

//or Object.getOwnPropertySymbols() that eturns an array of all the symbol properties on the object.

//Default Parameter Values

function myFu(x, y = 10) {
  return x + y;
}

console.log(myFu(5)); //15

//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let s = sum(2, 8, 10, 20);
console.log(s);

//String.includes()
//The includes() method returns true if a string contains a specified value, otherwise false

let msg = "Hello from the other side";

console.log(msg.includes("other"));

//String.startsWith()
//The startsWith() method returns true if a string begins with a specified value, otherwise false

let te = "Hi, what's up?";
console.log(te.startsWith("Hi"));

//String.endsWith()

let n = "Jhon Jovanovic";
console.log(n.endsWith("Jovanovic"));

//Array.from()
//The Array.from() method returns an Array object from any object with a length property or any iterable object. Ex. Array from a String:

console.log(Array.from("ABCDEFG"));

//Array keys()
//The keys() method returns an Array Iterator object with the keys of an array.

const veggies = ["Carrot", "Potato", "Broccoli", "Spinach"];
const keys = veggies.keys();

let res = "";
for (let key of keys) {
  res += key + "<br>";
}
document.write(res);

//Array find()
//returns the value of the first array element that passes a test function
//ex. finds (returns the value of ) the first element that is larger than 18

const numb = [4, 9, 16, 25, 29];
let first = numb.find(myFunct);

function myFunct(value, index, array) {
  return value > 18;
}

document.write(first + "<br>");

//Array findIndex()
//The findIndex() method returns the index of the first array element that passes a test function.

let indexOfFirstNumber = numb.findIndex(myFunct);
document.write(indexOfFirstNumber);

//New Math Methods
//added methods to the Math object
