console.log("Script Starts");

const id = setTimeout(()=>{
    console.log("! Inside Set Timeout !");
},2000)


console.log("Script Ended")

clearTimeout(id);
// console.log(id)