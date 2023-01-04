'use strict';

import { createFooter as footer } from './footer.js';
import { createTabs as tabs } from './tabs.js';
import { createHero as hero } from './hero.js';

export function init() {
  tabs();
  hero();
  footer();
}
