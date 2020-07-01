import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { PageError } from '../PageError/index';
import { PageLogin } from '../PageLogin/index';
import { PageRegistration } from '../PageRegistration/index';
import { PageSettings } from '../PageSettings/index';

import { DOMEvent } from '../../types';

export class App extends Component {
  render(props: any): string {
    return template(props);
  }

  onRender() {
    const { domElement } = this;
    domElement.addEventListener('click', this.clickHendler);
  }

  clickHendler = (e: DOMEvent<HTMLLinkElement>): void => {
    if (e.target.href) {
      e.preventDefault();
      e.stopPropagation();
      const urlPath = new URL(e.target.href).pathname;
      location.replace(`#${urlPath}`);
      this.reloadPage(urlPath);
    }
  };

  reloadPage = (urlPath: string): void => {
    const slot = this.getSlot();

    const pageError = new PageError();
    const pageLogin = new PageLogin();
    const pageRegistration = new PageRegistration();
    const pageSettings = new PageSettings();

    switch (urlPath) {
      case '/login':
        pageLogin.create({}, slot);
        break;

      case '/registration':
        pageRegistration.create({}, slot);
        break;

      case '/chat':
        slot.innerHTML = '';
        break;

      case '/settings':
        pageSettings.create({}, slot);
        break;

      case '/error':
        pageError.create(
          {
            code: '500',
            text: 'server error',
            linkText: 'Go to home',
            link: '/#/',
          },
          slot
        );
        break;

      default:
        pageError.create(
          {
            code: '404',
            text: 'not found',
            linkText: 'Go to home',
            link: '/#/',
          },
          slot
        );
        break;
    }
  };
}
