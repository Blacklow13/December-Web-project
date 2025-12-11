import { getCountriesList} from "/frontend/display-countries/get-data.js";

const countries =  await getCountriesList()

const countriesList = document.getElementById("mainList")
countries.forEach(element => {
    countriesList.appendChild(createCountryCard(element))
});

function createCountryCard(country){
  console.log(typeof(country))
  const countryNameTag = document.createElement("h2")
  const countryCapital = document.createElement("a")
  const countryRegion = document.createElement("a")
  const countryArea = document.createElement("a")
  const countryPopulation = document.createElement("a")
  const emojiImg = document.createElement("img")
  const cardDiv = document.createElement("div")
  cardDiv.className = "countryCard"
  emojiImg.src = `https://flagcdn.com/256x192/${(country.cca2).toLowerCase()}.png`
  console.log((country.cca2).toLowerCase);
  countryNameTag.innerHTML = country.name.common
  countryNameTag.className = "countryInList"
  countryCapital.innerHTML = country.capital[0]
  countryRegion.innerHTML = country.region
  countryArea.innerHTML = country.area + " km2"
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
  return cardDiv

}