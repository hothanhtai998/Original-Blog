//#### Nhiều slider ################
const sliderImg = document.getElementById('slider');

// số lượng ảnh của slider
let imgNumber = 3;

for (let i = 0; i < imgNumber; i++) {
  const divElement = document.createElement('div');

  divElement.classList.add('slides');

  sliderImg.appendChild(divElement);

  divElement.style.backgroundImage = `url(./assets/img/bg-img/b${i + 1}.jpg)`;
}

//#### 1 slider ################
const singleSliderImg = document.getElementById('single-slider');
const divElement = document.createElement('div');

divElement.classList.add('slide');

sliderImg.appendChild(divElement);

divElement.style.backgroundImage = `url(./assets/img/bg-img/b1.jpg)`;
