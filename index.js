const API_URL ="https://restcountries.com/v3.1/all";

const countryListContainer = document.querySelector(".countries");
const searchInput = document.querySelector(".search")[0];
const filterBtn = document.querySelector(".filter")[0];
const themeBtn = document.querySelector(".theme-btn");


const getCountries = async()=>{
const response = await fetch(API_URL);
const data = await response.json();
render(data);

searchInput.addEventListener("keyup", (event) => {
    const searchValue = event.target.value;
    const filteredData = data.filter( (country) => 
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    render(filteredData);

    });

    filterBtn.addEventListener("change", (event) => {
    const filterValue = event.target.value;
    const filteredData = data.filter( (country) => 
    country.region === filterValue);
    if(filterValue === "All") render(data);
    else render(filteredData);
    });
};

getCountries();
const render = (data)=>{
    countryListContainer.innerHTML = null;
    for(let i=0; i<data.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `<img class="country_img" src=${data[i].flags.svg} />
        <h4 class="country_name"> ${data[i].name.common}</h4>
    
        <div class="country_description">
        <span><b>Population:</b> ${data[i].population}</span>
        <span><b>Region:</b> ${data[i].region}</span>
        <span><b>Capital:</b> ${data[i].capital ? data[i].capital[0]: null}</span>
        </div>
        `;
        countryListContainer.append(listItem);
    }
};

themeBtn.addEventListener("click",()=>{
    document.documentElement.classList.toggle("dark");
});