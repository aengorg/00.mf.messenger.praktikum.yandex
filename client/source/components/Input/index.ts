import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { validation } from '../../utils/validation.js';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errors: [],
    };
  }

  render() {
    let error = '';
    if (this.state.errors) {
      error = this.state.errors.length ? 'input__error--show' : '';
    }

    const text = Handlebars.compile(template)({
      ...this.props,
      value: this.state.value,
      errors: this.state.errors,
      classes: {
        error: error, // 'input__error--show'
      },
      id: this.id,
    });
    // для отладки
    // console.log(text);
    return text;
  }

  isValid() {
    // заложено для валидации поля
    // this.errors = [];
    // const errs = validation(this.value, this.props.rules);
    // if (errs.length > 0) {
    //   this.errors = errs;
    //   this.setState({ errors: errs });
    // }
    // return this.errors;
  }

  getValue() {
    return this.state.value;
  }

  resetValue() {
    return (this.state.value = '');
  }

  addEvents() {
    if (this.getElement()) {
      this.getElement().addEventListener('input', (e: any) => {
        console.log('input');
        this.state.value = e.target.value;
      });

      this.getElement().addEventListener('blur', (e: any) => {
        // тест который не работает
        console.log('blur');
        this.setState({ errors: ['11111', '999999'] });
      });
    }
  }
}
