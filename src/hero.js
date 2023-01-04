'use strict';

export function createHero() {
  const content = document.getElementById('content');

  const heroEl = document.createElement('div');
  heroEl.className = 'hero';
  content.appendChild(heroEl);

  const natpisDiv = document.createElement('div');
  natpisDiv.className = 'natpis';

  const natpis = document.createElement('h1');
  natpis.textContent = 'Restoran Bucko';
  natpisDiv.appendChild(natpis);

  const slikaDiv = document.createElement('div');
  slikaDiv.className = 'slika';
  heroEl.append(natpisDiv, slikaDiv);

  const slika = document.createElement('img');
  slika.setAttribute('src', 'pizza.svg');
  slika.setAttribute('alt', 'logo restorana');
  slikaDiv.appendChild(slika);
}
