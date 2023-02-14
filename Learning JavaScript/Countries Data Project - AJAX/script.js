
const btn = document.querySelector(".btn");
const dataSection = document.querySelector(".data");



function showCountryInfo(country){
    const URL = "https://restcountries.com/v3.1/name/" + country;

    // console.log(URL)

    const xhr = new XMLHttpRequest;

    xhr.open("GET" , URL);

    xhr.send();

    xhr.addEventListener("load" , ()=>{
        const response = xhr.response;
        const [data] = JSON.parse(response);
        console.log(data);
        const html = `<article class="country">
        <img src="${data.flags['png']}" class="country-img">
        <div class="country-data">
            <h1 class="country-name">${data.name['official']}</h1>
            <p class="country-population">Population  :  ${(data.population /1000000).toFixed(1)} M</p>
            <p class="country-capital">Currency  :  ${data.capital}</p>

        </div>
    </article>`;

        dataSection.insertAdjacentHTML("beforeend" , html);
    })
};





btn.addEventListener("click" , ()=>{
    showCountryInfo('pakistan');
    showCountryInfo('afghanistan');
    showCountryInfo('turkey');
})
