

// FORM-VALIDATION
const validateInputs = () => {
    const inputs = document.querySelectorAll('.application__input');
    inputs.forEach(function(input) {
        const value = input.value.trim();
        const mark = input.nextElementSibling;
        const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
        const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        if (value === '') {
            input.classList.remove('application__success');
            input.classList.add('application__error');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'none';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'block'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'block'; 
            }
        } else {
            input.classList.remove('application__error');
            input.classList.add('application__success');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'block';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'none'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'none';
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const submitBtn = document.getElementById('submitBtn');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            validateInputs(); 

            const inputs = document.querySelectorAll('.application__input');
            const isSuccess = Array.from(inputs).every(input => input.classList.contains('application__success'));

            if (isSuccess) {
                form.submit();
            }
        });
    }

    const inputs = document.querySelectorAll('.application__input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const value = input.value.trim();
            const mark = input.nextElementSibling; 
            const validationText = input.nextElementSibling.nextElementSibling;
            const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
            const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
           
            if (value === '') {
                input.classList.remove('application__success');
                input.classList.add('application__error');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'none'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'block'; 
                }

                if (validationText) {
                    validationText.style.display = 'none'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'block'; 
                }
            } else {
                input.classList.remove('application__error');
                input.classList.add('application__success');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'block'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'none'; 
                }

                if (validationText) {
                    validationText.style.display = 'block'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'none'; 
                }
            }
        });
    });

    if (form) {
        form.addEventListener('submit', function(event) {
            location.reload(); 
        });
    }
});







//////////// REQUEST-VALIDATION ///////////////////////////////////////


const validateReqInputs = () => {
    const inputs = document.querySelectorAll('.request-form__input');
    inputs.forEach(function(input) {
        const value = input.value.trim();
        const mark = input.nextElementSibling;
        const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
        const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        if (value === '') {
            input.classList.remove('application__success');
            input.classList.add('application__error');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'none';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'block'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'block'; 
            }
        } else {
            input.classList.remove('application__error');
            input.classList.add('application__success');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'block';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'none'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'none';
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('request-form');
    const submitBtn = document.getElementById('submitBtnReq');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            validateReqInputs(); 

            const inputs = document.querySelectorAll('.request-form__input');
            const isSuccess = Array.from(inputs).every(input => input.classList.contains('application__success'));

            if (isSuccess) {
                form.submit();
            }
        });
    }

    const inputs = document.querySelectorAll('.request-form__input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const value = input.value.trim();
            const mark = input.nextElementSibling; 
            const validationText = input.nextElementSibling.nextElementSibling;
            const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
            const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
           
            if (value === '') {
                input.classList.remove('application__success');
                input.classList.add('application__error');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'none'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'block'; 
                }

                if (validationText) {
                    validationText.style.display = 'none'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'block'; 
                }
            } else {
                input.classList.remove('application__error');
                input.classList.add('application__success');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'block'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'none'; 
                }

                if (validationText) {
                    validationText.style.display = 'block'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'none'; 
                }
            }
        });
    });

    if (form) {
        form.addEventListener('submit', function(event) {
            location.reload(); 
        });
    }
});







//////////// REQUEST-VALIDATION ///////////////////////////////////////


