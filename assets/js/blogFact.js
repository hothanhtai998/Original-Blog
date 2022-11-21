const blogFact = document.querySelector('.blog-fact');
const blogFactAward = document.querySelector('.award');
const blogFactFollow = document.querySelector('.follow');
const blogFactMember = document.querySelector('.member');
const blogFactDay = document.querySelector('.day');

const blogFactPos = blogFact.getBoundingClientRect().top;

const handlerScroll = () => {
  winPos = window.scrollY;
  let i = 1;
  let j = 1;
  let k = 1;
  let l = 1;

  if (winPos > 715 && winPos < 730) {
    const time1 = setInterval(() => {
      if (i < blogFactAward.dataset.number) {
        blogFactAward.innerHTML = i + 1;
      }
      i++;
    }, 100);

    const time2 = setInterval(() => {
      if (j < blogFactFollow.dataset.number) {
        blogFactFollow.innerHTML = j + 1;
      }
      j++;
    }, 200);

    const time3 = setInterval(() => {
      if (k < blogFactMember.dataset.number) {
        blogFactMember.innerHTML = k + 1;
      }
      k++;
    }, 350);

    const time4 = setInterval(() => {
      if (l < blogFactDay.dataset.number) {
        blogFactDay.innerHTML = l + 1;
      }
      l++;
    }, 150);
  }
};

window.addEventListener('scroll', handlerScroll);
