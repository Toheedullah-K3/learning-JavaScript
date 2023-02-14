

const mainButton = document.querySelector(".main button");
const body = document.body;
const currentColor = document.querySelector(".currentColor");


function generateRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`
}


mainButton.addEventListener("click" , ()=>{
    const randomColor = generateRandomColor();
    // console.log(randomColor)
    body.style.backgroundColor = randomColor;
    
    currentColor.textContent = randomColor;
    
})