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
                    <p class="contact-info">Banovačka 45, 33520 Slatina</p>
                    </div>
                    <div style="width: 70%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Banova%C4%8Dka%2045+(OPG%20Bo%C5%BEi%C4%87)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>

                    <div class="telefon">
                    <h3 class="contact-label">Telefon:</h3> 
                    <p class="contact-info">069/225-883</p>
                    </div>
                    <div class="email">
                    <h3 class="contact-label">Email:</h3> 
                    <p class="contact-info">kitakosalama@gmail.com</p>
                    </div>`;

  heroEl.append(lijevo, info);
  const mapDiv = document.createElement('div');
  mapDiv.className = 'mapDiv';
  mapDiv.innerHTML = `<div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Banova%C4%8Dka%2045+(OPG%20Bo%C5%BEi%C4%87)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>`;

  // info.appendChild(mapDiv);
}
