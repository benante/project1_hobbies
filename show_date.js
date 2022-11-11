const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; // because months are counted from 0 to 11
let year = date.getFullYear();

let today = `${day}/${month}/${year}`;

document.getElementById("date").innerHTML = today;

