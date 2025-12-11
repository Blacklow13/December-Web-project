export async function getCountriesList(){
    return await fetch('/frontend/display-countries/countries.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


