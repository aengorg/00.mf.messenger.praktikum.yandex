import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

export class Button extends Component {
  render(props: any): any {
    return this.renderTemplate(template, props);
  }

  onMount() {
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
}
