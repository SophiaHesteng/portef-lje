import { Component } from './Component.js';

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