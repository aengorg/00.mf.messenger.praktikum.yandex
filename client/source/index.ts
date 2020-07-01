import { App } from './components/App/index';
import './style.css';

let app = new App();

app.create({}, document.querySelector('#root'));
