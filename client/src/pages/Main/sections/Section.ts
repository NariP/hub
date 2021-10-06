import { Cards } from '@/components';
import './Section.scss';

const Section = (props: object) => {
  return `
  <section class='section-wrapper'>
    <header><h2 class='topic'>라이프</h2></header>
    ${Cards({})}
  </section>
  `;
};
export default Section;
