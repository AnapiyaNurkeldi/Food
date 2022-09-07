window.addEventListener('DOMContentLoaded', () => {
    'use strict';

            const modal = document.querySelector('.modal'),
            modalclose = document.querySelector('.modal__close'),
            btn = document.querySelector('.btn');

          function showModalWindow() {
            modal.classList.add('show');
            modal.classList.remove('hide');
          }
          btn.addEventListener('click', showModalWindow);
          function hideModalWindow() {
            modal.classList.add('hide');
            modal.classList.remove('show');
          }
          modalclose.addEventListener('click', hideModalWindow);
});