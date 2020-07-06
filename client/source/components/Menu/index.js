import { Component } from '../Component.js';
import { template } from './template.hbs.js';

export class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const links = [
      {
        link: '.#/login',
        title: 'Login',
      },
      {
        link: '.#/registration',
        title: 'Registration',
      },
      {
        link: '.#/chat',
        title: 'Chat',
      },
      {
        link: '.#/settings',
        title: 'Settings',
      },
      {
        link: '.#/error',
        title: 'Error 500',
      },
    ];

    return this.renderTemplate(template, { links });
  }

  onMount() {
    const links = this.el.querySelectorAll('a');

    [...links].forEach((link) => {
      link.addEventListener('click', this.clickLink);
    });
  }

  clickLink = (e) => {
    if (e.target.href) {
      e.preventDefault();
      e.stopPropagation();

      const urlHash = new URL(e.target.href).hash;
      location.replace(urlHash);

      this.props.bindNewPage();

      // this.triggerEvent('newPage', { data: 'asd' }); // ???
    }
  };
}
