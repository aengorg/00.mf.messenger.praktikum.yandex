import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

export class PageError extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return this.renderTemplate(template, props);
  }
}
