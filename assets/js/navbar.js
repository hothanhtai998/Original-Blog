const navbar = document.querySelector('.nav-container');

// lấy vị trí top của navigation
const navPos = navbar.getBoundingClientRect().top;

// so sánh vị trí top của trình duyệt sau khi dùng scroll và top của nav
window.addEventListener('scroll', (e) => {
  scrollPos = window.scrollY;
  if (scrollPos > navPos) navbar.classList.add('sticky');
  else navbar.classList.remove('sticky');
});
