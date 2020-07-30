export const template = `
<div class="wrapper-box" data-key="{{ id }}">
  <div class="title">{{ title }}</div>
  <br />
  <form action="" class="form">
    <div class="form__error">
      {{#each errForm as |error| }}
        <div>{{ error }}</div>
      {{/each }}
    </div>
    {{#each fields as |field| }}
      {{{Component field }}}
      <br>
    {{/each }}
  </form>
  <br>
  <a class="link" href="{{ link.url }}">{{ link.text }}</a>
</div>
`;
