'use strict';

export function showMenu() {
  const content = document.getElementById('content');

  const heroEl = document.createElement('div');
  heroEl.className = 'hero';
  content.appendChild(heroEl);

  const lijevo = document.createElement('div');
  lijevo.className = 'lijevo';
  lijevo.classList.add('natpis');

  const natpis = document.createElement('h1');
  natpis.textContent = 'Menu';
  lijevo.appendChild(natpis);

  const meni = document.createElement('div');
  meni.className = 'meni';

  const slikaMenu = document.createElement('img');
  slikaMenu.setAttribute('src', 'meni.webp');
  slikaMenu.setAttribute('alt', 'slika menija');
  meni.appendChild(slikaMenu);

  heroEl.append(lijevo, meni);
}
