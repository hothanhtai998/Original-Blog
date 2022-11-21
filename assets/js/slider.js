//#### Nhiều slider ################
const sliderImg = document.getElementById('slider');

// số lượng ảnh của slider
let imgNumber = sliderImg.dataset.number;

for (let i = 0; i < imgNumber; i++) {
  const slidesElement = document.createElement('div');

  slidesElement.classList.add('slides');

  slidesElement.style.padding = '10px';

  sliderImg.appendChild(slidesElement);

  slidesElement.style.backgroundImage = `url(./assets/img/bg-img/b${
    i + 1
  }.jpg)`;
}
