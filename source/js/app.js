// Скрипт для открытия и закрытия меню

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// валидация формы
var form = document.querySelector('.form__form');
var phone = form.querySelector('.form__phone');
var email = form.querySelector('.form__email');
var validity = form.querySelector('.form__validity')

// phone.addEventListener('click", function (evt) {

// }

// );

form.addEventListener("submit", function (evt) {
  if (!phone.value || !email.value) {
    evt.preventDefault();
    validity.classList.add('form__validity--invalid');

    // console.log("в штате йова все хуёва");

    // popup.classList.remove("modal-error");
    // popup.offsetWidth = popup.offsetWidth; // Хак. чтобы анимация ошибки отрабатывала несколько раз, если форма не валидна.
    // popup.classList.add("modal-error");
    // } else {
    //   if (isStorageSupport) {
    //     localStorage.setItem("username", username.value);
    //   //   localStorage.setItem("email", email.value);
    //   }

  }
});
