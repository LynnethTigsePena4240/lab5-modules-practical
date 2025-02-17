import multiply, { add, subtract, addAndLogUpper, multiAndMax } from './mathModule.js'; // default export so doesnt need {} just the name
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(5, 3));
console.log("Substract: ", subtract(25,15));
console.log("Multiply: ", multiply(4,5));

console.log('Uppercase: ', toUpperCase('hello'));
console.log("LowerCase: ", toLowerCase("WORLD"));

console.log('Max: ', findMax([1,2,3,4,5]));
console.log('Reversed: ', reverseArray([1,2,3]));

console.log("addAndLogUpper: ");
addAndLogUpper(10, 20);
//i thought the number was actually going to turn to a string like this: THIRTY
//but its just the number taken in as a string 

console.log("multiAndMax: ");
multiAndMax([11,25,14,15,20],5);
