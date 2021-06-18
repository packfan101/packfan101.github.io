const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];

        
     
    for (let i=0; i < towns.length; i++) { 
        if (towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven' || towns[i].name == 'Preston') {
            let article = document.createElement('article');
            let card = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');
    
            h2.textContent = `${towns[i].name}`;
            motto.textContent = `${towns[i].motto}`;
            founded.textContent = `Year Founded: ${towns[i].yearFounded}`;
            population.textContent = `Population: ${towns[i].currentPopulation}`;
            rainfall.textContent = `Annual Rainfall: ${towns[i].averageRainfall}`;

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rainfall);
            article.appendChild(card);
            article.appendChild(image);

            founded.setAttribute('class', 'founded');
            population.setAttribute('class', 'population');
            rainfall.setAttribute('class', 'rainfall');
            image.setAttribute('class', 'homeImage');
            image.setAttribute('src', `images/${towns[i].photo}`);
            image.setAttribute('alt', `Mountain scenery near ${towns[i].name}`);

            document.querySelector('section.cards').appendChild(article);
        }
    }
    })