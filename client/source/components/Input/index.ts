import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { InputOptions } from './types';

export class Input extends Component {
  // constructor(private options: InputOptions) {
  //   super();
  //   this.options = options;
  // }

  get input() {
    return this.domElement.querySelector('input');
  }

  render(props: any): string {
    return template(props);
  }

  onRender() {
    const { input } = this;

    console.log('onRender input');
    console.log(input);

    input.classList.add('asd');
    input.addEventListener('blur', this.handleBlur);
    input.addEventListener('click', this.handleClick);
  }

  handleBlur = () => {
    console.log('handleBlur');
  };

  handleFocus = () => {
    console.log('handleFocus');
  };

  handleClick = () => {
    console.log('handleClick');
  };

  handleChange = () => {
    console.log('handleChange');
  };
}
