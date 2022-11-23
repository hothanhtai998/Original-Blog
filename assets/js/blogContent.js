const blogRevealItems = document.querySelectorAll('.blog-reveal');

function reveal() {
  blogRevealItems.forEach((blogRevealItem) => {
    const windowHeight = window.innerHeight;

    const blogRevealItemTop = blogRevealItem.getBoundingClientRect().top;

    if (blogRevealItemTop < windowHeight - 50) {
      blogRevealItem.classList.add('active');
    }
    //  else {
    //   blogItem.classList.remove('active');
    // }
  });
}

window.addEventListener('scroll', reveal);
