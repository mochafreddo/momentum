// Define the API key as a constant
const API_KEY = 'b1b35bba8b434a28a0be2a3e1071ae5b';

// Handle successful geolocation lookup
function onGeoOk(position) {
  // Destructure the position object to get latitude and longitude
  const { latitude, longitude } = position.coords;

  // Construct the API URL with template literals
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  // Fetch the weather data from the API and handle response
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Update weather and city elements in the HTML with fetched data
      const weatherElement = document.querySelector(
        '#weather span:first-child',
      );
      const cityElement = document.querySelector('#weather span:last-child');
      cityElement.innerText = data.name;
      weatherElement.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp,
      )}℃`;
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
