import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';
import { router } from '../../classes/Router/Router.js';

export class Menu extends Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    const links = [
      {
        link: '.#login',
        title: 'Login',
      },
      {
        link: '.#signup',
        title: 'Registration',
      },
      {
        link: '.#chat',
        title: 'Chat',
      },
      {
        link: '.#settings',
        title: 'Settings',
      },
      {
        link: '.#error',
        title: 'Error 500',
      },
      {
        link: '.#ui',
        title: 'UI',
      },
    ];

    return Handlebars.compile(template)({
      ...this.props,
      links,
      id: this.id,
    });
  }

  componentDidMount(oldProps: any): boolean {
    const links = this.element.querySelectorAll('a');

    [...links].forEach((link) => {
      link.addEventListener('click', this.clickLink);
    });
    return true;
  }

  clickLink = (e) => {
    if (e.target.href) {
      e.preventDefault();
      e.stopPropagation();
      router.go(new URL(e.target.href).hash);
    }
  };
}
