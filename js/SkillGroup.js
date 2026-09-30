
import { Component } from './component.js';
import { Skill } from './Skill.js';
 
export class SkillGroup extends Component {
    #title;
    #variant;
    #skills;
 
    constructor({ title, variant = 'box', items }) {
        super();
        this.#title = title;
        this.#variant = variant;
        this.#skills = items.map(name => new Skill(name));
    }
 
    render() {
        const isPlain = this.#variant === 'plain';
 
        const group = this.createElement('div', {
            className: isPlain ? 'tool-box' : 'skills-box'
        });
        group.appendChild(this.createElement('h4', { text: this.#title }));
 
        const list = this.createElement('div', {
            className: isPlain ? 'tool-list' : 'skills-list'
        });
        this.#skills.forEach(skill => list.appendChild(skill.render()));
        group.appendChild(list);
 
        return group;
    }
}