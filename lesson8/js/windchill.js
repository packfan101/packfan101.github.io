const wind = document.querySelector('#windspeed').innerHTML;
const currenttemp = document.querySelector('#currenttemp').innerHTML;

if(wind >3 && currenttemp <= 50) {
    const chill = ((35.74 + (0.6215 * currenttemp)) - (35.75 * (Math.pow(wind,0.16))) + (0.4275 * currenttemp * (Math.pow(wind, 0.16)))).toFixed(0);

    document.querySelector('#windchill').innerHTML = chill;
}
else{
    document.querySelector('#windchill').innerHTML = "N/A";
}