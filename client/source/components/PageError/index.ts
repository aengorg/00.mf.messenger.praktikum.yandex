import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

// import * as Handlebars from 'handlebars';
import { Box } from '../Box/index';

export class PageError extends Component {
  render(props: any): string {
    const box = new Box();
    const pageError = template(props);
    return box.render({ slot: pageError });
  }
}
