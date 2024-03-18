// const { validate } = require("webpack");

const menuBtn = document.querySelector('.menu__button');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
  menuShadow.classList.toggle('menu--open');
  document.body.style.overflow = 'hidden';
    console.log("open");
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
  menuShadow.classList.remove('menu--open');
  document.body.style.overflow = 'auto';
    console.log("close");
});

menuShadow.addEventListener('click', (event) => {
    if (!menuList.contains(event.target)) {
        menuList.classList.remove('menu__list--open');
      menuShadow.classList.remove('menu--open');
       document.body.style.overflow = 'auto';
        console.log("close");
    }
});


/////validation form

// import validator from 'validator';

// const form = document.querySelector("#form");
// const nameInput = document.querySelector("#name");
// const phoneInput = document.querySelector("#phone");
// const messageInput = document.querySelector("#message");
// const emailInput = document.querySelector("#email");

// let isFormValid = false;

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   validateInputs()
// })

// const validateInputs = () => {
//   const name = validator.isEmpty(nameInput.value.trim());
//   console.log(name)
// }



///////slider

var menu = ['01', '02', '03', '04']
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Показувати лише один слайд зараз
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })



//////video

const videoImg = document.querySelector('.video__img');
const videoFrame = document.querySelector('.video__block');
const videoBtn = document.querySelector('.video__btn');

videoImg.addEventListener('click', () => {
  videoImg.classList.toggle('video__img-hidden');
  videoFrame.classList.toggle('video__frame');
   videoBtn.classList.toggle('video__img-hidden');
});

videoBtn.addEventListener('click', () => {
  videoBtn.classList.toggle('video__img-hidden');
  videoFrame.classList.toggle('video__frame');
  videoImg.classList.toggle('video__img-hidden');
});
