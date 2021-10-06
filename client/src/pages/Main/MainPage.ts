import Component from '@/core/Component';
import { observe, observable, Observable } from '@/core/observer';
import Buttons from '@/Buttons';

export default class MainPage extends Component {
  state: { count: number } | undefined;
  setup() {
    super.setup();
    this.state = { count: 0 };
    console.log(this.state);
  }

  template(): string {
    super.template();
    return `<h1>count: ${this.state?.count}</h1><div data-component='test-fake-redux'></div>`;
  }
  increase() {
    if (!this.state?.count && this.state?.count !== 0) return;
    this.setState({ count: this.state?.count + 1 });
  }
  decrease() {
    if (!this.state?.count && this.state?.count !== 0) return;
    this.setState({ count: this.state?.count - 1 });
  }
  update() {
    super.update();
    // const testState = { a: 2, b: 1 };
    // const proxyState = observable(testState) as { [key: string]: any };
    //
    // // observableTest
    //
    // const adder = () => {
    //   console.log(`adder: ${proxyState.a + proxyState.b}`);
    // };
    // const minus = () => {
    //   console.log(`minus; ${proxyState.a - proxyState.b}`);
    // };
    //
    // observe(adder);
    // observe(minus);
    //
    // proxyState.a = 3;
    // console.log(proxyState);

    const $mainPage: HTMLElement | null | undefined =
      this.$target?.querySelector('[data-component="test-fake-redux"]');
    if (!$mainPage) return;
    const { increase, decrease, state } = this;
    new Buttons($mainPage, {
      increase: increase.bind(this),
      decrease: decrease.bind(this),
    });

    type dynamic = {
      [key: string]: any;
    };
    const testObject: dynamic = { a: 'a' };

    const subscriber = new Observable(testObject) as dynamic;
    const add = () => {
      console.log(`${subscriber.get().a} + 1 = ${subscriber.get().a + 1}`);
    };
    const minus = () => {
      subscriber.get().a = 2;
      console.log(`${subscriber.get().a} - 1 = ${subscriber.get().a - 1}`);
    };
    subscriber.observe(add);
    // subscriber.observe(minus);

    subscriber.get().a = 3;
    console.log(subscriber.get());
    subscriber.get().a = 3;
    // console.log(subscriber.get());
  }
}

// 메인 페이지
