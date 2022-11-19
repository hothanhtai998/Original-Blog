const socialIcon = document.querySelector('.social-icon');
const iconHolder = document.createElement('div');
iconHolder.classList.add('icon-holder');

// trang thái khi hover
socialIcon.addEventListener('mouseover', function (e) {
  // chọn ra element (con của socialIcon) gần nhất có chứa class brand-icon khi hover
  const icon = e.target.closest('.brand-icon');

  // kiểm tra nếu element được hover không phải là element có class brand-icon
  if (!icon) return;

  icon.style.position = 'relative';
  iconHolder.style.display = 'flex';

  // Thêm 1 element vào element có class brand-icon
  icon.appendChild(iconHolder);
  iconHolder.innerHTML = icon.dataset.name;
});

// sau khi ngừng hover
socialIcon.addEventListener('mouseout', function (e) {
  const icon = e.target.closest('.brand-icon');
  if (!icon) return;

  iconHolder.style.display = 'none';
});
