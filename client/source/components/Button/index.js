import { Component } from '../Component.js';
import { template } from './template.hbs.js';

export class Button extends Component {
  render(props) {
    return this.renderTemplate(template, props);
  }

  onMount() {
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
}