const validateContactInputs = () => {
    const inputs = document.querySelectorAll('.contact-form__input');
    inputs.forEach(function(input) {
        const value = input.value.trim();
        const mark = input.nextElementSibling;
        const denger = input.nextElementSibling.nextElementSibling;
        const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling;
        
        if (value === '') {
            input.classList.remove('application__success');
            input.classList.add('application__error');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'none';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'block'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'block'; 
            }
        } else {
            input.classList.remove('application__error');
            input.classList.add('application__success');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'block';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'none'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'none';
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submitBtnContact');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            validateContactInputs(); 

            const inputs = document.querySelectorAll('.contact-form__input');
            const isSuccess = Array.from(inputs).every(input => input.classList.contains('application__success'));

            if (isSuccess) {
                form.submit();
            }
        });
    }

    const inputs = document.querySelectorAll('.contact-form__input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const value = input.value.trim();
            const mark = input.nextElementSibling; 
            const validationText = input.nextElementSibling.nextElementSibling;
            const denger = input.nextElementSibling.nextElementSibling;
            const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling;
           
            if (value === '') {
                input.classList.remove('application__success');
                input.classList.add('application__error');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'none'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'block'; 
                }

                if (validationText) {
                    validationText.style.display = 'none'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'block'; 
                }
            } else {
                input.classList.remove('application__error');
                input.classList.add('application__success');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'block'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'none'; 
                }

                if (validationText) {
                    validationText.style.display = 'block'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'none'; 
                }
            }
        });
    });

    if (form) {
        form.addEventListener('submit', function(event) {
            location.reload(); 
        });
    }
});





//////////// COMMENT-VALIDATION ///////////////////////////////////////

const validateCommentInputs = () => {
    const inputs = document.querySelectorAll('.comment-form__input');
    inputs.forEach(function(input) {
        const value = input.value.trim();
        const mark = input.nextElementSibling;
        const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
        const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        if (value === '') {
            input.classList.remove('application__success');
            input.classList.add('application__error');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'none';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'block'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'block'; 
            }

        } else {
            input.classList.remove('application__error');
            input.classList.add('application__success');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'block';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'none'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'none';
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('comment-form');
    const submitBtn = document.getElementById('submitBtnComment');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            validateCommentInputs(); 

            const inputs = document.querySelectorAll('.comment-form__input');
            const isSuccess = Array.from(inputs).every(input => input.classList.contains('application__success'));

            if (isSuccess) {
                form.submit();
            }
        });
    }

    const inputs = document.querySelectorAll('.comment-form__input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const value = input.value.trim();
            const mark = input.nextElementSibling; 
            const validationText = input.nextElementSibling.nextElementSibling;
            const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
            const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
           
            if (value === '') {
                input.classList.remove('application__success');
                input.classList.add('application__error');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'none'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'block'; 
                }

                if (validationText) {
                    validationText.style.display = 'none'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'block'; 
                }
            } else {
                input.classList.remove('application__error');
                input.classList.add('application__success');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'block'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'none'; 
                }

                if (validationText) {
                    validationText.style.display = 'block'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'none'; 
                }
            }
        });
    });

    if (form) {
        form.addEventListener('submit', function(event) {
            location.reload(); 
        });
    }
});





//////////// modal-VALIDATION ///////////////////////////////////////

const validateModalInputs = () => {
    const inputs = document.querySelectorAll('.application__input');
    inputs.forEach(function(input) {
        const value = input.value.trim();
        const mark = input.nextElementSibling;
        const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
        const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        
        if (value === '') {
            input.classList.remove('application__success');
            input.classList.add('application__error');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'none';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'block'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'block'; 
            }

        } else {
            input.classList.remove('application__error');
            input.classList.add('application__success');
            if (mark && mark.classList.contains('application__mark')) {
                mark.style.display = 'block';
            }

            if (denger && denger.classList.contains('application__denger')) {
                denger.style.display = 'none'; 
            }
            
            if (validationTextDanger) {
                validationTextDanger.style.display = 'none';
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('modalSub');
    const submitBtn = document.getElementById('submitModalBtn');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            validateModalInputs(); 

            const inputs = document.querySelectorAll('.application__input');
            const isSuccess = Array.from(inputs).every(input => input.classList.contains('application__success'));

            if (isSuccess) {
                form.submit();
            }
        });
    }

    const inputs = document.querySelectorAll('.application__input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const value = input.value.trim();
            const mark = input.nextElementSibling; 
            const validationText = input.nextElementSibling.nextElementSibling;
            const denger = input.nextElementSibling.nextElementSibling.nextElementSibling;
            const validationTextDanger = input.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
           
            if (value === '') {
                input.classList.remove('application__success');
                input.classList.add('application__error');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'none'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'block'; 
                }

                if (validationText) {
                    validationText.style.display = 'none'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'block'; 
                }
            } else {
                input.classList.remove('application__error');
                input.classList.add('application__success');
                if (mark && mark.classList.contains('application__mark')) {
                    mark.style.display = 'block'; 
                }

                if (denger && denger.classList.contains('application__denger')) {
                    denger.style.display = 'none'; 
                }

                if (validationText) {
                    validationText.style.display = 'block'; 
                }
                
                if (validationTextDanger) {
                    validationTextDanger.style.display = 'none'; 
                }
            }
        });
    });

});


// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('form');

//     form.addEventListener('submit', e => {
//         e.preventDefault(); // Prevent form submission for now
//         validateForm();
//     });

//     function validateForm() {
//         const name = document.getElementById('app-name');
//         const phone = document.getElementById('app-phone');
//         const email = document.getElementById('app-email');
//         const message = document.getElementById('app-message');
//         const agree = document.getElementById('agree');

//         validateInput(name, 'Name');
//         validatePhone(phone);
//         validateEmail(email);
//         validateInput(message, 'Message');
//         validateCheckbox(agree);
//     }

//     function validateInput(inputElement, fieldName) {
//         const value = inputElement.value.trim();
//         const errorElement = inputElement.nextElementSibling;

//         if (value === '') {
//             displayError(inputElement, errorElement, `${fieldName} is required`);
//         } else {
//             clearError(inputElement, errorElement);
//         }
//     }

//     function validatePhone(phoneElement) {
//         const phone = phoneElement.value.trim();
//         const errorElement = phoneElement.nextElementSibling;

//         if (phone === '') {
//             displayError(phoneElement, errorElement, 'Phone is required');
//         } else if (!/^\d{10}$/.test(phone)) {
//             displayError(phoneElement, errorElement, 'Invalid phone number');
//         } else {
//             clearError(phoneElement, errorElement);
//         }
//     }

//     function validateEmail(emailElement) {
//         const email = emailElement.value.trim();
//         const errorElement = emailElement.nextElementSibling;

//         if (email === '') {
//             displayError(emailElement, errorElement, 'Email is required');
//         } else if (!isValidEmail(email)) {
//             displayError(emailElement, errorElement, 'Invalid email format');
//         } else {
//             clearError(emailElement, errorElement);
//         }
//     }

//     function validateCheckbox(checkboxElement) {
//         const errorElement = checkboxElement.nextElementSibling.nextElementSibling; // Access the error div

//         if (!checkboxElement.checked) {
//             displayError(null, errorElement, 'Please agree to the terms');
//         } else {
//             clearError(null, errorElement);
//         }
//     }

//     function isValidEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }

//     function displayError(inputElement, errorElement, message) {
//         errorElement.textContent = message;
//         if (inputElement) {
//             inputElement.classList.add('error');
//         }
//         errorElement.style.display = 'block';
//     }

//     function clearError(inputElement, errorElement) {
//         if (inputElement) {
//             inputElement.classList.remove('error');
//         }
//         errorElement.textContent = '';
//         errorElement.style.display = 'none';
//     }
// });








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


// document.addEventListener('DOMContentLoaded', function() {
//     const footerNavBlocks = document.querySelectorAll('.footer__nav-mob');

//     footerNavBlocks.forEach(function(navBlock) {
//         const plusIcon = navBlock.querySelector('.footer__plus');
//         const navBlockTitle = navBlock.querySelector('.footer__nav-block-title');
//         const subMenu = navBlock.querySelector('.footer__sub-menu');

//         navBlockTitle.addEventListener('click', function() {
//             subMenu.classList.toggle('open');
//             plusIcon.classList.toggle('open');
//         });

