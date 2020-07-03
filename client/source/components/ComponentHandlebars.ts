import * as Handlebars from 'handlebars';

Handlebars.registerHelper(
  'component',
  (Component: any, parent: any, props: any) => {
    const component = new Component();
    return component.create(props, parent);
  }
);
