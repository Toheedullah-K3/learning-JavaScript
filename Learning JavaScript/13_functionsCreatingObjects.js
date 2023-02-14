function createUser(firstName , age){
    const user = {};
    user.firstName = firstName;
    user.age = age;

    user.showData = function(){
        return `${this.firstName} is ${this.age} years old!`;
    }
    user.is18 = function(){
        return this.age > 18;
    }

    return user;
};


const user1 = createUser('Toheed' , 21);
const user2 = createUser('Afnan' , 14);
const user3 = createUser('Rizwan' , 28);

// console.log(user1);
const userAbout1 = user1.showData();
const userAbout2 = user2.showData();
const userAbout3 = user3.showData();
// console.log(user2);
// console.log(user3);

console.log(userAbout1); 
console.log(userAbout2); 
console.log(userAbout3); 