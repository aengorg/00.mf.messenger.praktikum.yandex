Handlebars.registerHelper('Component', (Component, props, parent) => {
  const component = new Component(props);
  parent.addChildren(component);
  return component.render(props);
});
