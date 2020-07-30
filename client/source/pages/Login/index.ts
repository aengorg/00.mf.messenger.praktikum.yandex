import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';

// import { store } from '../../components/Input/index.js';

import { required, email, range } from '../../utils/validationRules.js';

const fields = {
  emailInput: new Input({
    name: 'email',
    type: 'text',
    labelText: 'Email',
    rules: [required, email],
    // value: '',
    // errors: [],
  }),
  passwordInput: new Input({
    name: 'password',
    type: 'password',
    labelText: 'Password',
    rules: [required, (v) => range(v, 8)],
    // value: '',
    // errors: [],
  }),
  buttonSubmit: new Button({
    text: 'Login',
    type: 'button',
  }),
};

export class LoginPage extends Component {
  vPass: string;
  vEmail: string;
  errForm: [];
  constructor(props = {}) {
    super({
      ...props,
      fields: fields,
      title: 'Login',
      link: {
        url: '.#signup',
        text: 'Registration',
      },
    });
    this.vEmail = '';
    this.vPass = '';
    this.errForm = [];
  }

  render() {
    return Handlebars.compile(template)({ ...this.props, id: this.id });
  }

  addEvents() {
    console.log('addEvents');

    fields.passwordInput
      .getElement()
      .addEventListener('input', (e) => this.handleChangePass(e));

    fields.emailInput
      .getElement()
      .addEventListener('input', (e) => this.handleChangeEmail(e));

    fields.buttonSubmit.getElement().addEventListener('click', (e) => {
      this.handleClickSubmit(e);
    });
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setProps({ title: 'bread' });
    // }, 2000);
    return true;
  }

  public handleClickSubmit(e) {
    // const fieldsarr = Object.keys(fields).filter(
    //   (filed) => filed instanceof Input
    // );

    // if (fieldsarr.every((field: any) => field.isValid())) {
    //   const result = fieldsarr.reduce((acc, field) => {
    //     return {
    //       ...acc,
    //       [field.props.name]: field.getValue(),
    //     };
    //   }, {});

    //   console.log(result);

    //   fieldsarr.forEach((field) => field.resetValue());
    // }
    const fieldsarr = fields.emailInput.isValid();
    const fieldsarr2 = fields.passwordInput.isValid();
    const allEr = [...fieldsarr, ...fieldsarr2];

    if (allEr.length > 0) {
      // this.setProps({ errForm: [fieldsarr, fieldsarr2] });
    } else {
      const res = {
        email: fields.emailInput.getValue(),
        password: fields.passwordInput.getValue(),
      };
      fields.emailInput.resetValue();
      fields.passwordInput.resetValue();

      return res;
    }
  }

  public handleChangeEmail = (e) => {
    this.vEmail = e.target.value;
  };

  public handleChangePass = (e) => {
    this.vPass = e.target.value;
  };
}
