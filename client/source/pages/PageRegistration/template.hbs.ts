export const template = `
<div class="wrapper-box" data-key="{{ id }}">
  <div class="title">{{ title }}</div>
  <br />
  <form action="" class="form">
    <div class="form__error">
      {{#each errors as |error| }}
        <div>{{ error }}</div>
      {{/each }}
    </div>
    {{#each fields as |field| }}
      {{{Component field.component field.props field.parent }}}
    {{/each }}
  </form>
  <br>
  <a class="link" href="{{ link.url }}">{{ link.text }}</a>
</div>
`;
