export const template = `
<div id="app" data-key="{{ id }}">
  {{{Component Menu.component Menu.props parent }}}
  <div class="page">
  {{{Component Page.component Page.props parent }}}
  </div>
</div>
`;
