'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  e.preventDefault();
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML =
//   'We use cookies for improved. <button class="btn btn--close-cookie">Got it!</button> ';

// header.append(message);

// document.querySelector('.btn--close-cookie'),
//   addEventListener('click', function () {
//     message.parentElement.removeChild(message);
//   });

// //? Styles
// message.style.backgroundColor = '#35232d';
// message.style.width = '120%';

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, scrollY);

  console.log('height/width viewport', document.documentElement.clientHeight);
  console.log('height/width viewport', document.documentElement.clientWidth);

  // Scrolling (first one is the x position, the second is the top)
  // window.scrollTo(
  //   s1coords.left,
  //   s1coords.top + window.pageXOffset + window.pageYOffset
  // );

  //* In order to implement smooth scrolling we need to specify an object with an left, top and behavior properties

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //* we take the element we want to scroll to and then call and method "scrollIntoView"

  section1.scrollIntoView({ behavior: 'smooth' });
});
