import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { Box } from '../Box/index';
import { Button } from '../Button/index';
import { Input } from '../Input/index';

export class PageLogin extends Component {
  render(props: any): string {
    const box = new Box();

    const buttonSubmit = new Button().render({
      text: 'Login',
      type: 'submit',
    });

    const inputLogin = new Input().render({
      labelText: 'Login',
      type: 'text',
    });

    const inputPassword = new Input().render({
      labelText: 'Password',
      type: 'password',
    });

    return box.render({
      slot: template({
        slots: [inputLogin, inputPassword, buttonSubmit],
        title: 'Login',
        link: {
          text: 'New account',
          url: './registration',
        },
      }),
    });
  }
}
