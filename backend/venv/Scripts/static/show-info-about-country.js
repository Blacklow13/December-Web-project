import { getCountriesList} from "/static/get-data.js";

const countries =  await getCountriesList()


const countryInfo = document.getElementById('countryInfo')
let country;


const ccode = countryInfo.dataset.code


countries.forEach(element => {
    if (element.cca2.toLowerCase() == ccode){
        country = element
    }
    
});

const countryNameTag = document.createElement("h2")
const countryCapital = document.createElement("a")
const countryRegion = document.createElement("a")
const countryArea = document.createElement("a")
const countryLatlng = document.createElement("a")
const countryCurrency = document.createElement("a")
const countryPopulation = document.createElement("a")
const countryLanguage = document.createElement("a")
const emojiImg = document.createElement("img")
const cardDiv = document.createElement("div")
cardDiv.className = "countryCard"
emojiImg.src = `https://flagcdn.com/192x144/${(country.cca2).toLowerCase()}.png`
countryNameTag.innerHTML = country.name.common
const title = document.getElementsByClassName("title")
title.innerHTML = "INFORMATION ABOUT " + country.name.common.toUpperCase()
countryNameTag.className = "countryInList"
countryCapital.innerHTML = "Capital " + country.capital[0]
countryLatlng.innerHTML = `${country.latlng[0]}° lat ${country.latlng[1]}° lan`
countryCurrency.innerHTML = `Currencies ${Object.keys(country.currencies).join(", ")}`
countryRegion.innerHTML = "Region " +  country.region
countryRegion.id = "region";
countryArea.innerHTML = "Area " + country.area + " km2"
countryArea.id = "area";
countryLanguage.innerHTML = "Languge(s) of the country " + Object.keys(country.languages).join(", ") 
countryPopulation.innerHTML = "There live " + country.population + " people"
emojiImg.className = "emoji"
const titleDiv = document.createElement("div")
titleDiv.className = "countryTitle"
titleDiv.appendChild(countryNameTag)
countryInfo.appendChild(titleDiv)
countryInfo.appendChild(emojiImg)
countryInfo.appendChild(countryCapital)
countryInfo.appendChild(countryLanguage)
countryInfo.appendChild(countryRegion)
countryInfo.appendChild(countryArea)
countryInfo.appendChild(countryCurrency)
countryInfo.appendChild(countryLatlng)
countryInfo.appendChild(countryPopulation)



