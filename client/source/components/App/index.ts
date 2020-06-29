import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { DOMEvent } from '../../types';

export class App extends Component {
  // model = ListModel.load();

  render(props: any): string {
    return template(props);
  }

  onRender() {
    const { domElement } = this;

    domElement.addEventListener('click', this.goPage);
    // domElement.addEventListener(EDIT, this.handleEdit);
    // domElement.addEventListener(CLOSE_FORM, this.handleCloseForm);

    // this.showContacts();
    // this.showHelp();
  }

  goPage(e: DOMEvent<HTMLLinkElement>): void {
    e.preventDefault();
    e.stopPropagation();
    const urlPath = new URL(e.target.href).pathname;
    location.replace(`#${urlPath}`);
  }

  // handleEdit = ({ detail }) => {
  // this.showEdit(detail)
  // };

  // handleCloseForm = () => {
  // this.showHelp()
  // };

  // handleSubmit = () => {
  // this.showHelp();
  // };

  // showContacts() {
  // const contacts = new Contacts({
  // 	model: this.model
  // });
  // contacts.renderTo(this.contactsElement);
  // }

  // showHelp() {
  // const help = new Help();
  // help.renderTo(this.editElement);
  // }

  // showEdit(model: ItemModel) {
  // const contacts = new Edit({ model });
  // contacts.renderTo(this.editElement);
  // }
}
