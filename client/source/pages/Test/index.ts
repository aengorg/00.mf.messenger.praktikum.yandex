import { Component } from '../../classes/Component/Component.js';
import { template } from './template.hbs.js';

import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Menu } from '../../components/Menu/index.js';
import { AvatarLoader } from '../../components/AvatarLoader/index.js';
import { UserItem } from '../../components/UserListItem/index.js';
// import {} from '../../components';

export class TestPage extends Component {
  constructor(props = {}) {
    super({
      ...props,
      components: {
        btn: new Button({
          text: 'text',
        }),
        input: new Input({
          labelText: 'labelText',
        }),
        menu: new Menu(),
        ava: new AvatarLoader(),
        userItem: new UserItem({
          ava: 'https://picsum.photos/60',
          text: 'text text text text',
          username: 'username 1',
        }),
        userItem2: new UserItem({
          ava: 'https://picsum.photos/60',
          text: 'text text text text',
          username: 'username 2',
        }),
      },
    });
  }

  render() {
    return Handlebars.compile(template)(this.props);
  }
}
