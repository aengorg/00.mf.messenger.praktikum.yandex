import { Component } from '../Component.js';
import { template } from './template.hbs.js';

import { Menu } from '../Menu/index.js';
import { PageError } from '../PageError/index.js';
import { PageLogin } from '../PageLogin/index.js';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let page = {
      component: null,
      props: null,
    };

    switch (window.location.hash) {
      case '#/login':
        page = {
          component: PageLogin,
          props: {},
        };
        break;

      case '#/registration':
        page = {
          component: PageError,
          props: {
            code: 'В процессе создания',
            text: 'registration',
          },
        };
        break;

      case '#/chat':
        page = {
          component: PageError,
          props: {
            code: 'В процессе создания',
            text: 'chat',
          },
        };
        break;

      case '#/settings':
        page = {
          component: PageError,
          props: {
            code: 'В процессе создания',
            text: 'settings',
          },
        };
        break;

      case '#/error':
        page = {
          component: PageError,
          props: {
            code: '500',
            text: 'server error',
            linkText: 'Go to home',
            link: '/#/',
          },
        };
        break;

      default:
        page = {
          component: PageError,
          props: {
            code: '404',
            text: 'not found',
            linkText: 'Go to home',
            link: '/#/',
          },
        };
        break;
    }

    return this.renderTemplate(template, {
      parent: this,
      Menu: {
        component: Menu,
        props: {
          bindNewPage: this.update.bind(this),
        },
      },
      Page: page,
    });
  }

  onMount() {
    // console.log('init addEventListener');
    // this.el.addEventListener('newPage', (e) => console.log(e));
  }
}
