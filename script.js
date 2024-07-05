async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '32f4569f4e7034bd8511ab9839321acd';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === '404') {
            alert('City not found');
            return;
        }
        document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
