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
