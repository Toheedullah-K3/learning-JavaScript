
const names = ["Name1" , "Khan" , "random" , "Toheed" , "null" , "Ullah" ];

// creation of promise

const nameMatched = new Promise((resolve, reject) => {
    if(names.includes("Toheed") && names.includes("Ullah") && names.includes("Khan")){
        resolve("'Toheed Ullah Khan'");
    }else{
        reject("Username not Matched!");
    }
})


// how to consume or use promise


nameMatched.then((matched)=>{
    console.log(`Your Name ${matched} is Available!`);
},

(notMatched)=>{
    console.log(notMatched);
});