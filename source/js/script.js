'use strict';

// Оживление формы обратного звонка
if (window.matchMedia('(max-width: 767px)').matches) {
  var callbackForm = document.querySelector('.callback-form__group');
  var callbackFormBtn = document.querySelector('.callback-form__button');
  var callbackFormOpenBtn = document.querySelector('.hero__button');
  var callbackFormCloseBtn = callbackForm.querySelector('.callback-form__close');

  // Открытие формы обратного звонка
  callbackFormOpenBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    callbackFormOpen();
  });

  // Закрытие формы обратного звонка
  callbackFormCloseBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    callbackFormClose();
  });
}

// Открытие формы обратного звонка
function callbackFormOpen() {
  callbackForm.classList.add('callback-form__group--shown');
  callbackFormBtn.classList.add('callback-form__button--shown');

  // Плавное затухание кнопки открытия формы обратного звонка
  callbackFormOpenBtn.style.opacity = 1;

  (function fadeOut() {
    if (callbackFormOpenBtn.style.opacity > 0) {
      callbackFormOpenBtn.style.opacity -= 0.1;
      setTimeout(fadeOut, 50);
    } else {
      callbackFormOpenBtn.style.display = 'none';
    }
  })();
}

// Закрытие формы обратного звонка
function callbackFormClose() {
  // Сброс CSS-анимации
  callbackForm.classList.remove('callback-form__group--shown');
  void callbackForm.offsetWidth;
  callbackForm.classList.add('callback-form__group--shown');

  callbackForm.style.animationDirection = 'reverse';

  window.setTimeout(function () {
    callbackFormBtn.classList.remove('callback-form__button--shown');
  }, 500);

  window.setTimeout(function () {
    callbackForm.classList.remove('callback-form__group--shown');
    callbackForm.style.animationDirection = null;
  }, 1000);

  // Плавное появление кнопки открытия формы обратного звонка
  callbackFormOpenBtn.style.display = null;

  (function fadeIn() {
    var opacityValue = parseFloat(callbackFormOpenBtn.style.opacity);

    if (opacityValue < 1) {
      opacityValue += 0.1;
      callbackFormOpenBtn.style.opacity = opacityValue;
      setTimeout(fadeIn, 50);
    }
  })();
}

// Оживление блока заболеваний
var ailmentLinks = document.querySelectorAll('.ailments__item a');
var ailmentsFigure = document.querySelector('.ailments__figure');
var ailmentMarkers = ailmentsFigure.querySelectorAll('.ailments__image-marker');

var addAilmentLinksClickHandler = function (link, marker) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    link.parentElement.classList.toggle('ailments__item--active');
    marker.classList.toggle('ailments__image-marker--active');

    if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches) {
      ailmentsFigure.scrollIntoView({behavior: 'smooth'});
    }
  });
};

for (var i = 0; i < ailmentLinks.length; i++) {
  addAilmentLinksClickHandler(ailmentLinks[i], ailmentMarkers[i]);
}

// Оживление блока отзывов
var testimonialBtns = document.querySelectorAll('.testimonials__button');
var testimonialTabs = document.querySelectorAll('.testimonials__tab');

testimonialBtns[0].parentElement.classList.add('testimonials__button-wrapper--active');
testimonialTabs[0].classList.add('testimonials__tab--active');

var addTestimonialBtnsClickHandler = function (btn, tab) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (!btn.parentElement.classList.contains('testimonials__button-wrapper--active')) {
      document.querySelector('.testimonials__button-wrapper--active').classList.remove('testimonials__button-wrapper--active');
      document.querySelector('.testimonials__tab--active').classList.remove('testimonials__tab--active');

      btn.parentElement.classList.add('testimonials__button-wrapper--active');
      tab.classList.add('testimonials__tab--active');
    }
  });
};

for (var j = 0; j < testimonialBtns.length; j++) {
  addTestimonialBtnsClickHandler(testimonialBtns[j], testimonialTabs[j]);
}
