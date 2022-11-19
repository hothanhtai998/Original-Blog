const topTitle = document.querySelector('.top-title');

const titleArr = [
  'Hello World!',
  'Hello Original!',
  'Hello Universe!',
  'Hello Earth!',
];

topTitle.innerHTML = titleArr[0];

let index = 0;

// setInterval để sau mỗi 1.5s thì tiêu đề header sẽ thay đổi
const times = setInterval(() => {
  if (index === titleArr.length - 1) {
    topTitle.innerHTML = titleArr[index];
    index = 0;
  } else if (index < titleArr.length) {
    topTitle.innerHTML = titleArr[index];
    index++;
  }
}, 1500);

// xoá interval sau khi tải lại trang
window.addEventListener('onunload', () => {
  clearInterval(times);
});

//hiện nút trở về đầu trang
const backToTopBtn = document.getElementById('back-to-top-btn');
const sliderArea = document.getElementById('slider');

// lấy vị trí top của slider
const sliderPos = sliderArea.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
  // vị trị hiện tại của trục y khi scroll
  let scrollPos = window.scrollY;
  if (scrollPos >= sliderPos) backToTopBtn.style.display = 'block';
  else backToTopBtn.style.display = 'none';
});

// trở về đầu trang với hiệu ứng smooth
backToTopBtn.addEventListener('click', () => {
  const header = document.getElementById('header-area');
  header.scrollIntoView({ behavior: 'smooth' });
});
