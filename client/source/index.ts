declare global {
  const Handlebars;
}

// import './helpers/Component.js';

// import { Route } from './classes/Route/Route';
// import { router } from './classes/Router/Router';

// import { PageError } from './pages/PageError/index';

// const routes = [new Route('/err', PageError)];
// debugger;
import { App } from './components/App/index.js';

const app = new App({ text: 'text' });
app.insert(document.querySelector('#root'));
