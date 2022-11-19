const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('click', (e) => {
  // ngăn chặn việc nhấn vào ô input thì sẽ nhấn luôn vào element chứa nó
  e.stopPropagation();
  searchInput.classList.add('active');
});

// xoá sự kiện khi nhấn vào ô input
document.body.addEventListener('click', (e) => {
  searchInput.classList.remove('active');
});
