import { ScrollSpy } from './ScrollSpy.js';
import { ProjectList } from './ProjectList.js';
import { SkillList } from './SkillList.js';
import { CvLink, cv } from './CvLink.js';
import { projects } from './projects.js';
import { skillGroups } from './skills.js';
 
new ScrollSpy(document.querySelector('header nav')).init();
new ProjectList(document.querySelector('.projects'), projects).render();
new SkillList(document.querySelector('.skills-container'), skillGroups).render();
document.querySelector('.cv-slot').appendChild(new CvLink(cv).render());