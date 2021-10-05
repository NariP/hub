import Component from '@/core/Component';
import { observe, observable } from '@/core/observer';

export default class MainPage extends Component {
  template(): string {
    super.template();
    return `<h1>MainPage</h1>`;
  }
  update() {
    super.update();
    const testState = { a: 2, b: 1 };
    const proxyState = observable(testState) as { [key: string]: any };

    // observableTest

    const adder = () => {
      console.log(`adder: ${proxyState.a + proxyState.b}`);
    };
    const minus = () => {
      console.log(`minus; ${proxyState.a - proxyState.b}`);
    };

    observe(adder);
    observe(minus);

    proxyState.a = 3;
    console.log(proxyState);
  }
}

// 메인 페이지
