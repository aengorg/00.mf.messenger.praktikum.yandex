import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

// import { Menu } from '../Menu/index.js';

// import { PageError } from '../../pages/PageError/index.js';
// import { PageLogin } from '../../pages/PageLogin/index.js';
// import { PageRegistration } from '../../pages/PageRegistration/index.js';

export class App extends Component {
  constructor(props, meta, children) {
    //props, meta, children
    super(props, meta, children);
  }

  render() {
    return Handlebars.compile(template)({ ...this.props, id: this.id });
  }

  onMounted() {
    this.el.addEventListener('click', (e) => {
      this.props.text = e.target;
    });
  }

  onDestroyed() {
    console.log(this);
  }

  // render() {
  //   let page = {
  //     component: null,
  //     props: null,
  //   };
  //   switch (window.location.hash) {
  //     case '#/login':
  //       page = {
  //         component: PageLogin,
  //         props: {},
  //       };
  //       break;
  //     case '#/registration':
  //       page = {
  //         component: PageRegistration,
  //         props: {},
  //       };
  //       break;
  //     case '#/chat':
  //       page = {
  //         component: PageError,
  //         props: {
  //           code: 'В процессе создания',
  //           text: 'chat',
  //         },
  //       };
  //       break;
  //     case '#/settings':
  //       page = {
  //         component: PageError,
  //         props: {
  //           code: 'В процессе создания',
  //           text: 'settings',
  //         },
  //       };
  //       break;
  //     case '#/error':
  //       page = {
  //         component: PageError,
  //         props: {
  //           code: '500',
  //           text: 'server error',
  //           linkText: 'Go to home',
  //           link: '/#/',
  //         },
  //       };
  //       break;
  //     default:
  //       page = {
  //         component: PageError,
  //         props: {
  //           code: '404',
  //           text: 'not found',
  //           linkText: 'Go to home',
  //           link: '/#/',
  //         },
  //       };
  //       break;
  //   }
  //   return this.renderTemplate(template, {
  //     parent: this,
  //     Menu: {
  //       component: Menu,
  //       props: {
  //         bindNewPage: this.update.bind(this),
  //       },
  //     },
  //     Page: page,
  //   });
  // }
  // onMount() {
  //   // console.log('init addEventListener');
  //   // this.el.addEventListener('newPage', (e) => console.log(e));
  // }
}
