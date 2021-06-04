

const prevVisit = new Date(localStorage.getItem('lastVisit'));
const difference = date.getTime() - prevVisit.getTime();
const daysSinceVisit = difference / (1000 * 3600 * 24);

document.querySelector('#daysSinceVisit').innerHTML = daysSinceVisit.toFixed(0);

const storeVisit = storeDate();
 

function storeDate() {
    localStorage.setItem('lastVisit', date);
}