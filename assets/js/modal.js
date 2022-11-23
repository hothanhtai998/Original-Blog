const subscribeBtn = document.querySelector('.subscribe-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelector('.nav-link');
const navContainer = document.querySelector('.nav-container');
const openNavBtn = document.querySelector('.open-nav-btn');

const handlerOpenModal = (e) => {
  e.stopPropagation();
  modal.classList.add('open');
};

const handlerCloseModal = () => {
  modal.classList.remove('open');
};

const handlerOpenNavLink = (e) => {
  e.stopPropagation();
  navLink.style.display = 'block';
};

const handlerCloseNavLink = () => {
  navLink.style.display = 'none';
};

subscribeBtn.addEventListener('click', handlerOpenModal);
closeBtn.addEventListener('click', handlerCloseModal);
container.addEventListener('click', (e) => e.stopPropagation());
window.addEventListener('click', handlerCloseModal);

openNavBtn.addEventListener('click', handlerOpenNavLink);
navContainer.addEventListener('click', (e) => e.stopPropagation());
// window.addEventListener('click', handlerCloseNavLink);
