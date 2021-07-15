const lat = document.querySelector('.weathsumhead').dataset["lat"];
const lon = document.querySelector('.weathsumhead').dataset["lon"];

const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=a72098a69d05bfe82520977236405f51`
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#currentcondition').textContent = jsObject.current.weather[0].main;
    document.querySelector('#currenttemp').textContent = jsObject.current.temp.toFixed(0);
    document.querySelector('#hightemp').textContent = jsObject.daily[0].temp.max.toFixed(0);
    document.querySelector('#humidity').textContent = `${jsObject.current.humidity}%`;
    let day = 1;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i=1; i < 4; i++) {
      let d = new Date(jsObject.daily[i].dt * 1000);
      document.querySelector(`#day${day}`).textContent = dayofweek[d.getDay()];
      document.querySelector(`#temp${day}`).textContent = jsObject.daily[i].temp.max.toFixed(0);
      const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[i].weather[0].icon + '.png';
      const desc = jsObject.daily[i].weather[0].description;
      document.querySelector(`#weathericon${day}`).setAttribute('src', imagesrc);
      document.querySelector(`#weathericon${day}`).setAttribute('alt', desc);
      day++
    }
  });

