const API_URL ="https://restcountries.com/v3.1/all";

const countryListContainer = document.querySelector(".countries");

const getCountries = async()=>{
const response = await fetch(API_URL);
const data = await response.json();
for(let i=0; i<data.length; i++){
    console.log(data[i].name.common);
    const listItem = document.createElement("li");
    listItem.innerHTML = `<img class="country_img" src=${data[i].flags.svg} />
    <h4 class="country_name"> ${data[i].name.common}</h4>

    <div class="country_description">
    <span><b>Population:</b> ${data[i].population}</span>
    <span><b>Region:</b> ${data[i].region}</span>
    <span><b>Capital:</b> ${data[i].capital}</span>
    </div>
    `;
    countryListContainer.append(listItem);
}


};

getCountries();
