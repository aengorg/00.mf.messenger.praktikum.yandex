import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { Box } from '../Box/index';
import { Button } from '../Button/index';
import { Input } from '../Input/index';

export class PageRegistration extends Component {
  render(props: any): string {
    const box = new Box();

    const buttonSubmit = new Button().render({
      text: 'Registration',
      type: 'submit',
    });

    const inputEmail = new Input().render({
      labelText: 'Email',
      type: 'text',
    });

    const inputLogin = new Input().render({
      labelText: 'Login',
      type: 'text',
    });

    const inputPassword = new Input().render({
      labelText: 'Password',
      type: 'password',
    });

    const inputConfirmPassword = new Input().render({
      labelText: 'Confirm password',
      type: 'password',
    });

    return box.render({
      slot: template({
        slots: [
          inputEmail,
          inputLogin,
          inputPassword,
          inputConfirmPassword,
          buttonSubmit,
        ],
        title: 'New account',
        link: {
          text: 'Login',
          url: './login',
        },
      }),
    });
  }
}
