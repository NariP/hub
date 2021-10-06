import './Card.scss';
const Card = (props: object) => {
  return `
<div data-component='card'>
  <img src='static/nr.png' alt='thumbnail' />
  <div class='card-body'>
    <div class='title-button-layout'>
      <h3>title</h3>
      <button>☆</button>
    </div>
    <p>description</p>
    <div>whoami</div>
  </div>
</div>
`;
};
export default Card;
