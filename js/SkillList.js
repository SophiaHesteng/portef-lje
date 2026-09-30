import { Component } from './Component.js';
import { SkillGroup } from './SkillGroup.js';
 
export class SkillList extends Component {
    #container;
    #groups;
 
    constructor(container, groups) {
        super();
        this.#container = container;
        this.#groups = groups;
    }
 
    render() {
        const groups = this.#groups.map(group => new SkillGroup(group).render());
        this.#container.replaceChildren(...groups);
    }
}