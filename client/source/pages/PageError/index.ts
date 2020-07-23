import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

export class ErrorPage extends Component {
  constructor(props = {}) {
    super(props);
  }

  // componentDidMount(oldProps: any): boolean {
  // setTimeout(() => {
  //   this.setProps({
  //     text: 'Login Page new2',
  //   });
  // }, 3000);
  //   return true;
  // }

  render() {
    return Handlebars.compile(template)(this.props);
  }
}
