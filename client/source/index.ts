declare global {
  const Handlebars;
}
import { Menu } from './components/Menu/index.js';
import { ErrorPage } from './pages/PageError/index.js';

import { store } from './store/index.js';
import { router } from './classes/Router/Router.js';

const rootEl = document.querySelector('#app');
const menuEl = document.querySelector('#menu');

const menu = new Menu();
menu.mount(menuEl);

router
  .use('', new ErrorPage({ text: 'root' }))
  .use('login', new ErrorPage({ text: 'login' }))
  .use('1', new ErrorPage({ text: '1' }))
  .use('2', new ErrorPage({ text: '2' }))
  .use('3', new ErrorPage({ text: '3' }))
  .use('4', new ErrorPage({ text: '4' }))
  .default(
    'error404',
    new ErrorPage({
      code: '404',
      text: 'not found',
      link: '#',
      linkText: 'Go to home',
    })
  )
  .start(rootEl);
