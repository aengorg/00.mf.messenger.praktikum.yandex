import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { Box } from '../Box/index';
import { Button } from '../Button/index';
import { Input } from '../Input/index';
import { AvatarLoader } from '../AvatarLoader/index';

export class PageSettings extends Component {
  render(props: any): string {
    const box = new Box();

    const buttonSubmit = new Button().render({
      text: 'Save',
      type: 'submit',
    });

    const avatarLoader = new AvatarLoader().render({
      text: 'Edit avatar',
    });

    const buttonLogout = new Button().render({
      text: 'Logout',
      type: 'button',
    });

    const inputName = new Input().render({
      labelText: 'Name',
      type: 'text',
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
          avatarLoader,
          inputEmail,
          inputName,
          inputLogin,
          inputPassword,
          inputConfirmPassword,
          buttonSubmit,
        ],
        buttonLogout: buttonLogout,
        title: 'Settings',
      }),
    });
  }
}
