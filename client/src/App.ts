import Component from './core/Component';
import './ddd.scss';

export default class App extends Component {
  state: { count: number; user: string } | undefined;
  setup() {
    super.setup();
    this.state = { count: 0, user: '' };
  }

  increase() {
    if (!this.state?.count && this.state?.count !== 0) return;
    this.setState({ count: this.state?.count + 1 });
  }

  decrease() {
    if (!this.state?.count && this.state?.count !== 0) return;
    this.setState({ count: this.state?.count - 1 });
  }

  async init() {
    try {
      console.log('api loading...');
      const res = await fetch('http://localhost:5000/api');
      return await res.json();
    } catch (e) {
      console.error(e);
    }
  }

  template(): string {
    super.template();
    return `
  <div id='app'>
    <h1>${process.env.NODE_ENV}</h1>
    <button name='plus-button'>+</button>
    <button name='minus-button'>-</button>
    <h2>${this.state?.count}번 클릭</h2>
    <span>user: ${this.state?.user}</span>
  </div>
  `;
  }

  setEvent() {
    super.setEvent();
    if (!this.$target) return;
    this.$target.addEventListener('click', (e: MouseEvent) => {
      const { name } = e.target as HTMLButtonElement;
      switch (name) {
        case 'plus-button':
          this.increase();
          break;
        case 'minus-button':
          this.decrease();
          break;
        default:
          break;
      }
    });
  }

  mount() {
    super.mount();
    this.init().then(r => this.setState({ user: r.user }));
  }

  update() {
    const $Img = document.createElement('img');
    $Img.src = '/static/nr.png';
    $Img.alt = 'user';
    const $app: HTMLElement | null = document.getElementById('app');
    $app?.appendChild($Img);
  }
}
