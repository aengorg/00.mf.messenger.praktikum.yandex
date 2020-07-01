import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

export class Input extends Component {
  render(props: any): string {
    return template(props);
  }
}
