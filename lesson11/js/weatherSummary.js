const lat = document.querySelector('#lat').textContent;
const lon = document.querySelector('#lon').textContent;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=a72098a69d05bfe82520977236405f51`;
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#currentcondition').textContent = jsObject.weather[0].description;
    document.querySelector('#currenttemp').textContent = jsObject.main.temp.toFixed(0);
    document.querySelector('#hightemp').textContent = jsObject.main.temp_max.toFixed(0);
    document.querySelector('#humidity').textContent = `${jsObject.main.humidity}%`;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;
    windchill();
  });


const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=a72098a69d05bfe82520977236405f51`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject2) => {
    let day = 1;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //reduce the list array to the five forecasts ... 40
    const fiveDayForecast = jsObject2.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));

    //Loop through each of the forecast days
    fiveDayForecast.forEach( x => {
      let d = new Date(x.dt_txt);
      document.querySelector(`#day${day}`).textContent = dayofweek[d.getDay()];
      document.querySelector(`#temp${day}`).textContent = x.main.temp.toFixed(0);
      const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '.png';
      const desc = x.weather[0].description;
      document.querySelector(`#weathericon${day}`).setAttribute('src', imagesrc);
      document.querySelector(`#weathericon${day}`).setAttribute('alt', desc);
      day++
    });
  });