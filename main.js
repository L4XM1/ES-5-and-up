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
