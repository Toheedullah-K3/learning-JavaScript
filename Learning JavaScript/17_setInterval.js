

const button = document.querySelector("button");
const body = document.body;

const intervalID = setInterval(()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);


    const rgb =`rgb(${red},${green},${blue})`;
    console.log(rgb)
    body.style.background = rgb;
} , 1000)


button.addEventListener("click" , ()=>{
    clearInterval(intervalID);
    button.textContent = body.style.background;
})
// clearInterval  ... to clear the interval with id
// uses many - like change backgroud in every 1 second


