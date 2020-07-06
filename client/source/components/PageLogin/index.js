import { Component } from '../Component.js';
import { template } from './template.hbs.js';

import { Button } from '../Button/index.js';
import { Input } from '../Input/index.js';

import { required, range, email } from '../../utils/validationRules.js';

export class PageLogin extends Component {
  constructor(props) {
    super(props);

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
          name: 'password',
          type: 'password',
          labelText: 'Password',
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
      title: 'Login',
      link: {
        text: 'New account',
        url: '.#/registration',
      },
      ...props,
    });
  }

  onMount() {
    const submit = this.el.querySelector('[type="submit"]');

    submit.addEventListener('click', (e) => {
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
    });
  }
}
