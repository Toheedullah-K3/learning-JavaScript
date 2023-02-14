// there is free space like thing in every function
// which is empty object allocated to every function
// we can store anything in it like key value pairs


function func(){
    console.log("Hello World");
}

func();

console.log(func.prototype)