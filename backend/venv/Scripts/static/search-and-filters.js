import { countries } from "/static/get-data.js";

const searchByNameArea = document.getElementById("searchByName")
const countriesList = document.getElementById("mainList")
const searchByNameButton = document.getElementById("searchByNameButton")
const showAllCards = document.getElementById("showAllCards")
const showAllCards1 = document.getElementById("showAllCards1")
const filterByRegionButton = document.getElementById("filterByRegionButton")
const selectRegion = document.getElementById("selectfilterByRegion")
const filterByAreaMinInput = document.getElementById("filterByAreaMin")
const filterByAreaMaxInput = document.getElementById("filterByAreaMax")
const filterByAreaButton = document.getElementById("filterByAreaButton")

function onInputCountryName(){
   for (let i = 0; i < countriesList.childNodes.length; i++){
      if((!searchInTranslations(i, searchByNameArea.value) && !(searchByNameArea.value.toLowerCase() == countriesList.childNodes[i].firstChild.firstChild.innerHTML.toLowerCase()))){
         hideCard(countriesList.childNodes[i]);
      }else{
         showCard(countriesList.childNodes[i]);
      }
   }
}

function filterByRegion(){
   if (selectRegion.value == "All"){
      showCards();
   }else{
      for (let i = 0; i < countriesList.childNodes.length; i++){
         const r = countriesList.childNodes[i].querySelector("#region");
      if(r.innerHTML != selectRegion.value){
         hideCard(countriesList.childNodes[i]);
      }else{
         showCard(countriesList.childNodes[i]);
      }
   }
   }
   
}

function filterByArea(){
   for (let i = 0; i < countriesList.childNodes.length; i++){
      const area = countriesList.childNodes[i].querySelector("#area");
      console.log(parseFloat(area.innerHTML.split(" ")[0]), parseFloat(filterByAreaMinInput.value), parseFloat(area.innerHTML.split(" ")[0]) >= parseFloat(filterByAreaMinInput.value), parseFloat(area.innerHTML.split(" ")[0]) <= parseFloat(filterByAreaMaxInput.value));
      if(!((parseFloat(area.innerHTML.split(" ")[0]) >= parseFloat(filterByAreaMinInput.value)) && (parseFloat(area.innerHTML.split(" ")[0]) <= parseFloat(filterByAreaMaxInput.value)))){
         hideCard(countriesList.childNodes[i]);
      }else{
         showCard(countriesList.childNodes[i]);
      }
   }
}

function showCards(){
      for (let i = 0; i < countriesList.childNodes.length; i++){
         if(countriesList.childNodes[i].firstChild.firstChild.innerHTML != searchByNameArea.value){
            showCard(countriesList.childNodes[i]);
         }
      }  
}

function showCard(countryCard){
   countryCard.style.display = "flex";
}

function hideCard(countryCard){
   countryCard.style.display = "none";
}


showAllCards.addEventListener('click', showCards)
showAllCards1.addEventListener('click', showCards)
searchByNameButton.addEventListener('click', onInputCountryName)
searchByNameArea.addEventListener('change', onInputCountryName)
filterByRegionButton.addEventListener('click', filterByRegion)
filterByAreaButton.addEventListener('click', filterByArea)


function searchInTranslations(i, v){
   let res = false;
   Object.values(countries[i].translations).forEach(element => {
      console.log((Object.values(element)[1].toLowerCase()), (v.toLowerCase()))
      if ((v.toLowerCase() == Object.values(element)[0].toLowerCase()) || (v.toLowerCase() == Object.values(element)[1].toLowerCase())){
         
         res = true;
         return
      }

   });

   return res;
}