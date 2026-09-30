import { Component } from './component.js';

export class Skill extends Component {
    #name;
 
    constructor(name) {
        super();
        this.#name = name;
    }
 
    render() {
        return this.createElement('p', { text: this.#name });
    }
}