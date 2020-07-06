import { Component } from '../Component.js';
import { template } from './template.hbs.js';

import { validation } from '../../utils/validation.js';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.value = '';
    this.errors = [];
  }

  render(props) {
    return this.renderTemplate(template, {
      ...props,
      value: this.value,
      errors: this.errors,
      classes: {
        error: this.errors.length ? 'input__error--show' : '',
      },
    });
  }

  onMount() {
    const input = this.el.querySelector('input');

    input.addEventListener('blur', this.handleBlur);
    input.addEventListener('click', this.handleClick);
    input.addEventListener('input', this.handleChange);
  }

  isValid = () => {
    this.errors = validation(this.value, this.props.rules);
    this.update(this.props);
    return this.errors.length === 0;
  };

  getValue = () => {
    return this.value;
  };

  resetValue = () => {
    this.value = '';
    this.update(this.props);
  };

  handleBlur = () => {
    if (this.props.rules) {
      this.errors = validation(this.value, this.props.rules);
      this.update(this.props);
    }
  };

  handleFocus = () => {
    // console.log('handleFocus');
  };

  handleClick = () => {
    // console.log('handleClick');
  };

  handleChange = (e) => {
    this.value = e.target.value;
  };
}
