import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { validation } from '../../utils/validation.js';

export class Input extends Component {
  value: string = '';
  errors: string[] = [];

  constructor(props) {
    super(props);
  }

  render() {
    let error = '';
    if (this.errors) {
      console.log('show err');

      error = this.errors.length ? 'input__error--show' : '';
    }

    console.log(this.errors);

    return Handlebars.compile(template)({
      ...this.props,
      value: this.value,
      errors: this.errors,
      classes: {
        // error: 'input__error--show',
        error: error,
      },
      id: this.id,
    });
  }

  isValid() {
    this.errors = [];
    const errs = validation(this.value, this.props.rules);
    if (errs.length > 0) {
      this.errors = errs;
      this.setState({ errors: errs });
    }

    return this.errors;
  }

  getValue() {
    return this.value;
  }

  resetValue() {
    return (this.value = '');
  }

  addEvents() {
    this.getElement().addEventListener('input', (e: any) => {
      this.value = e.target.value;
    });

    this.getElement().addEventListener('blur', (e: any) => {
      this.isValid();
    });
  }
}
