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

  const h3 = document.createElement('h3');
  h3.className = 'kategorijaJela';

  const nazivKategorije = document.createElement('p');
  nazivKategorije.className = 'nazivKategorije';
  nazivKategorije.textContent = 'Pizze';

  const jelo = document.createElement('div');
  jelo.className = 'jelo';

  const nazivJela1 = document.createElement('p');
  nazivJela1.className = 'nazivJela';
  nazivJela1.textContent = 'Capricciosa';
  const nazivJela2 = document.createElement('p');
  nazivJela2.className = 'nazivJela';
  nazivJela2.textContent = 'Margherita';
  const nazivJela3 = document.createElement('p');
  nazivJela3.className = 'nazivJela';
  nazivJela3.textContent = 'Quattro formaggi';
  const nazivJela4 = document.createElement('p');
  nazivJela4.className = 'nazivJela';
  nazivJela4.textContent = 'Šokačka';

  meni.appendChild(h3);
  h3.append(nazivKategorije, jelo);

  const opisJela = document.createElement('p');
  opisJela.className = 'opisJela';
  opisJela.textContent =
    '(umak od rajčice, mix gouda/mozzarella, šunka, gljive, origano)';

  const opisJela2 = document.createElement('p');
  opisJela2.className = 'opisJela';
  opisJela2.textContent =
    '(umak od rajčice, mix gouda/mozzarella,mozzarella fior di latte,bosiljak)  ';

  const opisJela3 = document.createElement('p');
  opisJela3.className = 'opisJela';
  opisJela3.textContent =
    '(umak od rajčice,gouda/mozzarella mix,mozzarella fior di latte,gorgonzola)';
  const opisJela4 = document.createElement('p');
  opisJela4.className = 'opisJela';
  opisJela4.textContent =
    '(umak od rajčice, mix gouda/mozzarella, suha pečenica, kulen seka, dimljena slanina, jaje, vrhnje)';
  jelo.append(
    nazivJela1,
    opisJela,
    nazivJela2,
    opisJela2,
    nazivJela3,
    opisJela3,
    nazivJela4,
    opisJela4
  );
  heroEl.append(lijevo, meni);
}
