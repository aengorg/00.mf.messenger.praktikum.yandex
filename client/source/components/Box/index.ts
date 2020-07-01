import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

export class Box extends Component {
  render(props: any): string {
    return template(props);
  }
}