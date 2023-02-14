


//  call() ke argument me jonsa object pass krwye , this me uska adress jyga

function about(){
    console.log(`First Name : ${this.firstName}    ,     Age : ${this.age}`)
};

const user1 = {
    firstName : "Toheed",
    age : 21 
}

const user2 = {
    firstName : "Afnan",
    age : 14
}

about.call(user1);
about.call(user2);




// ***** more *****

// ==> Call
// ==> Apply
// ==> Bind