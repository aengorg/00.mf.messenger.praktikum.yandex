import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { AvatarLoader } from '../../components/AvatarLoader/index.js';

import {
  required,
  range,
  email,
  equalPasswords,
} from '../../utils/validationRules.js';

const fields = {
  ava: new AvatarLoader(),
  nameInput: new Input({
    name: 'name',
    type: 'text',
    labelText: 'Username',
    rules: [required],
  }),
  loginInput: new Input({
    name: 'login',
    type: 'text',
    labelText: 'Login',
    rules: [required, (v) => range(v, 5)],
  }),
  emailInput: new Input({
    name: 'email',
    type: 'text',
    labelText: 'Email',
    rules: [required, email],
  }),
  oldPasswordInput: new Input({
    name: 'oldPassword',
    type: 'password',
    labelText: 'Old password',
    rules: [required, (v) => range(v, 8)],
  }),
  newPasswordInput: new Input({
    name: 'newPassword',
    type: 'password',
    labelText: 'New password',
    rules: [required, (v) => range(v, 8)],
  }),
  newPasswordComfirmInput: new Input({
    name: 'newPasswordComfirm',
    type: 'password',
    labelText: 'New password comfirm',
    rules: [required, (v) => range(v, 8)],
  }),
  buttonSubmit: new Button({
    text: 'Save settings',
    type: 'button',
  }),
};

export class SettingsPage extends Component {
  errors: any;

  constructor(props = {}) {
    super({
      fields,
      title: 'Settings',
      ...props,
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this.props, id: this.id });
  }
}
