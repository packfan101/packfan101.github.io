const businessjson = 'data/businesses.json';
const buttoncontainer = document.querySelector('.views');
const gridbutton = document.querySelector('.gridview');
const listbutton = document.querySelector('.listview');
const businessview = document.querySelector('.businesses');


fetch(businessjson)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];

    for (let i=0; i < businesses.length; i++) {
      let card = document.querySelector('.buscard');
      let h2 = document.createElement('h2');
      let description = document.createElement('p');
      let logo = document.createElement('img');
      let address = document.createElement('p');
      let url = document.createElement('a');
      let phone = document.createElement('p');
      

      h2.textContent = `${businesses[i].businessname}`;
      description.textContent = `${businesses[i].description}`;
      address.innerHTML = `${businesses[i].address}<br>${businesses[i].city},&nbsp${businesses[i].state}&nbsp;${businesses[i].zip}`;
      url.textContent = `Website`;
      phone.textContent = `${businesses[i].phone}`;

      description.setAttribute('class', "busdescription");
      address.setAttribute('class', "busaddress");
      phone.setAttribute('class', "busphone");

      card.appendChild(h2);
      card.appendChild(logo);
      card.appendChild(description);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(url);

      logo.setAttribute('src', businesses[i].logo);
      logo.setAttribute('alt', `${businesses[i].businessname} Logo`);
      logo.setAttribute('class', "logo");

      url.setAttribute('href', `${businesses[i].url}`);
      url.setAttribute('class', `busurl`);

      document.querySelector('div.businesses').appendChild(card);
    }
  })

var businesscard = document.querySelectorAll('.buscard');  
  
gridbutton.addEventListener('click', () => {
  businessview.classList.add('displaygrid');
  businessview.classList.add('centered');
  for (var i=0; i < businesscard.length; i++) {
    businesscard[i].classList.remove('displaylist');
  }
  
})

listbutton.addEventListener('click', () => {
  businessview.classList.remove('displaygrid');
  businessview.classList.remove('centered');
  for (var i=0; i < businesscard.length; i++) {
    businesscard[i].classList.add('displaylist');
  }
})