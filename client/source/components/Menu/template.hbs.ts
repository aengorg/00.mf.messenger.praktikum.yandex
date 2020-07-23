export const template = `
<nav class="nav" data-key="{{ id }}">
  {{#each links as |link| }}
    <a class="nav__button" href="{{ link.link }}">{{ link.title }}</a>
  {{/each }}
</nav>
`;
