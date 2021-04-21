let lastModified = document.lastModified;
document.querySelector("#dateModified").textContent = lastModified;

let year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;