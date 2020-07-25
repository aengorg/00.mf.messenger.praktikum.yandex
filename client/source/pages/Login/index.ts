import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';

import { required, email, range } from '../../utils/validationRules.js';

const fields = {
  passwordInput: new Input({
    name: 'password',
    type: 'password',
    labelText: 'Password',
    rules: [required, (v) => range(v, 8)],
  }),
  emailInput: new Input({
    name: 'email',
    type: 'text',
    labelText: 'Email',
    rules: [required, email],
  }),
  buttonSubmit: new Button({
    text: 'Login',
    type: 'button',
  }),
};

export class LoginPage extends Component {
  constructor(props = {}) {
    super({
      ...props,
      fields,
      link: {
        url: '.#signup',
        text: 'Registration',
      },
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this.props, id: this.id });
  }

  // componentDidMount() {
  //   const buttonSubmit = fields.buttonSubmit;
  //   const el = buttonSubmit.element.querySelector(
  //     `[data-key="${buttonSubmit.id}"]`
  //   );
  //   console.log(el);

  //   el.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     console.log(e);
  //   });

  //   return true;
  // }
}
