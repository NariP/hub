import Component from '@/core/Component';
import Section from './sections/Section';

export default class MainPage extends Component {
  template(): string {
    super.template();
    return `<h1>MainPage</h1><div>${Section({})}<div>${Section(
      {},
    )}<div>${Section({})}<div>${Section({})}<div>실시간 Top 12</div></div>`;
  }
}

// 메인 페이지
