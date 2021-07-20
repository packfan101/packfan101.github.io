const lat = document.querySelector('.weathsumhead').dataset["lat"];
const lon = document.querySelector('.weathsumhead').dataset["lon"];

const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=a72098a69d05bfe82520977236405f51`
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
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
    if (typeof jsObject.alerts !== 'undefined') {
      let h2 = document.createElement('h2');
      h2.textContent = `Weather Alerts for West Jordan`;
      document.querySelector('div.weatheralert').appendChild(h2);

      for (let i=0; i < jsObject.alerts.length; i++) {        
        let alert = document.createElement('ul');
        let event = document.createElement('li');
        let description = document.createElement('li');
        //let start = document.createElement('li');
        //let end = document.createElement('li');

        event.textContent = `${jsObject.alerts[i].event}`;
        description.textContent = `${jsObject.alerts[i].description}`; 
        //start.textContent = `Beginning: ${new Date(jsObject.alerts[i].start * 1000)}`;
        //end.textContent = `Ending: ${new Date(jsObject.alerts[i].end * 1000)}`;        

        alert.appendChild(event);
        alert.appendChild(description);
        //alert.appendChild(start);
        //alert.appendChild(end);
        alert.setAttribute('class', 'alert');
        
        document.querySelector('div.weatheralert').appendChild(alert);
      }
    }
    else {
      let h2 = document.createElement('h2');
      h2.textContent = `Weather Alerts for West Jordan`;
      document.querySelector('div.weatheralert').appendChild(h2);
      let alert = document.createElement('ul');
      let event = document.createElement('li');
      event.textContent = `No Current Weather Alerts`;
      alert.appendChild(event);
      document.querySelector('div.weatheralert').appendChild(alert);
    };
  });

const closebutton = document.querySelector('.closebutton');
const container = document.querySelector('.weatheralert');

closebutton.addEventListener('click', () => {
  container.classList.add('hidealert');
})

