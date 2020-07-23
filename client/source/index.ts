declare global {
  const Handlebars;
}

import { ErrorPage } from './pages/PageError/index.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');

  const page = new ErrorPage();
  const root = document.querySelector('#app');
  page.mount(root);
});

// import { router } from './classes/Router/Router.js';

// router
//   .use('#/', new Page())
//   .use('users', new Page())
//   .use('users2', new Page())
//   .use('use3rs', new Page())
//   .use('ammo', new Page())
//   .start();

// router.go('/');

// setTimeout(() => {
//   router.go('users');
// }, 2000);

// setTimeout(() => {
//   router.back();
// }, 4000);
