

const btn1 = document.querySelectorAll(".main button");
console.log(btn1)
// btn1.addEventListener("click" , function(){
//     console.log("You Click Me!!")
// })

for(let btn of btn1){
    btn.addEventListener("click" , function(){
        console.log(btn)
    })
}