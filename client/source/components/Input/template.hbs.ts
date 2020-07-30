export const template = `
<div class="input {{ classes.wrapper }}" >
  <div class="input__error {{ classes.error }}">
    {{#each errors }}
      <div>{{ this }}</div>
    {{/each }}
  </div>
  <input 
    data-key="{{ id }}"
    class="input__text {{ classes.input }}" 
    type="{{ type }}" 
    value="{{ value }}" 
    {{ attrs }} 
    required 
  />
  <label class="input__label {{ classes.label }}">
    {{ labelText }}
  </label>
</div>
`;
