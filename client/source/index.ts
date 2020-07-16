declare global {
  const Handlebars;
}

import { App } from './components/App/index.js';
import './helpers/Component.js';

const app = new App();
app.insert(document.querySelector('#root'));
