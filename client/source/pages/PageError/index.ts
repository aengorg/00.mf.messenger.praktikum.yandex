import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

export class ErrorPage extends Component {
  constructor(props?: any) {
    super({
      text: 'Login Page22',
    });
  }

  componentDidMount(oldProps: any): boolean {
    setTimeout(() => {
      this.setProps({
        text: 'Login Page new2',
      });
    }, 3000);
    return true;
  }

  render() {
    return Handlebars.compile(template)(this.props);
  }
}
