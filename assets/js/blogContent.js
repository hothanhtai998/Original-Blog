const contentArea = document.querySelector('.sub-content-area');
const blogItems = document.querySelectorAll('.blog-item');

const contentAreaPos = contentArea.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  winPos = window.scrollY;
  blogItems.forEach((blogItem) => {
    const blogPos = blogItem.getBoundingClientRect().top;
    console.log(blogPos);
    if (winPos > blogPos) {
      blogItem.classList.remove('blog-item-hidden');
    }
  });
});

// blogItems.forEach((blogItem) =>
//   console.log(blogItem.getBoundingClientRect().top)
// );
