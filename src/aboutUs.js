'use strict';

export function aboutUs() {
  const content = document.getElementById('content');

  const heroEl = document.createElement('div');
  heroEl.className = 'hero';
  content.appendChild(heroEl);

  const lijevo = document.createElement('div');
  lijevo.className = 'lijevo';
  lijevo.classList.add('natpis');

  const natpis = document.createElement('h1');
  natpis.textContent = 'O nama';
  lijevo.appendChild(natpis);

  const desno = document.createElement('div');
  desno.className = 'desno';
  desno.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nemo eaque? Porro, sequi aliquam quam ipsa iusto accusantium a exercitationem perspiciatis tempora placeat, aperiam nisi error sunt nulla nobis pariatur?
  Consequuntur id culpa ducimus facilis magnam amet quam animi consequatur, repudiandae maxime quisquam natus blanditiis aspernatur molestias magni, rerum deleniti, vitae asperiores perspiciatis debitis. Dolorem, ea. Officiis veritatis corporis exercitationem.
  Quos molestias voluptas enim dignissimos blanditiis assumenda inventore ipsum atque maxime culpa reiciendis laboriosam repudiandae pariatur numquam corporis, quaerat et error ullam! Molestiae dolorum et dicta, veritatis tempora dolores id?
  Animi deserunt aspernatur blanditiis modi velit hic architecto obcaecati esse eius fugit, suscipit saepe itaque quod minima accusamus nostrum consequatur et aliquam. Nesciunt enim voluptas dicta tempora inventore minus maxime!
  `;

  heroEl.append(lijevo, desno);

  const menu = document.querySelector('.menu');
}
