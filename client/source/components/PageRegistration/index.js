import { Component } from '../Component.js';
import { template } from './template.hbs.js';

import { Button } from '../Button/index.js';
import { Input } from '../Input/index.js';

import {
  required,
  range,
  email,
  equalPasswords,
} from '../../utils/validationRules.js';

export class PageRegistration extends Component {
  constructor(props) {
    super(props);

    this.errors = [];

    this.fields = [
      {
        component: Input,
        props: {
          name: 'email',
          type: 'text',
          labelText: 'Email',
          rules: [required, email],
        },
      },
      {
        component: Input,
        props: {
          name: 'login',
          type: 'text',
          labelText: 'Login',
          rules: [required, (v) => range(v, 5)],
        },
      },
      {
        component: Input,
        props: {
          name: 'password',
          type: 'password',
          labelText: 'Password',
          rules: [required, (v) => range(v, 8)],
        },
      },
      {
        component: Input,
        props: {
          name: 'passwordComfirm',
          type: 'password',
          labelText: 'Password comfirm',
          rules: [required, (v) => range(v, 8)],
        },
      },
      {
        component: Button,
        props: {
          text: 'Login',
          type: 'submit',
        },
      },
    ].map((v) => {
      v.parent = this;
      return v;
    });
  }

  render(props) {
    return this.renderTemplate(template, {
      fields: this.fields,
      title: 'Registration',
      link: {
        text: 'Login',
        url: '.#/login',
      },
      ...props,
    });
  }

  validation() {
    const passwords = this.children.filter(
      (filed) => filed instanceof Input && filed.props.type === 'password'
    );

    return equalPasswords(passwords[0].getValue(), passwords[1].getValue());
  }

  onMount() {
    const submit = this.el.querySelector('[type="submit"]');

    submit.addEventListener('click', (e) => {
      const resValidation = this.validation();

      if (!resValidation) {
        const fields = this.children.filter((filed) => filed instanceof Input);

        if (fields.every((field) => field.isValid())) {
          const result = fields.reduce((acc, field) => {
            return {
              ...acc,
              [field.props.name]: field.getValue(),
            };
          }, {});

          console.log(result);

          fields.forEach((field) => field.resetValue());
        }
      } else {
        this.errors.push(resValidation);
        // this.update(this.props);
        // ВСЁ ломает, так как компоненты пересоздаются
        // а не обновлять невозможно - не будет отображения ошибки
      }
    });
  }
}
