'use strict';

export function createTabs() {
  const content = document.getElementById('content');

  const header = document.createElement('header');
  content.appendChild(header);

  const navBar = document.createElement('nav');
  header.appendChild(navBar);

  const unList = document.createElement('ul');
  navBar.appendChild(unList);

  const tab0 = document.createElement('a');
  tab0.setAttribute('href', '#');
  tab0.className = 'tab';
  tab0.classList.add('home');
  tab0.textContent = 'HOME';
  const tab1 = document.createElement('a');
  tab1.setAttribute('href', '#');
  tab1.className = 'tab';
  tab1.classList.add('about');
  tab1.textContent = 'ABOUT';
  const tab2 = document.createElement('a');
  tab2.setAttribute('href', '#');
  tab2.className = 'tab';
  tab2.classList.add('menu');
  tab2.textContent = 'MENU';
  const tab3 = document.createElement('a');
  tab3.setAttribute('href', '#');
  tab3.className = 'tab';
  tab3.classList.add('contact');
  tab3.textContent = 'CONTACT';

  unList.append(tab0, tab1, tab2, tab3);
}
