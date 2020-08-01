export const template = `
<div class="wrapper-box" data-key="{{ id }}">
  {{#each components }}
    <div>{{{Component this }}}</div>
    <br />
  {{/each }}
</div>
`;
