export default class Component {
  $target: HTMLElement | null;
  state: object | undefined;

  constructor($target: HTMLElement | null) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setEvent();
    this.mount();
  }
  setup() {
    // state 초기화
  }
  template() {
    // html template
    return '';
  }
  mount() {
    // 첫 render 이후 한 번만 동작
  }
  update() {
    // 첫 render 이후 동작
  }
  setEvent() {
    //
  }
  setState(newState: object) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  render() {
    if (!this.$target) return;
    this.$target.innerHTML = this.template();
    this.update();
  }
}
