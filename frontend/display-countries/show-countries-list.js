import { getCountriesList} from "/frontend/display-countries/get-data.js";

const countries =  await getCountriesList()

const countriesList = document.getElementById("mainList")
countries.forEach(element => {
    countriesList.appendChild(createCountryCard(element))
});

function createCountryCard(country){
  console.log(typeof(country))
  const countryNameTag = document.createElement("h1")
  const countryCapital = document.createElement("h2")
  const countryRegion = document.createElement("h2")
  const emojiImg = document.createElement("img")
  const cardDiv = document.createElement("div")
  cardDiv.className = "countryCard"
  emojiImg.src = `https://flagcdn.com/256x192/${(country.cca2).toLowerCase()}.png`
  console.log((country.cca2).toLowerCase);
  countryNameTag.innerHTML = country.name.common
  countryNameTag.className = "countryInList"
  countryCapital.innerHTML = country.capital[0]
  countryRegion.innerHTML = country.region
  emojiImg.className = "emoji"
  cardDiv.appendChild(countryNameTag)
  cardDiv.appendChild(countryCapital)
  cardDiv.appendChild(emojiImg)
  cardDiv.appendChild(countryRegion)
  return cardDiv

}