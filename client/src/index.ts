// index.ts

import './ddd.scss';

const $body = document.getElementById('root');
const $Img = document.createElement('img');

const $block = document.createElement('div');
const block = `<h1>${process.env.NODE_ENV}</h1>`;
$Img.src = '/static/nr.png';
$Img.alt = 'user';
$block.innerHTML = block;

const $fetchContent = document.createElement('div');

const init = async () => {
  try {
    const res = await fetch('http://localhost:5000/api');
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
init().then(r => ($fetchContent.innerHTML = `<span>${r.user}</span>`));
$body?.appendChild($Img);
$body?.appendChild($block);
$body?.appendChild($fetchContent);
console.log('dddd');
