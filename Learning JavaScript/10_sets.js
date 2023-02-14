// Set Stores the Unique Values only
// iterateable
// No Index
// Loop laga skte espe


const setNumber = new Set([1,2,3,5]);
console.log(setNumber);

setNumber.add(7);
console.log(setNumber);

console.log( setNumber.has(3) );  // return true or false

for(let num of setNumber){
    console.log(num);
}