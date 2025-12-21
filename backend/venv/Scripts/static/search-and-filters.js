const searchByNameArea = document.getElementById("searchByName")


function OnInputCountryName(){
   alert(searchByNameArea.value)
}



searchByNameArea.addEventListener('change', OnInputCountryName)
