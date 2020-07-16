export const template = `
<div class="input {{ classes.wrapper }}" data-key="{{ id }}">
  <div class="input__error {{ classes.error }}">
    {{#each errors as |error| }}
      <div>{{ error }}</div>
    {{/each }}
  </div>
  <input class="input__text {{ classes.input }}" type="{{ type }}" required {{ attrs }} value="{{ value }}" />
  <label class="input__label {{ classes.label }}">
    {{ labelText }}
  </label>
</div>
`;
