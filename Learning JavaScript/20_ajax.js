const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest;
console.log(xhr.readyState)
xhr.open("GET" , URL);
console.log(xhr.readyState)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    }
    
}

xhr.send()

