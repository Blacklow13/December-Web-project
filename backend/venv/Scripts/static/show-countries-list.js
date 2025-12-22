import {countries, getCountriesList} from "/static/get-data.js";


const countriesList = document.getElementById("mainList")
for (let i = 0; i < countries.length; i++) {
    countriesList.appendChild(createCountryCard(countries[i]))
    countriesList.lastChild.dataset.index = i;
}

function createCountryCard(country){
  const countryNameTag = document.createElement("h2")
  const countryCapital = document.createElement("a")
  const countryRegion = document.createElement("a")
  const countryArea = document.createElement("a")
  const countryPopulation = document.createElement("a")
  const emojiImg = document.createElement("img")
  const cardDiv = document.createElement("div")
  const linkToFullPageButton = document.createElement("button")
  linkToFullPageButton.className = "buttons"
  linkToFullPageButton.innerHTML = "See more info"
  linkToFullPageButton.onclick = function(){
    window.location.href = `/countries/${(country.cca2).toLowerCase()}`
  }
  cardDiv.className = "countryCard"
  emojiImg.src = `https://flagcdn.com/256x192/${(country.cca2).toLowerCase()}.png`
  countryNameTag.innerHTML = country.name.common
  countryNameTag.className = "countryInList"
  countryCapital.innerHTML = country.capital[0]
  countryRegion.innerHTML = country.region
  countryRegion.id = "region";
  countryArea.innerHTML = country.area + " km2"
  countryArea.id = "area";
  countryPopulation.innerHTML = country.population + " residents"
  emojiImg.className = "emoji"
  const titleDiv = document.createElement("div")
  titleDiv.className = "countryTitle"
  titleDiv.appendChild(countryNameTag)
  titleDiv.appendChild(emojiImg)
  cardDiv.appendChild(titleDiv)
  cardDiv.appendChild(countryCapital)
  cardDiv.appendChild(countryRegion)
  cardDiv.appendChild(countryArea)
  cardDiv.appendChild(countryPopulation)
  cardDiv.appendChild(linkToFullPageButton)

  return cardDiv

}