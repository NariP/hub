import Component from '@/core/Component';

export default class Buttons extends Component {
  template(): string {
    super.template();
    return `
      <button name='plus-button'>+</button>
      <button name='minus-button'>-</button>
  `;
  }
  setEvent() {
    super.setEvent();
    const { $target, props } = this;
    if (!$target) return;
    $target.addEventListener('click', (e: MouseEvent) => {
      const { name } = e.target as HTMLButtonElement;
      switch (name) {
        case 'plus-button':
          props.increase();
          break;
        case 'minus-button':
          props.decrease();
          break;
        default:
          break;
      }
    });
  }
}
