//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008];
element2 = ['helium', 'He', 4.003];
element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

table = [];
table.push(element1, element2, element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);
    //one index prints the whole table, and two indices prints just element1...but why?

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
hydrogenQualities = ['gas', 'colorless', 'lightest'];
heliumQualities = ['gas', 'balloons', 'amusing voice'];
ironQualities = ['solid', 'vitamins', 'metal'];
element1.push(hydrogenQualities);
element2.push(heliumQualities);
element26.push(ironQualities);
console.log(table);
    //Not sure if this is actually correct or if I made some kind of weird Franken-array