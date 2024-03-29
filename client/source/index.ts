declare global {
  const Handlebars;
}
import './helpers/Component.js';

import { Menu } from './components/Menu/index.js';
import { ErrorPage } from './pages/Error/index.js';
import { TestPage } from './pages/Test/index.js';
import { LoginPage } from './pages/Login/index.js';
import { SignupPage } from './pages/Signup/index.js';
import { SettingsPage } from './pages/Settings/index.js';

import { store } from './store/index.js';
import { router } from './classes/Router/Router.js';
import { HTTPTransport } from './classes/Http/Http.js';

const rootEl = document.querySelector('#app');
const menuEl = document.querySelector('#menu');

// монтируем 1 раз
const menu = new Menu();
menu.mount(menuEl);

// монтируем внутри роутера
router
  .use('', new ErrorPage({ text: 'root' }))
  .use('login', new LoginPage())
  .use('signup', new SignupPage())
  .use('chat', new ErrorPage({ text: 'chat' }))
  .use('settings', new SettingsPage())
  .use('ui', new TestPage())
  .use(
    'error',
    new ErrorPage({
      code: '500',
      text: 'Server error',
      link: '#',
      linkText: 'Go to home',
    })
  )
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
