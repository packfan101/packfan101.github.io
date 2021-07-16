

const prevVisit = new Date(localStorage.getItem('lastVisit'));
const difference = date.getTime() - prevVisit.getTime();
const daysSinceVisit = difference / (1000 * 3600 * 24);

if ('lastVisit' in localStorage) {
    document.querySelector('#daysSinceVisit').innerHTML = `Welcome Back! It has been ${daysSinceVisit.toFixed(0)} days since your last visit`;
} else {
    document.querySelector('#daysSinceVisit').innerHTML = `It looks like this is your first visit to the gallery. Welcome to the site!`;
}




const storeVisit = storeDate();
 

function storeDate() {
      localStorage.setItem('lastVisit', date);
} 