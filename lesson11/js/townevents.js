const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];

        if (document.querySelector('.townname').textContent == 'Preston Idaho') {
            for (let i=0; i < towns.length; i++) { 
                if (towns[i].name == 'Preston') {
                    let article = document.createElement('article');
                    let h2 = document.createElement('h2');
                    h2.textContent = `Upcoming Events!!`;
                    article.appendChild(h2);
                    for (let j=0; j < towns[i].events.length; j++ ) {
                        let event = document.createElement('p');
                        event.textContent = towns[i].events[j];
                        article.appendChild(event);
                    }    
                    document.querySelector('.prestoneventsdiv').appendChild(article);            
        }}}
        else if (document.querySelector('.townname').textContent == 'Soda Springs Idaho') {
            for (let i=0; i < towns.length; i++) {    
                if (towns[i].name == 'Soda Springs') {
                    let article = document.createElement('article');
                    let h2 = document.createElement('h2');
                    h2.textContent = `Upcoming Events!!`;
                    article.appendChild(h2);
                    for (let j=0; j < towns[i].events.length; j++ ) {
                        let event = document.createElement('p');
                        event.textContent = towns[i].events[j];
                        article.appendChild(event);
                    }    
                    document.querySelector('.sodaspringseventsdiv').appendChild(article);
                
            }}}
            
        else if (document.querySelector('.townname').textContent == 'Fish Haven Idaho') {
        
            for (let i=0; i < towns.length; i++) {    
                if (towns[i].name == 'Fish Haven') {
                    let article = document.createElement('article');
                    let h2 = document.createElement('h2');
                    h2.textContent = `Upcoming Events!!`;
                    article.appendChild(h2);
                    for (let j=0; j < towns[i].events.length; j++ ) {
                        let event = document.createElement('p');
                        event.textContent = towns[i].events[j];
                        article.appendChild(event);
                    }    
                    document.querySelector('.fishhaveneventsdiv').appendChild(article);
                    
        }}}
            
        
    })