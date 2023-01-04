'use strict';

import { createFooter as footer } from './footer.js';
import { createTabs as tabs } from './tabs.js';
import { createHero as hero } from './hero.js';
import { aboutUs } from './aboutUs.js';
import { showMenu } from './menu.js';

export function init() {
  tabs();
  hero();
  // aboutUs();
  // showMenu();
  footer();

  const about = document.querySelector('.about');
  const menu = document.querySelector('.menu');
  const contact = document.querySelector('.contact');
  const content = document.getElementById('content');

  // about.addEventListener('click', function (e) {
  //   console.log(e);
  //   content.textContent = '';
  //   tabs();
  //   aboutUs();
  //   footer();
  // });

  // menu.addEventListener('click', function (e) {
  //   console.log(e);
  //   content.textContent = '';
  //   tabs();
  //   showMenu();
  //   footer();
  // });
}
