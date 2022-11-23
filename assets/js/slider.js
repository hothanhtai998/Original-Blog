//#### Nhiều slider ################
const sliderImg = document.getElementById('slider');

// số lượng ảnh của slider
let imgNumber = sliderImg.dataset.number;
const arr = [];
for (let i = 0; i < imgNumber; i++) {
  const slidesElement = document.createElement('div');

  slidesElement.classList.add('slides');

  // slidesElement.style.padding = '10px';

  slidesElement.style.backgroundImage = `url(./assets/img/bg-img/b${
    i + 1
  }.jpg)`;

  arr.push(slidesElement);

  // slidesElement.style.transform = `translateX(${50 * (i - 3)}%)`;

  // console.log(slidesElement.offsetLeft);
}
arr.forEach((a) => {
  sliderImg.prepend(a);
});

// console.log(sliderImg.offset().top);
// setInterval(() => {
//   const cutFirst = arr.shift();
//   sliderImg.prepend(cutFirst);
//   console.log(cutFirst);
//   arr.push(cutFirst);
// }, 2000);

const firstChild = sliderImg.firstElementChild;
// console.log(arr);

const activeImg = firstChild.nextElementSibling;

// firstChild.remove();
// activeImg.style.backgroundImage = `url(./assets/img/bg-img/b3.jpg)`;
// const lastChild = sliderImg.lastElementChild;
// console.log(firstChild);
// console.log(activeImg);
// lastChild.offsetLeft =

// sliderImg.addEventListener('wheel', (e) => {
//   sliderImg.scrollLeft += e.deltaY;
// });
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
