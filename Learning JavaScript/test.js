let check = false;  


function func() {
    
    
    if(check === false){
        console.log("Function Called");
        check = true;
    }else{
        console.log("Already Called...");
    }
    
}





const myfunc1 = func;

myfunc1();
myfunc1();

const myfunc2 = func;

myfunc2();

