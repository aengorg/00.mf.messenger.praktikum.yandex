import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';

import {
  required,
  range,
  email,
  equalPasswords,
} from '../../utils/validationRules.js';

const fields = {
  emailInput: new Input({
    name: 'email',
    type: 'text',
    labelText: 'Email',
    rules: [required, email],
  }),
  loginInput: new Input({
    name: 'login',
    type: 'text',
    labelText: 'Login',
    rules: [required, (v) => range(v, 5)],
  }),
  passwordInput: new Input({
    name: 'password',
    type: 'password',
    labelText: 'Password',
    rules: [required, (v) => range(v, 8)],
  }),
  passwordComfirmInput: new Input({
    name: 'passwordComfirm',
    type: 'password',
    labelText: 'Password comfirm',
    rules: [required, (v) => range(v, 8)],
  }),
  buttonSubmit: new Button({
    text: 'Login',
    type: 'button',
  }),
};

export class SignupPage extends Component {
  errors: any;

  constructor(props = {}) {
    super({
      fields,
      title: 'Registration',
      link: {
        text: 'Login',
        url: '.#/login',
      },
      ...props,
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this.props, id: this.id });
  }

  // validation() {
  //   const passwords = this.children.filter(
  //     (filed) => filed instanceof Input && filed.props.type === 'password'
  //   );

  //   return equalPasswords(passwords[0].getValue(), passwords[1].getValue());
  // }

  // submit() {
  // const resValidation = this.validation();

  // console.log('resValidation', resValidation);

  // if (!resValidation) {
  //   const fields = this.children.filter((filed) => filed instanceof Input);
  //   console.log('fields', fields);

  //   if (fields.every((field) => field.isValid())) {
  //     const result = fields.reduce((acc, field) => {
  //       return {
  //         ...acc,
  //         [field.props.name]: field.getValue(),
  //       };
  //     }, {});

  //     console.log(result);

  //     // fields.forEach((field) => field.resetValue());
  //   }
  // } else {
  //   this.errors.push(resValidation);
  //   this.update(this.props);
  //   // ВСЁ ломает, так как компоненты пересоздаются
  //   // а не обновлять невозможно - не будет отображения ошибки
  // }
  // }

  // onMount() {
  //   const submit = this.el.querySelector('[type="submit"]');
  //   submit.addEventListener('click', (e) => this.submit());
  // }
}
