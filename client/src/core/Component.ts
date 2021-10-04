export default class Component {
  $target: HTMLElement | null | undefined;
  state: object | undefined;
  props;

  constructor($target: HTMLElement | null, props?: any) {
    this.$target = $target;
    this.props = props;
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
    // 첫 render 이후 한 번만 동작, ex api
  }
  update() {
    // 첫 render 이후 동작
  }
  setEvent() {
    // event setting
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