//         plusIcon.addEventListener('click', function() {
//             subMenu.classList.toggle('open');
//             plusIcon.classList.toggle('open');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const navBlocks = document.querySelectorAll('.footer__nav-item');

    navBlocks.forEach(function(navBlock) {
        const plusIcon = navBlock.querySelector('.footer__plus');
        const navBlockTitle = navBlock.querySelector('.footer__nav-block-title');
        const subMenu = navBlock.querySelector('.footer__sub-menu');

        if (plusIcon && navBlockTitle && subMenu) {
            navBlockTitle.addEventListener('click', function() {
                subMenu.classList.toggle('open');
                plusIcon.classList.toggle('open');
            });

            plusIcon.addEventListener('click', function() {
                subMenu.classList.toggle('open');
                plusIcon.classList.toggle('open');
            });
        } else {
            console.error('One or more required elements not found.');
        }
    });
});






/////// Load more



// document.addEventListener('DOMContentLoaded', function() {
//     const showMoreBtn = document.getElementById('showMoreBtn');
//     const portfolioItems = document.querySelectorAll('.work-portfolio__item');
//     let visibleItems; // Початкова кількість видимих елементів

//     // Оновлення кількості видимих елементів при завантаженні сторінки
//     updateVisibleItems();

//     // Додати обробник події для кліку на кнопку "Показати більше"
//     showMoreBtn.addEventListener('click', function(event) {
//         event.preventDefault(); // Зупиняємо стандартну дію кнопки
        
//         // Збільшити кількість видимих елементів на itemsToShow
//         visibleItems += getItemsToShow();
//         // Показати елементи
//         showItems();
//     });

//     // Функція, яка визначає кількість елементів, які треба показати в залежності від розміру вікна
//     function getItemsToShow() {
//         if (window.innerWidth > 1024) {
//             return 9; // Для десктопу
//         } else if (window.innerWidth > 768) {
//             return 6; // Для планшету
//         } else {
//             return 3; // Для мобільного телефона
//         }
//     }

//     // Функція, яка оновлює кількість видимих елементів при завантаженні сторінки або зміні розміру вікна
//     function updateVisibleItems() {
//         visibleItems = getItemsToShow();
//         showItems();
//     }

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

//     // Додати обробник події для зміни розміру вікна
//     window.addEventListener('resize', updateVisibleItems);
// });


document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const portfolioItems = document.querySelectorAll('.work-portfolio__item');
    let visibleItems; 

    
    if (!showMoreBtn || !portfolioItems || portfolioItems.length === 0) {
        
        return;
    }

    
    updateVisibleItems();

    
    showMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        
        visibleItems += getItemsToShow();
        
        showItems();
    });

    
    function getItemsToShow() {
        if (window.innerWidth > 1024) {
            return 9; 
        } else if (window.innerWidth > 768) {
            return 6; 
        } else {
            return 3; 
        }
    }

   
    function updateVisibleItems() {
        visibleItems = getItemsToShow();
        showItems();
    }

    
    function showItems() {
        portfolioItems.forEach(function(item, index) {
            if (index < visibleItems) {
                item.style.display = 'flex'; 
            } else {
                item.style.display = 'none'; 
            }
        });

        
        if (visibleItems >= portfolioItems.length) {
            showMoreBtn.style.display = 'none';
        } else {
            showMoreBtn.style.display = 'flex';
        }
    }


    window.addEventListener('resize', updateVisibleItems);
});




////// swiper project portfolio

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false, 
    loopedSlides: 6,
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 6,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: false, 
    loopedSlides: 6,
});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;




////history slider

var menu = ['Present', 'March 2019', 'November 2018', 'July 2015', 'August 2010', 'February 2007', 'May 2004', 'October 2001', 'June 2000']
var mySwiper = new Swiper('#about-swiper', {
  slidesPerView: 1, 
    loop: true,
   
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span class="history__pagination-subtitle">' + (menu[index]) + '</span>' + '</span>';
        },
    },

    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })


