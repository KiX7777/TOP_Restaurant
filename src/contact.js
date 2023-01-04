'use strict';

export function showContact() {
  const content = document.getElementById('content');

  const heroEl = document.createElement('div');
  heroEl.className = 'hero';
  content.appendChild(heroEl);

  const lijevo = document.createElement('div');
  lijevo.className = 'lijevo';
  lijevo.classList.add('natpis');
  lijevo.classList.add('kakodonas');

  const natpis = document.createElement('h1');
  natpis.textContent = 'Kako do nas?';
  lijevo.appendChild(natpis);

  const info = document.createElement('div');
  info.className = 'info';
  info.innerHTML = `<div class="adresa">
                    <h3 class="contact-label">Adresa:</h3> 
                    <p class="contact-info">Jovana Jovanovića 33</p>
                    </div>
                    <div class="telefon">
                    <h3 class="contact-label">Telefon:</h3> 
                    <p class="contact-info">069/225-883</p>
                    </div>
                    <div class="email">
                    <h3 class="contact-label">Email:</h3> 
                    <p class="contact-info">kitakosalama@gmail.com</p>
                    </div>`;

  heroEl.append(lijevo, info);
}
