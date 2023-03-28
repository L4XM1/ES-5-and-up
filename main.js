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
numbers.forEach(myFunction);
document.getElementById("para").innerHTML = txt;

function myFunction(value) {
  txt = txt + value + "<br>";
}