/////// Load more


document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtnPartners');
    const portfolioItems = document.querySelectorAll('.clients__item');
    let visibleItems;

    // Перевірка наявності елементів showMoreBtn і portfolioItems
    if (showMoreBtn !== null && portfolioItems.length > 0) {
        updateVisibleItems();

        showMoreBtn.addEventListener('click', function(event) {
            event.preventDefault();
            visibleItems += getItemsToShow();
            showItems();
        });

        function getItemsToShow() {
            if (window.innerWidth > 1024) {
                return 12;
            } else if (window.innerWidth > 768) {
                return 6;
            } else if (window.innerWidth > 425) {
                return 3;
            } else {
                return 4;
            }
        }

        function updateVisibleItems() {
            visibleItems = getItemsToShow();
            showItems();
        }

        function showItems() {
            portfolioItems.forEach(function(item, index) {
                if (index < visibleItems) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });

            if (visibleItems >= portfolioItems.length) {
                showMoreBtn.style.display = 'none';
            } else {
                showMoreBtn.style.display = 'flex';
            }
        }

        window.addEventListener('resize', updateVisibleItems);
    }
});







document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(function(toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const textBlock = document.getElementById(targetId);

            // Toggle the open class on the parent .offer__block
            this.parentNode.classList.toggle('open');
        });
    });
});

///// modal window



document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let modalOpen = false;

    
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            body.classList.add('modal-open'); 
            modalOpen = true;
        }
    }

    
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            body.classList.remove('modal-open'); 
            modalOpen = false;
        }
    }

    
    const openModalSubBtn = document.getElementById('openModalSubBtn');
    if (openModalSubBtn) {
        openModalSubBtn.addEventListener('click', function() {
            openModal('modalSub');
       });
    }

    const openModal2Btn = document.getElementById('openModalCVBtn');
    if (openModal2Btn) {
        openModal2Btn.addEventListener('click', function() {
            openModal('modalCV');
        });
    }

    
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-id');
            closeModal(modalId);
        });
    });

    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal') && modalOpen) {
            const modalId = event.target.id;
            closeModal(modalId);
        }
    });

    
    window.addEventListener('scroll', function() {
        if (modalOpen) {
            window.scrollTo(0, 0); 
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');

  container.addEventListener('change', function(event) {
    if (event.target && event.target.id === 'fileUpload') {
      const fileNameElement = document.querySelector('.modal__file-name');
      const fileName = event.target.files[0].name;
      fileNameElement.textContent = fileName;
    }
  });
});





/////validation

// const form = document.getElementById('form');
// const username = document.getElementById('app-name');
// const phone = document.getElementById('app-phone');
// const email = document.getElementById('app-email');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// };

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = 'Looks good';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return re.test(email);
// };

// const validateInputs = () => {
//     const nameValue = username.value.trim();
//     const phoneValue = phone.value.trim();
//     const emailValue = email.value.trim();

//     if (nameValue === '') {
//         setError(username, 'Name is required');
//     } else {
//         setSuccess(username);
//     }

//     if (emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if (phoneValue === '') {
//         setError(phone, 'Phone is required');
//     } else {
//         setSuccess(phone);
//     }
// };


 document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('form');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission

                const inputs = form.querySelectorAll('.application__input');

                inputs.forEach(function(input) {
                    if (input.value.trim() === '') {
                        input.classList.add('application__error');
                    } else {
                        input.classList.remove('application__error');
                    }
                });
            });
 });
        



////////////pricing-modal//////////////
 
document.addEventListener('DOMContentLoaded', function() {
  const mainItems = document.querySelectorAll('.pricing__table-main');

  mainItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const modal = document.getElementById('pricingBasic');
      modal.style.display = 'block';

      const closeBtn = modal.querySelector('.pricing-modal__close');
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });

      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
});
