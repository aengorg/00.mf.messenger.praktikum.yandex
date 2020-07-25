import { Component } from '../classes/Component/Component.js';

Handlebars.registerHelper('Component', (component) => {
  if (component instanceof Component) {
    return component.render();
  }
  return '<div style="color:red; border:solid 1px;">component not found</div>';
});
