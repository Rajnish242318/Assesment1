console.log(1 + "2" + "2"); // ans is 122 because "2" is consider string and 1 is integer
console.log(1 + +"2" + "2"); // ans is 32  + or - operand in front of a string converts it to number. so here +"2" will become 2 and then 1 + 2 which will be 3 and againg "2" is considerd string
console.log(1 + -"1" + "2"); // ans is 02  - operand in front of a string converts it to number 
console.log(+"1" + "1" + "2"); // ans is 112 1 is considerd one because + operand in front of a string converts is to number
console.log( "A" - "B" + "2"); // ans is NaN2 used "+" then it will concatenate two string as "+" means concatenation. So "A"-"B" will be "NaN" and concate(+) 2 will produce "NaN2"
console.log( "A" - "B" + 2); // ans Nan i don't know why 