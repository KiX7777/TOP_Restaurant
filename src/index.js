'use strict';

import { aboutUs } from './aboutUs.js';
import { createFooter } from './footer.js';
import { init } from './main.js';
import { showMenu } from './menu.js';
import { createTabs } from './tabs.js';

init();

const menu = document.querySelector('.menu');

menu.addEventListener('click', function (e) {
  console.log(e);
  // init();
  content.textContent = '';
  createTabs();
  showMenu();

  const about = document.querySelector('.about');
  about.addEventListener('click', function (e) {
    console.log(e);
    content.textContent = '';
    createTabs();
    aboutUs();
    createFooter();
  });
});

const about = document.querySelector('.about');
about.addEventListener('click', function (e) {
  console.log(e);
  content.textContent = '';
  createTabs();
  aboutUs();
  createFooter();

  const menu = document.querySelector('.menu');

  menu.addEventListener('click', function (e) {
    console.log(e);
    // init();
    content.textContent = '';
    createTabs();
    showMenu();
  });
});
