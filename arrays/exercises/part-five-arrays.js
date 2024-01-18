let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); //returns an erray w/ one element: 'In space, no one can hear you code.'
console.log(str.split('e')); //returns 'In spac', 'no on', ' can h'...etc. "E" is the separator
console.log(str.split(' ')); // returns an array with each element = one word 
console.log(str.split('')); // returns an array with each element = 1 letter
    // SO, the parameter inside the () is the "breaking point"/separator of the elements


//2) Use the join method on the array to identify the purpose of the parameter inside the ().
newStr = ''
newStr = arr.join();
newStr = arr.join('e');
newStr = arr.join(' ');
newStr = arr.join('');
console.log(newStr); 
    //The parameter inside the () is used to separate the elements when they are joined into a string! 

//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
    //NO! Split and Join do NOT change the original string/array

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
//console.log(cargoHold.split(','));
//cargoHold.sort();
//console.log(cargoHold);

console.log(cargoHold.split(',').sort().join(','));

//Look at this again- I feel like I understand this partially but not fully 