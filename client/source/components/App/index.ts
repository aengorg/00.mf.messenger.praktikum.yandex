import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import '../Box/style.css';

import { PageError } from '../PageError/index';
import { PageLogin } from '../PageLogin/index';

import { DOMEvent } from '../../types';

export class App extends Component {
  render(props: any): string {
    return template(props);
  }

  onRender() {
    const { domElement } = this;
    domElement.querySelector('.nav').addEventListener('click', this.goPage);
  }

  goPage = (e: DOMEvent<HTMLLinkElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    const urlPath = new URL(e.target.href).pathname;
    location.replace(`#${urlPath}`);

    const { domElement } = this;
    const slot = domElement.querySelector('[ref=slot]');

    switch (urlPath) {
      case '/login':
        const pageLogin = new PageLogin();
        pageLogin.renderTo(slot, null);
        break;
      case '/registration':
        break;

      case '/chat':
        break;

      case '/setting':
        break;

      case '/error':
        const pageError = new PageError();
        pageError.renderTo(slot, {
          code: '500',
          text: 'server error',
          linkText: 'Go to home',
          link: '/#/',
        });
        break;

      default:
        pageError.renderTo(slot, {
          code: '404',
          text: 'not found',
          linkText: 'Go to home',
          link: '/#/',
        });
        break;
    }
  };
}
