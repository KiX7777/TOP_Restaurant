'use strict';

const date = new Date();
const year = date.getFullYear();
console.log(year);

const footer = document.querySelector('.footer');

footer.innerHTML = `&COPY; ${year}. </br> by KiX7777`;
