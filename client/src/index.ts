// index.ts

import './ddd.scss';

const $body = document.getElementById('root');
const $Img = document.createElement('img');

const $block = document.createElement('div');
const block = `<h1>${process.env.NODE_ENV}</h1>`;
$Img.src = '/static/nr.png';
$Img.alt = 'me';
$block.innerHTML = block;
$body?.appendChild($Img);
$body?.appendChild($block);
