const modeBtn = document.querySelector('.header_inner nav ul li.switch a');

modeBtn.onclick = (e) =>{
  document.body.classList.toggle('switchMode');
  e.preventDefault();
}
const burger = document.querySelector('.burger');
const burger__line = document.querySelector('.burger__line');
const burger__menu = document.querySelector('.burger__menu');

burger.onclick = (e) =>{
  burger__line.classList.toggle('active');
  burger__menu.classList.toggle('open');
  document.body.classList.toggle('close');
}
burger__menu.onclick = (e) =>{
  burger__line.classList.toggle('active');
  document.body.classList.toggle('close');
  burger__menu.classList.toggle('open');
}

const portfolio = document.querySelector('.portfolio_items');
