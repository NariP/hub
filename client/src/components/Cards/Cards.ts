import { Card } from '@/components';
import './Cards.scss';
const Cards = (props: object) => {
  const dummy = new Array(4).fill(0);
  return `
  <div data-component='cards' class='cards-wrapper'>
  ${dummy
    .map(ele => {
      return `${Card({})}`;
    })
    .join('')}
  </div>
  `;
};
export default Cards;
