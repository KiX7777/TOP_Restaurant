'use strict';

export function createFooter() {
  const content = document.getElementById('content');

  const footerEl = document.createElement('footer');
  content.appendChild(footerEl);

  const footerText = document.createElement('p');
  footerText.className = 'footer';

  const date = new Date();
  const year = date.getFullYear();

  footerText.innerHTML = `&COPY; ${year}. </br> by KiX7777`;

  footerEl.appendChild(footerText);
}
