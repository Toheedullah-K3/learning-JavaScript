// change all headings with promise


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeHeading(element , color , text , time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
                element.style.color = color;
                element.textContent = text;
                resolve();
            }else{
                console.log("Element Not Found!")
                reject();
            }
        }, time)
        })
}

/// {} ye is liye nahi lgaye , ya phr ye hata de wrna lgane hai to function ko return krana prega
// {} eske bghir direct return ho jata , es liye use kiya

changeHeading(heading1 , "red" , "One" , 1000)
.then(()=>changeHeading(heading2, "blue" , "Two" , 1000))
.then(()=>changeHeading(heading3, "orange" , "Three" , 1000))
.then(()=>changeHeading(heading4, "green" , "Four" , 1000))
.then(()=>changeHeading(heading5, "yellow" , "Five" , 1000))
.then(()=>changeHeading(heading6, "black" , "Six" , 1000))
.then(()=>changeHeading(heading7, "grey" , "Seven" , 1000))
.then(()=>changeHeading(heading8, "red" , "Eight" , 1000))
.then(()=>changeHeading(heading9, "pink" , "Nine" , 1000))
.then(()=>changeHeading(heading10, "brown" , "Ten" , 1000))
.catch((error)=>{
    alert(error);
})
