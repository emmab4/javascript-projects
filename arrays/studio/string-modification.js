const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//str1 = str.slice(3, 10) 
//console.log(str1 + "Lau");

str1 = str.replace("Lau", "") + str.slice(0,3);
console.log(str1)


//str2 = str + str1
//console.log(str2)


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str1} is ${str} in Pig Latin`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
Question = input.question('Enter number of letters to relocate');

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (Question > str.length){
    console.log(str1);
}