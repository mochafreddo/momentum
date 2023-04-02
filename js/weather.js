// Define the API key as a constant
const API_KEY = 'b1b35bba8b434a28a0be2a3e1071ae5b';

// Handle successful geolocation lookup
function onGeoOk(position) {
  // Extract latitude and longitude from the goeloaction coordinates
  const { latitude: lat, longitude: lon } = position.coords;

  // Construct the API URL using the coordinates and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // Fetch the weather data from the API using the contructed URL
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Update the weather and city elements in the HTML with the fetched data
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
    .catch((error) => {
      // Handle any errors that occur during the API fetch
      console.error('Error fetching weather data: ', error);
      alert('Error fetching weather data. Please try again later.');
    });
}

// Handle geolocation errors
function onGeoError() {
  alert("Can't find your location. No weather data for you.");
}

// Call the geolocation API to get the user's current position
if (localStorage.getItem('username') !== null) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
