import { Component } from '../Component';
import * as template from './template.hbs';
import './style.css';

import { Box } from '../Box/index';
import { Form } from '../Form/index';
import { Button } from '../Button/index';
import { Input } from '../Input/index';

export class PageLogin extends Component {
  render(props: any): string {
    // const form = document.createElement('div');

    // const buttonSubmit = new Button().renderTo(this.domElement, {
    //   text: 'Login',
    //   type: 'submit',
    // });

    // const inputPassword = new Input().renderTo(this.domElement, {
    //   labelText: 'Password',
    //   type: 'password',
    // });

    // return box.render({
    //   slot: form.render({
    //     slot: template({
    //       slots: [inputLogin, inputPassword, buttonSubmit],
    //       title: 'Login',
    //       link: {
    //         text: 'New account',
    //         url: './registration',
    //       },
    //     }),
    //   }),
    // });

    const box = new Box();
    const form = new Form();

    const inputLogin = new Input().create(
      {
        labelText: 'Login',
        type: 'text',
      },
      form.getSlot()
    );

    return box.render({
      slot: form.render({
        slot: template({
          slots: [Input],
          title: 'Login',
          link: {
            text: 'New account',
            url: './registration',
          },
        }),
      }),
    });
  }

  onRender() {
    const slot = this.getSlot();
    // const box = new Box().renderTo(slot);

    // box.renderTo(this.getSlot());
    // console.log('box.getSlot()', box.getSlot());
    // form.renderTo(box.getSlot());
    // const buttonSubmit = new Button()
    // const htmlButtonSubmit = buttonSubmit.create(this.getSlot('btn-submit'), {
    //   text: 'Login',
    //   type: 'submit',
    // });

    // const inputLogin = new Input();
    // inputLogin.create(document.createElement('div'), {
    //   labelText: 'Login',
    //   type: 'text',
    // });
    // const inputPassword = new Input().renderTo(box, {
    //   labelText: 'Password',
    //   type: 'password',
    // });
    // this.getSlot().innerHTML = box;
  }
}
