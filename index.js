const svg = document.getElementById('svg2');

svg.addEventListener('click', function (event) {
    const countryCode = event.target.id;
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
});