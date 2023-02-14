// diff bw objects and map is 
// object only store string keys not in number
// map will store its keys in number


const person = new Map();

person.set("Name" , "Toheed Ullah Khan");
person.set("Age" , 21);
person.set(123 , "Just checking , it sotre number or Not");

// console.log(person.keys()); 

for(let [key , value] of person){
    console.log(key , value);
}