const blogFact = document.querySelector('.blog-fact');
const blogFactCounters = document.querySelectorAll('.counter');

const blogFactPos = blogFact.getBoundingClientRect().top;

const handlerScroll = () => {
  blogFactCounters.forEach((counter) => {
    const windowPos = window.pageYOffset;
    let i = 1;
    let time = setInterval(() => {
      if (i < counter.dataset.number) {
        counter.innerHTML = i + 1;
      }
      i++;
    }, 200);
    if (windowPos > 700 && windowPos < 730) {
      time;
    } else {
      clearInterval(time);
      // console.log(time);
    }
  });
};

window.addEventListener('scroll', handlerScroll);

// const handlerScroll = () => {
//   windowPos = window.innerHeight;
//   let i = 1;
//   let j = 1;
//   let k = 1;
//   let l = 1;

//   if (blogFactPos < windowPos) {
//     const time1 = setInterval(() => {
//       if (i < blogFactAward.dataset.number) {
//         blogFactAward.innerHTML = i + 1;
//       }
//       i++;
//     }, 100);

//     const time2 = setInterval(() => {
//       if (j < blogFactFollow.dataset.number) {
//         blogFactFollow.innerHTML = j + 1;
//       }
//       j++;
//     }, 200);

//     const time3 = setInterval(() => {
//       if (k < blogFactMember.dataset.number) {
//         blogFactMember.innerHTML = k + 1;
//       }
//       k++;
//     }, 350);

//     const time4 = setInterval(() => {
//       if (l < blogFactDay.dataset.number) {
//         blogFactDay.innerHTML = l + 1;
//       }
//       l++;
//     }, 150);
//   }
// };

// window.addEventListener('scroll', handlerScroll);
