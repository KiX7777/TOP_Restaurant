'use strict';

import { renderHome } from './home.js';
import { createTabs as tabs } from './tabs.js';
import { createFooter as footer } from './footer.js';
import { showMenu } from './menu.js';
import { aboutUs } from './aboutUs.js';
import { showContact } from './contact.js';

const content = document.querySelector('#content');
function reset() {
  content.innerHTML = '';
}

const aboutTab = document.querySelector('.about');

function home() {
  reset();
  tabs();
  renderHome();
  footer();
}
function menu() {
  reset();
  tabs();
  showMenu();
  footer();
}
function about() {
  reset();
  tabs();
  aboutUs();
  footer();
}
function contact() {
  reset();
  tabs();
  showContact();
  footer();
}

home();

document.addEventListener('click', (e) => {
  const tab = e.target.classList.value;
  switch (tab) {
    case 'tab home':
      home();
      break;
    case 'tab about':
      about();
      break;
    case 'tab menu':
      menu();
      break;
    case 'tab contact':
      contact();
      break;
  }
});
