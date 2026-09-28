import { ScrollSpy } from './components.js';

new ScrollSpy(document.querySelector('nav')).init();

import { projects } from './projects.js';
import { ProjectList } from './ProjectList.js';

new ProjectList(document.querySelector('.projects'), projects).render();