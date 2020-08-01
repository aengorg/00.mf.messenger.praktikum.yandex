export const template = `
<div class="user-list__item">
<div class="user-list__item-left">
  <div class="user-list__item-avatar avatar avatar-status avatar-status--active">
    <img src="{{ ava }}" alt="ava" class="  " />
  </div>
</div>
<div class="user-list__item-right">
  <div class="user-list__item-name">{{ username }}</div>
  <div class="user-list__item-text">
    {{ text }}
  </div>
</div>
</div>
`;
