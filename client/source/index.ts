import { App } from './components/App/index';
import './components/ComponentHandlebars';
import './style.css';

let app = new App();

app.create({}, document.querySelector('#root'));
