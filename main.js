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

var nums4 = nums1.reduce(sum);

function sum(total, value) {
  return total + value;
}
console.log(nums4);

//another example
var sum2 = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 2); // 2 is the initial value of the result variable
console.log(sum2);
