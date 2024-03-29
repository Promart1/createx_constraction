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
var mySwiper = new Swiper('#hero-swiper', {
  slidesPerView: 1, 
    loop: true,
   
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span class="hero__pagination-number">' + (menu[index]) + '</span>' + '</span>';
        },
    },

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })



//////video

// const videoImg = document.querySelector('.video__img');
// const videoFrame = document.querySelector('.video__block');
// const videoBtn = document.querySelector('.video__btn');

// videoImg.addEventListener('click', () => {
//   videoImg.classList.toggle('video__img-hidden');
//   videoFrame.classList.toggle('video__frame');
//    videoBtn.classList.toggle('video__img-hidden');
// });

// videoBtn.addEventListener('click', () => {
//   videoBtn.classList.toggle('video__img-hidden');
//   videoFrame.classList.toggle('video__frame');
//   videoImg.classList.toggle('video__img-hidden');
// });

document.addEventListener('DOMContentLoaded', () => {
    const videoImg = document.querySelector('.video__img');
    const videoFrame = document.querySelector('.video__block');
    const videoBtn = document.querySelector('.video__btn');

    if (videoImg && videoFrame && videoBtn) {
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
    }
});



///portfolio slider

var swiper = new Swiper("#portfolio-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
      
        
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        
  breakpoints: {
            1920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
       
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});
      

///testimonials-swiper

var swiper = new Swiper("#testimonials-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        // freeMode: true,
      
        
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
});
      

///////navigation

document.addEventListener('DOMContentLoaded', function () {
   
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(function (link) {
      
      if (link.href === currentUrl) {
        link.classList.add('active');
      }
    });
});
  
document.addEventListener('DOMContentLoaded', function () {
   
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.main__link');

    menuLinks.forEach(function (link) {
      
      if (link.href === currentUrl) {
        link.classList.add('active');
      }
    });
});

/////offer

document.addEventListener('DOMContentLoaded', function() {
    const offerBlocks = document.querySelectorAll('.offer__block');
    
    offerBlocks.forEach(function(offerBlock) {
        offerBlock.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const plusIcon = this.querySelector('.offer__plus');
            plusIcon.src = this.classList.contains('expanded') ? 'img/icons/minus.svg' : 'img/icons/plus.svg';
        });
    });
});


///////footer



// document.addEventListener('DOMContentLoaded', function() {
//     const navBlockTitles = document.querySelectorAll('.footer__nav-block-title');
//     const plusIcons = document.querySelectorAll('.footer__plus');

//     navBlockTitles.forEach(function(navBlockTitle, index) {
//         navBlockTitle.addEventListener('click', function() {
//             const subMenu = this.nextElementSibling;
//             subMenu.classList.toggle('open');

            
//             const plusIcon = plusIcons[index];
//             plusIcon.src = subMenu.classList.contains('open') ? 'img/icons/minus.svg' : 'img/icons/plus.svg';
//         });
//     });

//     plusIcons.forEach(function(plusIcon, index) {
//         plusIcon.addEventListener('click', function() {
//             const subMenu = this.nextElementSibling;
//             subMenu.classList.toggle('open');

           
//             const navBlockTitle = navBlockTitles[index];
//             navBlockTitle.nextElementSibling.classList.toggle('open');
//             plusIcon.src = subMenu.classList.contains('open') ? 'img/icons/minus.svg' : 'img/icons/plus.svg';
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const footerNavBlocks = document.querySelectorAll('.footer__nav-mob');

    footerNavBlocks.forEach(function(navBlock) {
        const plusIcon = navBlock.querySelector('.footer__plus');
        const navBlockTitle = navBlock.querySelector('.footer__nav-block-title');
        const subMenu = navBlock.querySelector('.footer__sub-menu');

        navBlockTitle.addEventListener('click', function() {
            subMenu.classList.toggle('open'); 
            plusIcon.classList.toggle('open');
        });

        plusIcon.addEventListener('click', function() {
            subMenu.classList.toggle('open'); 
            plusIcon.classList.toggle('open');
        });
    });
});



/////// Load more

// // JavaScript
// document.addEventListener('DOMContentLoaded', function() {
//     const showMoreBtn = document.getElementById('showMoreBtn');
//     const portfolioItems = document.querySelectorAll('.work-portfolio__item');
//     const itemsToShow = 3; // Кількість елементів для показу за раз
//     let visibleItems = 9; // Початкова кількість видимих елементів

//     // Показати початкову кількість елементів
//     showItems();

//     // Додати обробник події для кліку на кнопку "Показати більше"
//     showMoreBtn.addEventListener('click', function(event) {
//         event.preventDefault(); // Зупиняємо стандартну дію кнопки
        
//         // Збільшити кількість видимих елементів на itemsToShow
//         visibleItems += itemsToShow;
//         // Показати елементи
//         showItems();
//     });

//     // Функція, яка показує або приховує елементи відповідно до кількості visibleItems
//     function showItems() {
//         portfolioItems.forEach(function(item, index) {
//             if (index < visibleItems) {
//                 item.style.display = 'flex'; // Показуємо елемент
//             } else {
//                 item.style.display = 'none'; // Ховаємо елемент
//             }
//         });

//         // Перевіряємо, чи всі елементи показані, якщо так, то ховаємо кнопку "Показати більше"
//         if (visibleItems >= portfolioItems.length) {
//             showMoreBtn.style.display = 'none';
//         } else {
//             showMoreBtn.style.display = 'flex';
//         }
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const portfolioItems = document.querySelectorAll('.work-portfolio__item');
    let visibleItems; // Початкова кількість видимих елементів

    // Оновлення кількості видимих елементів при завантаженні сторінки
    updateVisibleItems();

    // Додати обробник події для кліку на кнопку "Показати більше"
    showMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Зупиняємо стандартну дію кнопки
        
        // Збільшити кількість видимих елементів на itemsToShow
        visibleItems += getItemsToShow();
        // Показати елементи
        showItems();
    });

    // Функція, яка визначає кількість елементів, які треба показати в залежності від розміру вікна
    function getItemsToShow() {
        if (window.innerWidth > 1024) {
            return 9; // Для десктопу
        } else if (window.innerWidth > 768) {
            return 6; // Для планшету
        } else {
            return 3; // Для мобільного телефона
        }
    }

    // Функція, яка оновлює кількість видимих елементів при завантаженні сторінки або зміні розміру вікна
    function updateVisibleItems() {
        visibleItems = getItemsToShow();
        showItems();
    }

    // Функція, яка показує або приховує елементи відповідно до кількості visibleItems
    function showItems() {
        portfolioItems.forEach(function(item, index) {
            if (index < visibleItems) {
                item.style.display = 'flex'; // Показуємо елемент
            } else {
                item.style.display = 'none'; // Ховаємо елемент
            }
        });

        // Перевіряємо, чи всі елементи показані, якщо так, то ховаємо кнопку "Показати більше"
        if (visibleItems >= portfolioItems.length) {
            showMoreBtn.style.display = 'none';
        } else {
            showMoreBtn.style.display = 'flex';
        }
    }

    // Додати обробник події для зміни розміру вікна
    window.addEventListener('resize', updateVisibleItems);
});








