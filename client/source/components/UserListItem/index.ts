import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

export class UserItem extends Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return Handlebars.compile(template)({ ...this.props, id: this.id });
  }
}
